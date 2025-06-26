import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set, get) => ({
  loading: false,
  authUser: null,
  loader: true,

  Login: async (formData) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.post("/auth/login", formData);
      set({ authUser: res.data });
      toast.success("Successfully Login");
      set({ loading: false });
    } catch (error) {
      set({ loading: false });
      console.log("error in login", error.message);
    }
  },



  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/checkAuth");
      set({ authUser: res.data.user });
    } catch (error) {
      set({ authUser: null, loader: false });
      console.log("error in checkAuth :", error.message);
    } finally {
      set({ loader: false });
    }
  },




  LogOut: () => {
    axiosInstance.post("/auth/logout");
    set({ authUser: null });
    toast.success("Successfully Logouted!");
  },
}));
