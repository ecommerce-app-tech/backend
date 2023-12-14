const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const orderSchema = new Schema({
 
user:{type:Schema.Types.ObjectId, ref:"User"},
  shippingAddress: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  state:{type:String, required: true},
  postalCode: { type: Number, required: true },
  price:{ type: Number, required:true}
});

module.exports = model("Order", orderSchema);
