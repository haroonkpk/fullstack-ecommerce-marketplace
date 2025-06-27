import React from 'react'
import { Link } from 'react-router-dom';
import { useProductStore } from '../../stores/product.store';

export default function Section3() {
    const { products } = useProductStore();
    const RecommendedItems = products.slice(0,6);
    const getShortName = (name) => name?.split(" ").slice(0, 2).join(" ");
  return (
    <div className="w-full max-w-[1180px] mt-5 md:mt-0 h-auto container border border-gray-300 rounded bg-base-100 p-5 flex flex-col gap-4">
      <div>
        <h1 className="font-semibold">Related products</h1>
      </div>
      <div className="flex  gap-5 items-center overflow-auto">
        {RecommendedItems.map((itm, i) => (
          <Link
            key={i}
            to={`/product/${itm._id}`}
            className="flex flex-col  justify-center gap-2"
          >
            <div className="w-[172px] h-[172px] bg-gray-300 rounded flex justify-center items-center">
              <img
                className="w-[150px] h-[150px]"
                src={itm.images?.[0]}
                alt="recommendedItem"
              />
            </div>
            <div>
              <h1 className="leading-tight w-[142px]">
                {getShortName(itm.name)}
              </h1>
              <p className="text-gray-400">{itm.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
