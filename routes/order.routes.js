const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Order = require("../models/Order.model")
// creat order

router.post("/order", (req, res, next) => {
    const { user,shippingAddress, country,city,postalCode } = req.body;
 
    Order.create({ user,shippingAddress, country,city,postalCode })

      .then((response) => res.json(response))
      .catch((err) => res.json(err));
  });
// get All orders
router.get("/order", (req, res, next) => {
    Order.find()
      
      .then((allOrders) => res.json(allOrders))
      .catch((err) => res.json(err));
  });
   //get order by Id
   router.get("/order/:orderId", (req, res, next) => {
    const { orderId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      res.status(400).json({ message: "Specified order is not valid" });
      return;
    }
    Order.findById(orderId)
    .populate("user")
    .populate("product")
      .then((order) => res.status(200).json(order))
      .catch((error) => res.json(error));
  });
  // put edit order by ID

  router.put("/order/:orderId", (req, res, next) => {
    const { orderId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
  
    Order.findByIdAndUpdate(orderId, req.body, { new: true })
    .populate("user")
    .populate("product")
    .then((updatedOrder) => res.json(updatedOrder))
    .catch((error) => res.json(error));
  });
   // delete Order by ID

   router.delete("/order/:orderId", (req, res, next) => {
    const { orderId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
  
    Order.findByIdAndRemove(orderId)
      .then(() =>
        res.json({
          message: `Order with ${orderId} is removed successfully.`,
        })
      )
      .catch((error) => res.json(error));
  });

  module.exports = router;