import express from "express";
import { connectDB } from "./lib/db.js";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import cartRoute from "./routes/cart.route.js";
import saveForLater from "./routes/saveForLater.routes.js";
import cookieParser from "cookie-parser";
import productRoute from "./routes/product.routes.js";
import cors from "cors";
import path from "path";

dotenv.config();
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

const __dirname = path.resolve();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

try {
  app.use("/api/auth", authRoute);
} catch (err) {
  console.error("authRoute error", err);
}

try {
  app.use("/api/product", productRoute);
} catch (err) {
  console.error("productRoute error", err);
}

try {
  app.use("/api/cart", cartRoute);
} catch (err) {
  console.error("cartRoute error", err);
}

try {
  app.use("/api/saveForLater", saveForLater);
} catch (err) {
  console.error("saveForLater error", err);
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.use((req, res, next) => {
    const filePath = path.join(__dirname, "../frontend", "dist", "index.html");
    res.sendFile(filePath, (err) => {
      if (err) {
        console.error("Failed to serve frontend:", err);
        res.status(500).send("Something went wrong");
      }
    });
  });
}

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectDB();
});
