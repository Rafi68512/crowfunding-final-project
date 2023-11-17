import app from './app.js'
import pkg from 'pg';
const { Pool } = pkg;

const port = 3000

app.get("/", (req,res)=>{
    res.send(`Server berjalan di port ${port}`)
})

app.listen(3000,()=>{
    console.log(`Running on port ${port}`)
})

// Konfigurasi koneksi ke PostgreSQL
const pool = new Pool({
    user: 'postgres', 
    host: 'localhost',
    database: 'donasi', 
    password: 'sabdha04', 
    port: 5432, 
});

export default pool;
