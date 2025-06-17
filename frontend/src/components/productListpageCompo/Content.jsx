import ContentTop from "./ContentTop";
import GridView from "./GridView";
import ListView from "./ListView";
import useToggleStore from "../../stores/Toggle.store";
import { useParams } from "react-router-dom";
import { useProductStore } from "../../stores/product.store";
import { useEffect } from "react";

export default function Content() {
  const { view } = useToggleStore();
  const { id } = useParams();
  const { getProductsByCategory, selectedCategory, products } =
    useProductStore();

  useEffect(() => {
    if (id !== "" && "All category") {
      getProductsByCategory(id);
    }
  }, [id]);
  return (
    <div className="w-full lg:max-w-[920px] h-auto overflow-hidden">
      <ContentTop products={selectedCategory} />
      <div
        className={`w-full lg:max-w-[920px] p-3 md:p-0 h-auto ${
          view === "grid"
            ? "flex flex-col items-center sm:grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-3"
            : ""
        }`}
      >
        {view === "grid" ? (
          <GridView products={selectedCategory} />
        ) : (
          <ListView products={selectedCategory} />
        )}
      </div>
    </div>
  );
}
