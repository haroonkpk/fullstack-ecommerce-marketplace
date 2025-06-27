import React, { useEffect } from "react";
import { useProductStore } from "../../stores/product.store";
import { Link } from "react-router-dom";

export default function BlockItemsGroup2({ techProducts }) {
  const getShortTitle = (name) => name?.split(" ")[0];


  return (
    <div className="w-full max-w-[1180px] h-auto md:max-h-[257px] p-0 gap-0 border border-gray-300 rounded mt-4 bg-base-100 flex flex-col md:flex-row">
      <div className="relative max-w-[280px] md:min-h-[254px] overflow-hidden flex">
        <img
          className="hidden md:block w-full h-auto object-[right_bottom]"
          src="/Image/Esection.png"
          alt=""
        />
        <div
          style={{ background: "rgba(255, 255, 255, 0.3)" }}
          className="hidden md:block w-full h-full absolute z-10 p-5 space-y-2.5"
        ></div>
        <div className="w-full md:absolute z-10 md:p-5 space-y-5 mt-3 md:mt-0">
          <h1 className="w-full md:w-[154px] md:text-[20px] font-medium text-black leading-tight">
            Consumer electronics and gadgets
          </h1>
          <button className="hidden md:block btn bg-white">Source now</button>
        </div>
      </div>

      <div className="w-full max-w-[895px] flex md:grid md:grid-cols-[repeat(4,223px)] md:grid-rows-2 overflow-x-auto">
        {techProducts.map((itm, i) => (
          <Link
            to={`/product/${itm._id}`}
            key={itm._id}
            className="h-[127px] p-4 leading-10 relative cursor-pointer border-l border-t border-gray-300"
          >
            <h1 className="text-black text-sm">
              {<p>{getShortTitle(itm?.name)}</p>}
            </h1>
            <div className="leading-tight">
              <p className="w-[97px] text-[13px]">From</p>
              <p className="w-[97px] text-[13px]">${itm.price}</p>
            </div>
            <div className="w-[82px] h-[82px]  absolute bottom-0 right-0">
              <img src={itm.images?.[0]} alt={itm.name} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
