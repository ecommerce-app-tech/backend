const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const productSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    brand:{
        type: String,
        trim: true,
        required: true,
    },
    category: {
     
      type: String,
      enum : ['Smartphones','Smartwaches','Computers','Earphone','Tablets'],
   },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32,
    },
    image: {
      type: String,
      required :true,
      
    },
  },
  { timestamps: true }
);
module.exports = model('Product', productSchema);
