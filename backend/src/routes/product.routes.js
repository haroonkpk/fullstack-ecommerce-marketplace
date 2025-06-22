import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getFeaturedFroducts,
  toggleFeaturedProduct,
} from "../controllers/product.controller.js";
import { adminRoute, protectedRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/", getAllProducts);
router.get("/featuredProducts", getFeaturedFroducts);
router.post("/", protectedRoute, adminRoute, createProduct);
router.delete("/:id", protectedRoute, adminRoute, deleteProduct);
router.patch("/:id", protectedRoute, adminRoute, toggleFeaturedProduct);
export default router;
