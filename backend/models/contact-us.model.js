const mongoose = require('mongoose')


const contactUsSchema =mongoose.Schema({
  fullName:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  number:{
    type:String,
    required:true
  }  
})

const ContactUs = mongoose.model("ContactUs",contactUsSchema)
module.exports= ContactUs