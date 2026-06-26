console.log('Starting index.js...');

const express = require('express');
const mongoose = require('mongoose');
const urlRoutes = require('./routes/url');

const app = express();
const PORT = 8006;

async function connectToMongoDB() {
  console.log(' Attempting to connect to MongoDB...');
  try {
    await mongoose.connect("mongodb://localhost:27017/short-url", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error(" MongoDB connection error:", error);
    process.exit(1);
  }
}

connectToMongoDB();

app.use(express.json());
app.use("/url", urlRoutes);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
