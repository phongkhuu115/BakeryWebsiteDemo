const Cart = require('../models/cart.model');

const CartController = {
  AddToCart: async (req, res) => {
    await Cart.AddToCart((err, rows) => {
      if (err) {
        res.status(400).json({
          message: err + '',
        });
      }
      res.status(200).json({
        message: 'success',
      });
    }, req.body);
  },
};

module.exports = CartController;
