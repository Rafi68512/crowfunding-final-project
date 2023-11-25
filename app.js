const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes'); // Mengimpor file authRoutes

const app = express();

app.use(bodyParser.json());

// Memasang rute authRoutes ke dalam aplikasi
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
