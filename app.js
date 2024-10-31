const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(express.json());

//routes
app.use("/api", productRoutes);
app.use("/api", orderRoutes);

module.exports = app;
