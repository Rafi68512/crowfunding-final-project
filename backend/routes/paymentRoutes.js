const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const midtransClient = require("midtrans-client");
const axios = require("axios");
const dotenv = require("dotenv");
const { Proyek } = require("../models");
const seq = new Sequelize("donasi", "postgres", "12345", {
  host: "localhost",
  dialect: "postgres",
});

dotenv.config();

const router = express.Router();

const Pembayaran = seq.define(
  "Pembayaran",
  {
    user_id: {
      type: DataTypes.INTEGER,
    },
    proyek_id: {
      type: DataTypes.INTEGER,
    },
    jumlah_pembayaran: {
      type: DataTypes.DECIMAL,
    },
  },
  {
    tableName: "Pembayaran",
  }
);

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

router.post("/process-transaction", async (req, res) => {
  try {
    if (req.body.notification) {
      const notification = req.body.notification;

      const { orderId, transactionStatus } = notification;

      try {
        const payment = await Pembayaran.findOne({
          where: { proyek_id: orderId },
        });
        if (payment) {
          if (transactionStatus === "capture") {
            await payment.update({ transaction_status: "success" });
          } else if (transactionStatus === "cancel") {
            await payment.update({ transaction_status: "failure" });
          }

          res.status(200).send("Notification received and processed.");
        } else {
          res.status(404).send("Payment not found.");
        }
      } catch (error) {
        res.status(500).send("Error processing notification.");
      }
    } else {
      const parameter = {
        transaction_details: {
          order_id: req.body.order_id,
          gross_amount: req.body.jumlah,
        },
        customer_details: {
          user_id: req.body.user_id,
        },
      };

      const transaction = await snap.createTransaction(parameter);

      console.log("Data yang akan disimpan:", {
        user_id: req.body.user_id,
        proyek_id: req.body.order_id,
        jumlah_pembayaran: req.body.jumlah,
      });

      await Pembayaran.create({
        user_id: req.body.user_id,
        proyek_id: req.body.order_id,
        jumlah_pembayaran: req.body.jumlah,
      });

      const proyek = await Proyek.findByPk(req.body.order_id);
      if (proyek) {
        const totalTerkumpul = await Pembayaran.sum("jumlah_pembayaran", {
          where: { proyek_id: req.body.order_id },
        });

        await proyek.update({ terkumpul: totalTerkumpul });
      }

      res.status(200).json({
        message: "Berhasil menambahkan pembayaran.",
        token: transaction.token,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Endpoint untuk menampilkan seluruh data pembayaran (DATABASE)
router.get("/payments", async (req, res) => {
  try {
    const payments = await Pembayaran.findAll(); // Mengambil seluruh data pembayaran dari database

    res.status(200).json({
      message: "Data pembayaran berhasil ditemukan",
      data: payments,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Endpoint untuk mendapatkan detail transaksi berdasarkan transactionId
router.get("/transaction-details/:orderId", async (req, res) => {
  try {
    const { orderId } = req.params;
    const midtransApiUrl = `https://api.sandbox.midtrans.com/v2/${orderId}/status`; // URL API Midtrans yang sesuai dengan orderId

    // Pastikan untuk mengatur header Authorization dengan menggunakan Basic Auth
    const authHeader = {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.MIDTRANS_SERVER_KEY}:`
        ).toString("base64")}`,
      },
    };

    // Mengambil detail transaksi dari Midtrans menggunakan endpoint API
    const transactionDetails = await axios.get(midtransApiUrl, authHeader);

    res.status(200).json({
      message: "Detail transaksi berhasil ditemukan",
      data: transactionDetails.data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
