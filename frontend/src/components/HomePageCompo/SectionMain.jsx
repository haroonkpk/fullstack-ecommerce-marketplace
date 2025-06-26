import React, { useEffect } from "react";
import { useAuthStore } from "../../stores/auth.store";
import UserAction from "./UserAction";

export default function SectionMain() {
  const { checkAuth, authUser, LogOut } = useAuthStore();
  const items = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ];

  return (
    <div className="w-full max-w-[1180px] h-auto md:mt-2 max-h-[400px] flex items-center p-0 gap-0 md:gap-4 md:p-5 container border border-gray-300 rounded bg-base-100">
      {/* section 1 */}
      <div className="hidden lg:block overflow-y-auto w-[250px] h-[360px] p-0">
        <ul className="menu menu-md w-full p-0">
          {items.map((item, idx) => (
            <li key={idx}>
              <a className="text-[17px] text-gray-600 hover:!bg-blue-100 hover:!text-black active:!bg-blue-600 active:!text-white leading-7">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* section 2 */}
      <div className="w-full  md:max-w-[755px]  lg:max-w-[665px] h-auto md:h-[360px] flex relative">
        <img
          className="w-full h-auto sm:min-w-full lg:max-w-[665px]  md:h-full object-cover"
          src="/Image/15bee8c1b9d77e50133ea130b3270887efd96310.png"
          alt=""
        />
        <div className="flex flex-col absolute gap-3 top-6 left-6 md:top-12 md:left-12">
          <div className="leading-tight">
            <h1 className="text-base sm:text-lg md:text-[28px] font-normal text-black">
              Latest trending
            </h1>
            <h1 className="text-lg sm:text-xl md:text-[32px] font-bold text-black">
              Electronic items
            </h1>
          </div>
          <button className="btn w-fit text-xs sm:text-sm md:text-base leading-tight text-black">
            Learn more
          </button>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="hidden md:flex w-[215px] h-[360px]  flex-col space-y-2">
        <UserAction/>
        <div className="w-full h-[95px] relative bg-[#F38332] text-white rounded p-3">
          <p className="w-[144px]">Get US $10 off with a new supplier</p>
        </div>
        <div
          style={{ backgroundColor: "rgba(85, 189, 195, 1)" }}
          className="w-full h-[106px] relative text-white rounded p-3"
        >
          <p className="w-[140px]">Send quotes with supplier preferences</p>
        </div>
      </div>
    </div>
  );
}
