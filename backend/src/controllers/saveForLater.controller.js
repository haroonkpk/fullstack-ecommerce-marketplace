import User from "../models/user.model.js";

export const addToSaveForLater = async (req, res) => {
  const { productId } = req.body;

  if (!productId) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  const user = await User.findById(req.user._id);
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const alreadySaved = user.saveForLaterItems.find(
    (item) => item.product && item.product.toString() === productId
  );

  if (alreadySaved) {
    return res.status(409).json({ message: "Item already saved for later" });
  }

  user.saveForLaterItems.push({ product: productId });

  await user.save();

  res.status(200).json({ message: "Item saved for later", productId });
};

export const getSaveForLaterItems = async (req, res) => {
  const user = await User.findById(req.user._id).populate(
    "saveForLaterItems.product"
  );

  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.status(200).json({ saveForLaterItems: user.saveForLaterItems });
};

export const removeFromSaveForLater = async (req, res) => {
  const { productId } = req.body;

  if (!productId) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  const user = await User.findById(req.user._id);
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  user.saveForLaterItems = user.saveForLaterItems.filter(
    (item) => item.product && item.product.toString() !== productId
  );

  await user.save();

  res
    .status(200)
    .json({ message: "Item removed from saved for later", productId });
};
