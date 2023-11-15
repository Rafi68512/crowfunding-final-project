const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');


// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Crowdfunding APP');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
