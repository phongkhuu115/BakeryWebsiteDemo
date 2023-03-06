const db = require('../configs/database').db;
const util = require('util');
const dotenv = require('dotenv');
dotenv.config();

const query = util.promisify(db.query).bind(db);
async function getTotal() {
  return await query(
    "select count(*) 'Total_Product', ROUND(count(*)/10,0) 'Total_Page' from cakes"
  );
}

const Product = {
  GetAllCategory: (callback) => {
    return db.query('select distinct cake_category from cakes', callback);
  },
  GetProduct: async (callback, page, number) => {
    const total = await getTotal();
    return db.query(
      `select * from cakes limit ${
        (Number(page) - 1) * Number(number)
      }, ${Number(number)}`,
      (err, rows) => {
        callback(err, rows, total);
      }
    );
  },
  ViewDetail: async (callback, id) => {
    try {
      const rows = await query(`select * from cakes where cakes.cake_id = ?`, id);
      const infoID = rows[0].cake_infomationID;
      const nutritionID = rows[0].cake_nutritionID;
      const info = await query(
        `select * from cake_infomation where cake_infomationID = ?`,
        infoID
      );
      const nutrition = await query(
        `select * from cake_nutrition where cake_nutritionID = ?`,
        nutritionID
      );
      const data = {
        cake: rows[0],
        info: info[0],
        nutrition: nutrition[0],
      };
      callback(data);
    } catch (err) {
      console.log(err);
    }
  },
  GetAllRating: async (callback, id) => {
    try {
      const rows = await query('select * from cake_rate where cake_id = ?', [id])
      callback(rows)
    } catch (err) {
      throw new Error(err)
    }
  }
};

module.exports = Product;
