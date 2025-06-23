import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useCartStore = create((set) => ({
  cartItems: [],
  isLoading: false,

  addToCart: async (productId) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.post("/cart", {productId});
      console.log(res.data);
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
      console.log("Cart items fetched:", res.data.cartItems);
      set({ isLoading: false });
    } catch (error) {
      console.log("Error fetching cart items:", error.message);
      set({ isLoading: false });
    }
  },
}));
