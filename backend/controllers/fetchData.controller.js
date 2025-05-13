const CartItem = require("../models/CartItem.model");
const User = require("../models/user.model");

const addToCartHandler = async (req, res) => {
  try {
    const { userId, productId, title, price, imageUrl, quantity } = req.body;

    const newItem = new CartItem({
      user: userId,
      productId,
      title,
      price,
      imageUrl,
      quantity,
    });

    const savedItem = await newItem.save();

    await User.findByIdAndUpdate(userId, {
      $push: { cartItems: savedItem._id },
    });

    res.status(201).json({
      success: true,
      message: "Item added to cart",
      data: savedItem,
    });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const getUserCartHandler = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).populate("cartItems");
    console.log(user);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "Cart fetched successfully",
      cartItems: user.cartItems,
    });
  } catch (error) {
    console.error("Error fetching user cart:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const clearUserCartHandler = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findById(userId).populate('cartItems');
        console.log(user);
        

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

         user.cartItems = [];
        await user.save();

        res.status(200).json({
            success: true,
            message: 'Cart cleared successfully',
        });
    } catch (error) {
        console.error('Error clearing cart:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};


module.exports = { addToCartHandler, getUserCartHandler,clearUserCartHandler };
