const router = require("express").Router();
const User = require('../models/User.model')

router.get("/user", (req, res, next) => {
    User.find()
      .then((allUser) => res.json(allUser))
      .catch((err) => res.json(err));
  });

router.get("/user/:userId", (req, res, next) => {
  
    const { userId } = req.params;
  
    User.findById(userId)
      .then((userDetails) => {
        res.status(200).json(userDetails)
      })
      .catch((error) => {
        next(error)
      })
  })
  
  module.exports = router;