import express from "express";
import {
  createProduct,
  deleteProduct,
  getDetailProduct,
  getProduct,
  updateProduct,
} from "../controllers/ProductController.js";

const router = express.Router();

router.get("/product", getProduct);

router.get("/product/:id", getDetailProduct);

router.post("/product", createProduct);

router.put("/product/:id", updateProduct);

router.delete("/product/:id",deleteProduct);

export const ProductRouter = router;
