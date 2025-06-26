import express from "express";
import { addToCart, deleteCartItem, getCartItems, updateCartItem } from "../controllers/cart.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protectedRoute, addToCart);
router.get("/", protectedRoute, getCartItems);
router.delete("/", protectedRoute, deleteCartItem);
router.put("/", protectedRoute, updateCartItem);
export default router;