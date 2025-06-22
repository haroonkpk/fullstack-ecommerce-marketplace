import mongoose from "mongoose";
import Product from "../models/product.models.js";
import cloudinary from "../lib/cloudinary.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ products });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getFeaturedFroducts = async (req, res) => {
  try {
    const featuredFroducts = await Product.find({ isFeatured: true }).lean();
    res.json(featuredFroducts);
  } catch (error) {
    console.log("error in getFeaturedFroducts route");
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, description, price, images, category } = req.body;
  if (!name || !description || !price || !category || !images) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    let uploadedUrls = [];
    if (images && images.length > 0) {
      for (let base64 of images) {
        const result = await cloudinary.uploader.upload(base64);
        uploadedUrls.push(result.secure_url);
      }
    } else {
      return res.status(400).json({ message: "At least 1 image is required" });
    }

    const product = new Product({
      name,
      description,
      price,
      category,
      images: uploadedUrls,
    });
    await product.save();
    res
      .status(201)
      .json({ message: "Product created successfully", product: product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error in creating product", error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    await Product.findByIdAndDelete(productId);
    res.status(200).json({ message: "product successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: "error in deleting product", error });
  }
};
export const toggleFeaturedProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    product.isFeatured = !product.isFeatured;
    await product.save();
    res
      .status(200)
      .json({ product: product, message: "Featured status updated", product });
  } catch (error) {
    res.status(500).json({ message: "Failed to toggle featured", error });
  }
};
