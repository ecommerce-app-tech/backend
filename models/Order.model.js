const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const orderSchema = new Schema({
 
user:{type: Schema.Types.ObjectId,
  ref:'User',
},
product:{type :String},
  shippingAddress: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  state:{type:String, required: true},
  postalCode: { type: Number, required: true },
},

{
  // this second object adds extra properties: `createdAt` and `updatedAt`
  timestamps: true,
}
);

module.exports = model("Order", orderSchema);
