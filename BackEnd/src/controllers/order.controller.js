const Order = require('../models/order.model');

const OrderController = {
  CreateOrder: async (req, res) => {
    try {
      await Order.CreateOrder((rows) => {
        res.status(201).json({
          message: 'success',
          order: rows,
        });
      }, req.body);
    } catch (error) {
      res.json(error + '');
    }
  },
  CreatePreOrder: async (req, res) => {
    try {
      await Order.CreatePreOrder((id, summary) => {
        res.status(201).json({
          order_id: id,
          order_summary: summary 
        });
      }, req.body.orderPrices);
    } catch (error) {
      res.json(error + '');
    }
  },
};

module.exports = OrderController;
