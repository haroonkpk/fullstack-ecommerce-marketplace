import React from "react";

export default function SectionInquiry() {
  return (
    <div className="w-full max-w-[1180px] h-[150px] lg:h-[446px] mt-4 flex flex-col md:flex-row relative justify-between md:justify-normal p-0 gap-0  container border border-gray-300 rounded  bg-base-100 overflow-hidden">
      <img
        className="object-cover w-full scale-x-[-1]"
        src="/Image/inc.png"
        alt=""
      />
      <div
        style={{
          background:
            "linear-gradient(94.99deg, #2C7CF1 7.19%, rgba(0, 209, 255, 0.5) 89.49%)",
        }}
        className="w-full h-full absolute z-10"
      ></div>
      <div className="w-full h-full bg-transparent absolute z-20 flex justify-between p-7 md:p-12">
        <div className="w-[217px] lg:w-[440px] space-y-3 text-white">
          <div className="text-[17px] font-semibold lg:text-[32px] lg:leading-9">
            An easy way to send requests to all suppliers
          </div>
          <p className="hidden lg:block w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <button className="text-xs p-2 rounded active:bg-blue-950 active:scale-y-90 cursor-pointer  bg-blue-700 lg:hidden">
            Send inquiry
          </button>
        </div>
        <div className="hidden lg:block w-[491px] h-[346px] bg-white rounded p-5 space-y-5">
          <h1 className="text-[20px] font-bold">Send quote to suppliers</h1>
          <input
            type="text"
            placeholder="What item you need?"
            className="input input-md w-full outline-none"
          />
          <textarea
            className="textarea w-full outline-none"
            placeholder="Type more details"
          ></textarea>
          <div className="flex space-x-1 ">
            <input
              type="text"
              placeholder="Quantity"
              className="input w-[206px] outline-none"
            />
            <select defaultValue="Pick a color" className="select w-[106px]">
              <option >Pcs</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </div>
          <button className="btn bg-blue-600 outline-none text-white">
            Send inquiry
          </button>
        </div>
      </div>
    </div>
  );
}
