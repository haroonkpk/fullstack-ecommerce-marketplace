import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getFeaturedFroducts,
} from "../controllers/product.controller.js";
import { adminRoute, protectedRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/", getAllProducts);
router.get("/featuredFroducts", getFeaturedFroducts);

router.post("/", protectedRoute, adminRoute, createProduct);

router.delete("/:id", protectedRoute, adminRoute, deleteProduct);
export default router;
