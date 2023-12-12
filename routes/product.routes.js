const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Product = require("../models/Product.model");

// add a pproduct
router.post("/product", (req, res, next) => {
  const { name, brand, category, description, price, image } = req.body;

  Product.create({ name, brand, category, description, price, image })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

// get all products
router.get("/product", (req, res, next) => {
  console.log("Here");
  Product.find()
    .populate("category")
    .then((product) => {
      console.log(product);
      res.status(200).json(product);
    })
    .catch((error) => {
      next(error);
    });
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
  const { name, brand, category, description,price, image } = req.body;

  const newRequestBody = {
    name, brand, category, description,price, image 
  }

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Product.findByIdAndUpdate(productId, newRequestBody,{new:true})
    .then((updatedproduct) => res.json(updatedproduct))
    .catch((error) => res.json(error));
});

// delete product by ID

router.delete("/product/:productId", (req, res, next) => {
  const { productId } = req.params;
  Product.findByIdAndDelete(productId)
  .then(() => {
    res.status(204).send()
  })
  .catch((error) => {
    next(error)
  });
});


module.exports = router;
