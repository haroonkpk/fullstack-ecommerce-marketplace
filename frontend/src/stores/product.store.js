import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useProductStore = create((set, get) => ({
  selectedProduct: [],
  selectedCategory: [],
  loading: false,
  featuredProducts: [],
  products: [],

  getProductById: (id) => {
    try {
      const { products } = get();
      const foundProduct = products.find((product) => product._id === id);
      return foundProduct;
    } catch (error) {
      console.log("error in getProductById:", error);
    }
  },

  getProductsByCategory: (categoryName) => {
    if (!categoryName || categoryName === "AllCategory") {
      return get().products;
    }
    return get().products.filter(
      (product) => product.category === categoryName
    );
  },

  getAllProducts: async () => {
    // set({ loading: true });
    try {
      const res = await axiosInstance.get("/product/");
      set({ products: res.data.products });
      set({ loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },

  createProduct: async (formData) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.post("/product/", formData);
      set({ loading: false });
      toast.success("product successfully created");
    } catch (error) {
      set({ loading: false });
      toast.error("Failed to create product", error.message);
    }
  },

  toggleFeaturedProduct: async (productId) => {
    const res = await axiosInstance.patch(`/product/${productId}`);
    set((state) => ({
      products: state.products.map((p) =>
        p._id === productId ? res.data.product : p
      ),
    }));
  },

  deleteProduct: async (productId) => {
    await axiosInstance.delete(`/product/${productId}`);
    set((state) => ({
      products: state.products.filter((p) => p._id !== productId),
    }));
    toast.success("product deleted");
  },
  getfeaturedProducts: async () => {
    try {
      const res = await axiosInstance.get("/product/featuredProducts");
      set({ featuredProducts: res.data });
    } catch (error) {
      toast.error("error.message");
    }
  },
  getFeaturedByCategory: (category) => {
    return get().featuredProducts.filter((p) => p.category === category);
  },
}));
