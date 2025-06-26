import express from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import {
  addToSaveForLater,
  getSaveForLaterItems,
  removeFromSaveForLater,
} from "../controllers/saveForLater.controller.js";

const router = express.Router();

router.post("/", protectedRoute, addToSaveForLater);
router.get("/", protectedRoute, getSaveForLaterItems);
router.delete("/", protectedRoute, removeFromSaveForLater);
export default router;
