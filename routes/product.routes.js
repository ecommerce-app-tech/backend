const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Product = require("../models/Product.model")



// add a pproduct
router.post("/product", (req, res, next) => {
    const { name, brand,category,description,price,image } = req.body;
  
    Product.create({ name, brand,category,description,price,image })
      .then((response) => res.json(response))
      .catch((err) => res.json(err));
  });
// get all products
  router.get("/Product", (req, res, next) => {
    Product.find()
      .then((allProduct) => res.json(allProduct))
      .catch((err) => res.json(err));
  });

  // get product by ID

  router.get("/product/:productId", (req, res, next) => {
    const { productId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
    Product.findById(productId)
      .then((product) => res.status(200).json(product))
      .catch((error) => res.json(error));
  });

  // put edit product by ID

  router.put("/product/:productId", (req, res, next) => {
    const { productId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
  
    Product.findByIdAndUpdate(productId, req.body, { new: true })
      .then((updatedproduct) => res.json(updatedproduct))
      .catch((error) => res.json(error));
  });

  // delete product by ID

  router.delete("/product/:productId", (req, res, next) => {
    const { productId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
  
    Product.findByIdAndRemove(productId)
      .then(() =>
        res.json({
          message: `Product with ${productId} is removed successfully.`,
        })
      )
      .catch((error) => res.json(error));
  });
  
  module.exports = router;