import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  productFitlerController,
  createProductController,
  updateProductController,
  getSingleProductController,
  productListController,
  deleteProductController,
  productPhotoController,
  productCountController,
  getProductController,
} from "../controller/productController.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//get single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete(
  "/delete-product/:pid",
  requireSignIn,
  isAdmin,
  deleteProductController
);

//fiter product
router.post("/product-filter", productFitlerController);

//product count
router.get("/product-count", productCountController);

// product per page
router.get("/product-list/:page", productListController);

export default router;
