const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const shipmentRoutes = require('./routes/shipmentRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Cargo Tracker API');
});
app.use('/api', shipmentRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
