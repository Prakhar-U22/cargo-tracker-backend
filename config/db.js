const mongoose = require('mongoose');

const uri = `mongodb+srv://prakhar1:prakhar1@cluster0.x8a0i.mongodb.net/cargo?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = async () => {
  try {
    // Connecting to MongoDB using the provided URI
    await mongoose.connect(uri);
    console.log("Connected successfully");
} catch (err) {
    // Handling errors during MongoDB connection or data fetching
    console.log("---", err);
}
};

module.exports = connectDB;