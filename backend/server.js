const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const UserRoutes = require("./routes/userRoute");
const connection = require("./config/dbConnect");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/api/", UserRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello developers from GFG",
  });
});

connection();

const startServer = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server started on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
