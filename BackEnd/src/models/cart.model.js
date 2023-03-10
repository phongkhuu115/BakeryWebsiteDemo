const db = require('../configs/database').db;
const util = require('util');
const dotenv = require('dotenv');
const { error } = require('console');
dotenv.config();

const query = util.promisify(db.query).bind(db);

const Cart = {
  AddToCart: async (callback, cart_detail) => {
    return await query(
      'insert into cart_detail values(?,?,?)',
      Object.values(cart_detail),
      (err, rows) => {
        try {
          callback(err, rows);
        } catch (error) {
          
        }
      }
    );
  },
  GetCart: async (callback, id) => {
    return await query('select * from carts where user_id = ?', [id], (err, rows) => {
      callback(err, rows)
    })
  },
  GetAllItems: async (callback, id) => {
    return await query('select cakes.cake_id, cake_name, cake_price, cake_img, cart_detail.cake_quantity from cart_detail join cakes on cart_detail.cake_id = cakes.cake_id WHERE cart_id = ?', [id], (err, rows) => {
      callback(err, rows)
    })
  }
};

module.exports = Cart;
