const mongoose = require('mongoose')


const userSchema =mongoose.Schema({
  fullName:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  cartItems: [
    { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'CartItem' 
    } 
  ]
})

const User = mongoose.model("User",userSchema)
module.exports= User