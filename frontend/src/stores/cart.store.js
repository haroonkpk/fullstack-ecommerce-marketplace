import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useCartStore = create((set) => ({
  cartItems: [],
  isLoading: false,

  addToCart: async (productId) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.post("/cart", { productId });
      toast.success("Item added to cart successfully");
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      console.log("Error adding to cart:", error.message);
    }
  },

  getCartItems: async () => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.get("/cart");
      set({ cartItems: res.data.cartItems });
      set({ isLoading: false });
    } catch (error) {
      console.log("Error fetching cart items:", error.message);
      set({ isLoading: false });
    }
  },

  deleteCartItem: async (productId) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.delete("/cart", { data: { productId } });
      set({ isLoading: false });
      toast.success("Item removed from cart successfully");
    } catch (error) {
      console.log("Error deleting cart item:", error.message);
      set({ isLoading: false });
    }
  },

  updateCArtItem: async (productId, newQty) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.put("/cart", { productId, quantity: newQty });
      toast.success("Quantity changed");
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      toast.error(error.message);
    }
  },
}));
