import mongoose from "mongoose";
import Product from "../models/product.models.js";


export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ products });
  } catch (error) {
    console.log("Error in getall product route")
    res.status(500).json({message:"Server error", error: error.message});
  }
};
export const  getFeaturedFroducts = async (req,res)=>{
  try{
    const featuredFroducts = await Product.find({isFeatured:true}).lean();
    res.json(featuredFroducts);
  }catch(error){
    console.log("error in getFeaturedFroducts route");
    res.status(500).json({message:"Server error", error:error.message})
    
  }
}

export const createProduct = async (req, res) => {
  const { name, description, price, image, category } = req.body;
  try {

  // if ((name || description || price ||  category)) {
  //   return res.status(400).json({ message: "All fields are required" });
  // }

    const product = new Product({
      name,
      description,
      price,
      image,
      category,
    });
    await product.save();
    res
      .status(201)
      .json({ message: "Product created successfully", product: product });
  } catch (error) {
    res.status(500).json({ message: "error in creating product", error:error.message });
  }
};

export const getStory = async (req, res) => {
  const { typeId } = req.params;
  if (!typeId) {
    return res.status(404).json({ message: "Not found typeId" });
  }
  try {
    const selectedTypeStory = await Story.find({
      type: new mongoose.Types.ObjectId(typeId),
    });
    if (!selectedTypeStory) {
      return res.status(404).json({ message: "stories not found" });
    }
    res.status(201).json({ selectedTypeStory });
  } catch (error) {
    console.error("GetStory Error:", error.message);
    res.status(501).json({ message: "error in getStory route", error });
  }
};

export const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    console.log(productId)
  try {
    await Product.findByIdAndDelete(productId);
    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "error in deleting product", error });
  }
};
