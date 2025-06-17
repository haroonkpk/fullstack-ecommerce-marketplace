import { create } from "zustand";

const useToggleStore = create((set) => ({
  view: "list",
  setView: (newView) => set({ view: newView }),
}));

export default useToggleStore;
