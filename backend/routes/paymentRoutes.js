import express from "express";
import midtransClient from "midtrans-client";
import pool from '../server.js'; 

const router = express.Router();

router.post("/process-transaction", async (req, res) => {
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

        snap.createTransaction(parameter).then(async (transaction) => {
            const dataPayment = {
                response: JSON.stringify(transaction),
            };
            const token = transaction.token;

            // Simpan data transaksi ke dalam PostgreSQL
            try {
                const client = await pool.connect();
                await client.query('BEGIN');
                const queryText = 'INSERT INTO transactions (proyek_id, total, nama) VALUES ($1, $2, $3)';
                const values = [req.body.order_id, req.body.total, req.body.name];
                await client.query(queryText, values);
                await client.query('COMMIT');
                client.release();

                res.status(200).json({ message: "berhasil", dataPayment, token: token });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
