import ContentTop from "./ContentTop";
import GridView from "./GridView";
import ListView from "./ListView";
import useToggleStore from "../../stores/Toggle.store";
import { useParams } from "react-router-dom";
import { useProductStore } from "../../stores/product.store";
import { useEffect } from "react";
import { useSaveForLaterStore } from "../../stores/saveForLater.store";

export default function Content() {
  const { view } = useToggleStore();
  const { category, keyword } = useParams();
  const { getAllProducts, getProductsByCategory, products } = useProductStore();
  const { getSaveForLaterItems, addToSaveForLater } = useSaveForLaterStore();

  useEffect(() => {
    getAllProducts();
  }, [category]);

  useEffect(() => {
    getSaveForLaterItems();
  }, [addToSaveForLater]);

  let searchedProducts = [];

  //  Search logic
  if (keyword) {
    const searchLower = keyword.toLowerCase();
    searchedProducts = products.filter((p) =>
      p.name.toLowerCase().includes(searchLower)
    );
  } else {
    searchedProducts = getProductsByCategory(category);
  }
  return (
    <div className="w-full lg:max-w-[920px] h-auto overflow-hidden">
      <ContentTop searchedProducts={searchedProducts} />
      <div
        className={`w-full lg:max-w-[920px] p-3 md:p-0 h-auto ${
          view === "grid"
            ? "flex flex-col items-center sm:grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-3"
            : ""
        }`}
      >
        {view === "grid" ? (
          <GridView searchedProducts={searchedProducts} />
        ) : (
          <ListView searchedProducts={searchedProducts} />
        )}
      </div>
    </div>
  );
}
