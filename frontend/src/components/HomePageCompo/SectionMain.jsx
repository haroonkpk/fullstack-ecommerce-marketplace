import React from "react";

export default function SectionMain() {
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
    <div className="w-full max-w-[1180px] h-auto max-h-[400px] flex items-center p-0 gap-0 md:gap-4 md:p-5 container border border-gray-300 rounded bg-base-100">
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
        <div className="w-full h-[150px] relative bg-blue-100 rounded p-3 gap-2 flex flex-wrap ">
          <div className="flex gap-2">
            <div className="max-w-11 max-h-11 rounded-full overflow-hidden">
              <img src="/avatar=pic1.jpg" alt="" />
            </div>
            <div className="flex flex-col justify-center gap-y-0 leading-4 ">
              <span className="">Hi user</span>
              <span className="">let's get started</span>
            </div>
          </div>

          <button className="btn btn-sm w-full py-4 border border-gray-300 bg-blue-600 text-white rounded text-sm">
            Join now
          </button>
          <button className="btn btn-sm w-full border border-gray-300 py-4  text-blue-600 bg-white rounded text-sm">
            Join now
          </button>
        </div>
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
