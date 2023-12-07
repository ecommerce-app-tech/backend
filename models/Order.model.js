const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const orderSchema = new Schema(
   { 
    user:{
        type: String,
        required: true,
        
      },
      
        shippingAddress: 
        { type: String,
         required: true 
        },
         country: 
        { type: String,
        required: true
     },
        city:
         { type: String, 
        required: true 
    },
        postalCode: 
        { type: Number, 
        required: true 
    },
        
      
    }
)

module.exports = model('Order', orderSchema);