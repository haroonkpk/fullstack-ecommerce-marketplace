import React from "react";
import CountdownTimer from "./Timer";
import { Link } from "react-router-dom";

export default function SaleSection() {
  const saleItem = [
    {
      id: 1,
      name: "Smart watches",
      url: "/Image/tech/8.jpg",
      discount: "-25%",
    },
    { id: 2, name: "Laptops", url: "/Image/tech/7.jpg", discount: "-15%" },
    {
      id: 3,
      name: "GoPro cameras",
      url: "/Image/tech/6.jpg",
      discount: "-40%",
    },
    { id: 4, name: "Headphones", url: "/Image/tech/5.jpg", discount: "-25%" },
    {
      id: 5,
      name: "Canon camreras",
      url: "/Image/tech/4.jpg",
      discount: "-25%",
    },
  ];

  const targetDate = "2025-06-27T23:59:59";

  return (
    <div className="w-full max-w-[1180px] h-auto md:overflow-auto max-h-[400px] flex flex-col md:flex-row justify-between md:justify-normal p-0 gap-0  container border border-gray-300 rounded mt-7 bg-base-100">
      <div className="w-full md:max-w-[285px] py-5 sm:p-5 space-y-5 flex md:flex-col justify-around sm:justify-between md:justify-normal">
        <div className="leading-[12px]">
          <h1 className="font-semibold text-[20px] leading-[28px] tracking-[-0.2px]">
            Deals and offers
          </h1>
          <p className="text-gray-400">Hygiene equipments</p>
        </div>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <div className="w-full max-w-[895px] h-auto flex items-center overflow-auto">
        {saleItem.map((itm, i) => (
          <div
            key={i}
            className="flex flex-col items-center w-[179px] cursor-pointer border-l border-t border-gray-300 h-[235px] gap-2"
          >
            <div className="w-[140px] h-[140px] ">
              <img className="object-fill" src={itm.url} alt="" />
            </div>
            <div>
              <p className="text-[15px]">{itm.name}</p>
            </div>
            <div
              style={{ backgroundColor: "rgba(255, 227, 227, 1)" }}
              className="w-[61px] h-[28px] rounded-2xl flex items-center justify-center text-red-600"
            >
              {itm.discount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
