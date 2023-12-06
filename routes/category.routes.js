const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Category = require("../models/Category.model")

//create category
router.post("/category", (req, res, next) => {
    const { name } = req.body;
    Category.findOne({ name })
    .then((foundCategory) => {
      
      if (foundCategory) {
        res.status(400).json({ message: "Category already exists." });
        return;
    }
   Category.create({ name })
      .then((response) => res.json(response))
      .catch((err) => res.json(err));
  })});

  // get all category
  router.get("/category", (req, res, next) => {
    Category.find()
      .then((allCategory) => res.json(allCategory))
      .catch((err) => res.json(err));
  });


  // get one category
  router.get("/category/:categoryId", (req, res, next) => {
    const { categoryId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
    Category.findById(categoryId)
      .then((category) => res.status(200).json(category))
      .catch((error) => res.json(error));
  });

  module.exports = router;