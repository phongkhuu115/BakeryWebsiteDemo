const routes = require('express').Router();
const UserController = require('../controllers/user.controller');
const AuthController = require('../controllers/auth.controller');
const MiddlewareController = require('../controllers/middleware.controller');
const ProductController = require('../controllers/product.controller');
const User = require('../models/user.model');
const CartController = require('../controllers/cart.controller');
const OrderController = require('../controllers/order.controller');

routes.get(
  '/getalluser',
  MiddlewareController.VerifyJWT,
  UserController.GetAllUser
);
//Authentication
routes.post('/register', AuthController.Register);
routes.post('/login', AuthController.Login);
routes.post('/refresh', AuthController.RefreshToken);
//Product
routes.get('/category', ProductController.GetAllCategory);
routes.get('/products', ProductController.GetProduct);
routes.get('/detail', ProductController.ViewDetail);
routes.get('/getallrating', ProductController.GetAllRating);
//Cart
routes.get('/getcart', MiddlewareController.VerifyJWT, CartController.GetCart);
routes.get(
  '/getitems',
  MiddlewareController.VerifyJWT,
  CartController.GetAllItems
);
routes.post(
  '/addtocart',
  MiddlewareController.VerifyJWT,
  CartController.AddToCart
);
//Order
routes.post(
  '/createOrder',
  MiddlewareController.VerifyJWT,
  OrderController.CreateOrder
);
routes.post(
  '/createPreOrder',
  MiddlewareController.VerifyJWT,
  OrderController.CreatePreOrder
);

module.exports = routes;
