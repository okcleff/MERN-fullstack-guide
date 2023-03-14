require("dotenv").config();

const mongoose = require("mongoose");

const Product = require("./models/product");

const url = `${process.env.MONGO_URL}`;

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

const createProduct = async (req, res, next) => {
  const { name, price } = req.body;
  const createdProduct = new Product({
    name,
    price,
  });
  const result = await createdProduct.save();

  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
