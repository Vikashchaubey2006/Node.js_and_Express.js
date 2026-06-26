const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");
const { handleGetShortURL } = require("./controllers/url");

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/url-shortner")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use(express.json());

app.use("/url", urlRoute);

app.get("/:shortId", handleGetShortURL);

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));