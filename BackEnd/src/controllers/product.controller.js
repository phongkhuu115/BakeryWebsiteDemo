const Product = require('../models/product.model');
const dotenv = require('dotenv');
dotenv.config();

const ProductController = {
  GetAllCategory: (req, res) => {
    Product.GetAllCategory((err, rows) => {
      if (err) {
        res.json(err);
      }
      res.status(200).json(rows);
    });
  },
  GetProduct: (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;
    Product.GetProduct(
      (err, rows, total) => {
        if (err) res.json(err);
        res.status(200).json({
          message: 'get success',
          cake: rows,
          total: total[0],
        });
      },
      page,
      limit
    );
  },
  ViewDetail: (req, res) => {
    const id = req.query.id;
    Product.ViewDetail((data) => {
      res.status(200).json({
        message: 'success',
        product: data
      });
    }, id);
  },
  GetAllRating: async (req, res) => {
    try {
      await Product.GetAllRating((rows) => {
        res.status(200).json({
          message: 'success',
          rating: rows
        })
      }, req.query.id)
    }
    catch (err) {
      res.json(err + '')
    }
  }
};

module.exports = ProductController;
