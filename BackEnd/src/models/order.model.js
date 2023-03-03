const db = require('../configs/database').db;
const util = require('util');
const crypto = require('crypto');

const query = util.promisify(db.query).bind(db);

const Order = {
  CreateOrder: async (callback, orderInfo, orderDetail) => {
    try {
      await query(
        'INSERT INTO orders(order_id,order_userID,order_address,order_payment) VALUES(?,?,?,?)',
        [
          orderInfo.order_id,
          orderInfo.user_id,
          orderInfo.order_address,
          orderInfo.order_payment,
        ]
      );
      const detail_array = JSON.parse(orderDetail);
      detail_array.forEach(async (item) => {
        await query('INSERT INTO order_detail VALUES(?,?,?,?)', [
          orderInfo.order_id,
          item.cake_id,
          item.cake_quantity,
          item.cake_price,
        ]);
      });
      callback();
    } catch (error) {
      throw new Error(error);
    }
  },
  CreatePreOrder: async (callback, orderPrices) => {
    let uuid = crypto.randomUUID();
    let prices = JSON.parse(orderPrices);
    let summary = 0;
    for (let i = 0; i < prices.length; i++) {
      summary += prices[i]
    }
    callback(uuid, summary);
  },
};

module.exports = Order;
