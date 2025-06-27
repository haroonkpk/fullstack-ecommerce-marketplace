import React from "react";
import { useProductStore } from "../../stores/product.store";
import { Link } from "react-router-dom";

export default function SectionRecommend() {
  const { products } = useProductStore();

  const RecommendedItems = products.slice(4, 14);
  const getShortDesc = (desc) => desc?.split(" ").slice(0, 4).join(" ");



  return (
    <div className="w-full max-w-[1180px] h-auto mt-7 overflow-hidden">
      <div className="w-full h-fit font-bold p-2">Recommended items</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4">
        {RecommendedItems.map((itm, i) => (
          <Link
            to={`/product/${itm._id}`}
            key={i}
            className="w-[190px]   sm:w-[220px] sm:h-auto cursor-pointer bg-base-100 rounded border border-gray-300 space-y-4 p-2"
          >
            <div className="w-[180px] h-[190px] sm:w-[200px] sm:h-[200px]">
              <img src={itm.images?.[0]} alt={itm.name} />
            </div>
            <div className="w-[186px]">
              <h1 className="font-bold">${itm.price}</h1>
              <p>{getShortDesc(itm.description)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
