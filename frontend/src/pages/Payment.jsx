import { useEffect, useState } from "react";
import { Box, TextField, IconButton, Card, CardContent } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import axios from "axios";

const Payment = () => {
  const [user_id, setUser_id] = useState("");
  const [order_id, setOrder_id] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [token, setToken] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");

  const process = async () => {
    const data = {
      user_id: user_id,
      order_id: order_id,
      jumlah: jumlah,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      "http://localhost:3000/api/payment/process-transaction",
      data,
      config
    );
    setToken(response.data.token);
  };

  useEffect(() => {
    if (token) {
      window.snap.pay(token, {
        onSuccess: (result) => {
          localStorage.setItem("Pembayaran", JSON.stringify(result));
          setToken("");
          alert("Pembayaran berhasil! Terima kasih atas donasinya.");
        },
        onPending: (result) => {
          localStorage.setItem("Pembayaran", JSON.stringify(result));
          setToken("");
          alert("Pembayaran masih dalam proses.");
        },
        onError: (error) => {
          console.log(error);
          setToken("");
          alert("Terjadi kesalahan dalam proses pembayaran.");
        },
        onClose: () => {
          console.log("Anda belum menyelesaikan pembayaran");
          setToken("");
          alert("Anda belum menyelesaikan pembayaran.");
        },
      });
      setUser_id("");
      setOrder_id("");
      setJumlah("");
    }
  }, [token]);

  useEffect(() => {
    const midtrans_Url = "https://app.sandbox.midtrans.com/snap/snap.js";
    let scriptTag = document.createElement("script");
    scriptTag.src = midtrans_Url;
    const midtransClientKey = import.meta.env.MIDTRANS_CLIENT_KEY;
    scriptTag.setAttribute("data-client-key", midtransClientKey);
    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <>
      <IconButton
        onClick={() => window.history.back()}
        style={{ position: "absolute", left: "10px", marginTop: "20px", color: "white" }}
      >
        <ArrowBack />
      </IconButton>
      <h1
        className="text-4xl bg-cyan-700 hover:bg-cyan-500 text-white font-bold px-8"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "10vh",
        }}
      >
        Formulir Donasi
      </h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box
          sx={{ display: "flex", flexDirection: "column", height: "100vh", width: "50vw", p: 4 }}
        >
          <h1 className="text-black font-bold px-4">Pilih Nominal Donasi</h1>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            {[5000, 10000, 25000, 50000, 100000, 150000].map((amount) => (
              <Card
                key={amount}
                onClick={() => {
                  setJumlah(amount);
                  setSelectedAmount(amount);
                }}
                className={`p-4 cursor-pointer mb-4 ${
                  selectedAmount === amount ? "selected-card" : ""
                }`}
                style={{
                  width: "30%",
                  backgroundColor: selectedAmount === amount ? "lightblue" : "",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                <CardContent>
                  <span style={{ fontWeight: "bold" }}>Rp.{amount}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <br />
          <TextField
            type="number"
            label="User ID"
            value={user_id}
            onChange={(e) => setUser_id(parseInt(e.target.value))}
            sx={{ mb: 2 }}
          />
          <TextField
            type="number"
            label="Order ID"
            value={order_id}
            onChange={(e) => setOrder_id(parseInt(e.target.value))}
            sx={{ mb: 2 }}
          />
          <TextField
            type="number"
            label="Jumlah Rp."
            value={jumlah}
            onChange={(e) => setJumlah(e.target.value)}
            sx={{ mb: 2 }}
          />{" "}
          <br />
          <button
            className="shadow bg-cyan-500 hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={process}
          >
            Donasi
          </button>
        </Box>
      </div>
    </>
  );
};

export default Payment;
