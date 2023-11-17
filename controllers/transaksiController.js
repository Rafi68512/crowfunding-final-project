const midtransClient = require("midtrans-client");

const processTransaction = async (req, res) => {
  try {
    const snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: "SB-Mid-server-3dWfju7Oj_ipUohRJIwRMakm",
      clientKey: "SB-Mid-client-8fEeQxWzAXIykRuE",
    });

    const parameter = {
      transaction_details: {
        order_id: req.body.order_id,
        gross_amount: req.body.total,
      },
      customer_details: {
        first_name: req.body.name,
      },
    };

    snap.createPembayaran(parameter).then(async (pembayaran) => {
      const dataPayment = {
        response: JSON.stringify(pembayaran),
      };
      const token = transaction.token;

      // Simpan data transaksi ke dalam PostgreSQL
      try {
        await pembayaran.create({
          proyek_id: req.body.order_id,
          total: req.body.total,
          nama: req.body.name,
        });

        res.status(200).json({ message: "berhasil", dataPayment, token });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  processTransaction,
};
