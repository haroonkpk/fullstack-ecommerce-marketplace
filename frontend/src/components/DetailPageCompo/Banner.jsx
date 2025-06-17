import React from "react";

export default function Banner() {
  return (
    <div className="hidden md:block w-full max-w-[1180px] h-auto mb-25">
      <div className="overflow-hidden relative">
        <div className="w-full h-[120px] bg-[#005ADE] "></div>
        <div
          style={{ transform: "skewX(25deg)" }}
          className="w-[745px] h-[120px] bg-[#237CFF] -ml-10 absolute top-0 z-10 "
        ></div>
        <div className="w-full h-full absolute top-0 z-20 flex justify-between px-10 items-center">
          <div>
            <h1 className="text-[24px] text-white font-semibold">Super discount on more than 100 USD</h1>
            <p className="text-white">Have you ever finally just write dummy info</p>
          </div>
          <div>
            <button className="btn text-white border-none bg-[#FF9017] ">Shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
