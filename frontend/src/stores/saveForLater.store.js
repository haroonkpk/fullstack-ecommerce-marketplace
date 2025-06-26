import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useSaveForLaterStore = create((set, get) => ({
  saveForLaterItems: [],
  loading: false,

  //Get all saved items
  getSaveForLaterItems: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get("/saveForLater");
      set({ saveForLaterItems: res.data.saveForLaterItems, loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error("Failed to fetch saved items");
    }
  },

  //Add to save for later
  addToSaveForLater: async (productId) => {
    try {
      const res = await axiosInstance.post("/saveForLater", {
        productId,
      });
      set((state) => ({
        saveForLaterItems: [
          ...state.saveForLaterItems,
          { product: { _id: productId }, addedAt: new Date() },
        ],
      }));
      toast.success("Item saved for later");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to save item");
    }
  },

  //Remove from save for later
  removeFromSaveForLater: async (productId) => {
    try {
      await axiosInstance.delete("/saveForLater", {
        data: { productId },
      });
      set((state) => ({
        saveForLaterItems: state.saveForLaterItems.filter(
          (item) => item.product._id !== productId
        ),
      }));
      toast.success("Item removed");
    } catch (error) {
      toast.error("Failed to remove item");
    }
  },
}));
