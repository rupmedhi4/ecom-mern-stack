const mongoose = require('mongoose');

const cartItemSchema = mongoose.Schema({
    productId: Number,
    title: String,
    price: Number,
    imageUrl: String,
    quantity: { 
        type: Number, 
        default: 1 
    },
   
});

const CartItem = mongoose.model('CartItem', cartItemSchema);
module.exports = CartItem;
