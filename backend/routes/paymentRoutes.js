import express from 'express';
import sequelize from '../models/sequelize.js';
import {DataTypes} from 'sequelize';
import midtransClient from 'midtrans-client';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Definisikan model untuk pembayaran di luar route
const Pembayaran = sequelize.define('Pembayaran', {
    user_id: {
        type: DataTypes.INTEGER,
    },
    proyek_id: {
        type: DataTypes.INTEGER,
    },
    jumlah_pembayaran: {
        type: DataTypes.DECIMAL,
    },
}, {
    tableName: 'Pembayaran'
});

// Inisialisasi konfigurasi klien Midtrans
const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

router.post('/process-transaction', async (req, res) => {
    try {
        const parameter = {
            transaction_details: {
                order_id: req.body.order_id,
                gross_amount: req.body.jumlah,
            },
            customer_details: {
                user_id: req.body.user_id,
            },
        };

        // Buat transaksi di Midtrans
        const transaction = await snap.createTransaction(parameter);

        // Simpan informasi pembayaran ke dalam basis data
        await Pembayaran.create({
            user_id: req.body.user_id,
            proyek_id: req.body.order_id,
            jumlah_pembayaran: req.body.jumlah,
        });

        // Kirim respon ke klien dengan token dari Midtrans
        res.status(200).json({
            message: 'Berhasil menambahkan pembayaran.',
            token: transaction.token
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Endpoint untuk menampilkan seluruh data pembayaran (DATABASE)
router.get('/payments', async (req, res) => {
    try {
        const payments = await Pembayaran.findAll(); // Mengambil seluruh data pembayaran dari basis data

        res.status(200).json({
            message: 'Data pembayaran berhasil ditemukan',
            data: payments
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Endpoint untuk mendapatkan detail transaksi berdasarkan transactionId
router.get('/transaction-details/:transactionId', async (req, res) => {
    try {
        const { transactionId } = req.params;
        const midtransApiUrl = `https://api.sandbox.midtrans.com/v2/${transactionId}/status`; // Ganti dengan URL API Midtrans yang sesuai

        // Pastikan untuk mengatur header Authorization dengan menggunakan Basic Auth
        const authHeader = {
            headers: {
                Authorization: `Basic ${Buffer.from(`${process.env.MIDTRANS_SERVER_KEY}:`).toString('base64')}`
            }
        };

        // Mengambil detail transaksi dari Midtrans menggunakan endpoint API
        const transactionDetails = await axios.get(midtransApiUrl, authHeader);

        res.status(200).json({
            message: 'Detail transaksi berhasil ditemukan',
            data: transactionDetails.data
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Endpoint untuk membatalkan transaksi berdasarkan transactionId di Midtrans
router.delete('/cancel-transaction/:transactionId', async (req, res) => {
    try {
        const { transactionId } = req.params;
        const midtransApiUrl = `https://api.sandbox.midtrans.com/v2/${transactionId}/cancel`; // URL API cancel transaksi Midtrans

        // Pastikan untuk mengatur header Authorization dengan menggunakan Basic Auth
        const authHeader = {
            headers: {
                Authorization: `Basic ${Buffer.from(`${process.env.MIDTRANS_SERVER_KEY}:`).toString('base64')}`
            }
        };

        // Batalkan transaksi dengan memanggil API cancel transaksi Midtrans
        const cancelTransaction = await axios.post(midtransApiUrl, {}, authHeader);

        res.status(200).json({
            message: 'Transaksi berhasil dibatalkan di Midtrans',
            data: cancelTransaction.data
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Endpoint untuk menghapus data pembayaran berdasarkan ID pembayaran (DATABASE)
router.delete('/payments/:paymentId', async (req, res) => {
    try {
        const { paymentId } = req.params;

        // Cari data pembayaran berdasarkan ID
        const payment = await Pembayaran.findByPk(paymentId);

        if (!payment) {
            return res.status(404).json({
                message: 'Data pembayaran tidak ditemukan'
            });
        }

        // Hapus data pembayaran
        await payment.destroy();

        res.status(200).json({
            message: 'Data pembayaran berhasil dihapus'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

export default router;