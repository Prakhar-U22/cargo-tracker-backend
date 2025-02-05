const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const shipmentRoutes = require('./routes/shipmentRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', shipmentRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));