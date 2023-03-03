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
      const rows = await query(`select * from cake where cake.Cake_ID = ?`, id);
      const infoID = rows[0].Cake_InfomationID;
      const nutritionID = rows[0].Cake_NutritionID;
      const info = await query(
        `select * from cake_infomation where Infomation_ID = ?`,
        infoID
      );
      const nutrition = await query(
        `select * from cake_nutrition where Nutrition_ID = ?`,
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
};

module.exports = Product;
