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
  GetCart: async (req, res) => {
    await Cart.GetCart((err, rows) => {
      if (err) {
        res.status(400).json({
          message: err + '',
        });
      }
      else {
        res.status(200).json({
          message: 'success',
          cart: rows[0]
        })
      }
    }, req.query.id);
  },
};

module.exports = CartController;
