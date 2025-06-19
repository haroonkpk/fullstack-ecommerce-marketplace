import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [value, setValue] = useState(25);

  return (
    <div className="hidden md:block w-full md:max-w-[200px] lg:max-w-[240px] h-auto">
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title flex items-center justify-between border-t border-gray-300 ">
          <h1>Category</h1>
          <ChevronDown />
        </div>
        <ul className="collapse-content">
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            Mobile accessory
          </li>
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            Electronics
          </li>
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            Smartphones{" "}
          </li>
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            Modern tech
          </li>
          <li href="#" className="text-[#0D6EFD]">
            See all
          </li>
        </ul>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title flex items-center justify-between border-t border-gray-300 ">
          <h1>Brands</h1>
          <ChevronDown />
        </div>
        <ul className="collapse-content">
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            <label className="label">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Samsung
            </label>
          </li>
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            <label className="label">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Apple
            </label>
          </li>
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            <label className="label">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Huawei
            </label>
          </li>
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            <label className="label">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Pocco
            </label>
          </li>
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            <label className="label">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Lenovo
            </label>
          </li>
          <li href="#" className="text-[#0D6EFD]">
            See all
          </li>
        </ul>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title flex items-center justify-between border-t border-gray-300 ">
          <h1>Features</h1>
          <ChevronDown />
        </div>
        <ul className="collapse-content">
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            <label className="label">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Metallic
            </label>
          </li>
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            <label className="label">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Plastic cover
            </label>
          </li>
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            <label className="label">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              8GB Ram
            </label>
          </li>
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            <label className="label">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Super power
            </label>
          </li>
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            <label className="label">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Large Memory
            </label>
          </li>
          <li href="#" className="text-[#0D6EFD]">
            See all
          </li>
        </ul>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title flex items-center justify-between border-t border-gray-300 ">
          <h1>Price range</h1>
          <ChevronDown />
        </div>
        <ul className="collapse-content">
          <li href="#" className=" p-1 rounded">
            <div className="w-full max-w-xs">
              <input
                type="range"
                min={0}
                max={5000}
                step={25}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="range text-blue-600"
              />
              <div className="flex justify-between px-2.5 mt-2 text-xs">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
              </div>
              <div className="flex justify-between px-2.5 mt-2 text-xs">
                <span>1K</span>
                <span>2K</span>
                <span>3K</span>
                <span>4K</span>
                <span>5K</span>
              </div>
              <div className="flex flex-col gap-3 mt-3">
                <div className="w-full flex justify-center items-center gap-2">
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Min</legend>
                    <div className="w-full border h-[40px] flex justify-center items-center px-5 rounded border-gray-300 bg-white">
                      0
                    </div>
                  </fieldset>
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Max</legend>
                    <input
                      type="number"
                      className="input"
                      placeholder={value}
                      onChange={(e) => setValue(Number(e.target.value))}
                    />
                  </fieldset>
                </div>
                <button className="btn w-full bg-white border border-gray-300 rounded active:bg-blue-600 active:text-white">
                  Apply
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title flex items-center justify-between border-t border-gray-300 ">
          <h1>Condition</h1>
          <ChevronDown />
        </div>
        <ul className="collapse-content">
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            <label className="label">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4
    appearance-none
    rounded-full
    bg-white
    border border-gray-300
    checked:bg-blue-600
    checked:ring-1 checked:ring-blue-400
    checked:ring-offset-1 checked:ring-offset-white
    transition duration-200"
              />
              Any
            </label>
          </li>
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            <label className="label">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4
    appearance-none
    rounded-full
    bg-white
    border border-gray-300
    checked:bg-blue-600
    checked:ring-1 checked:ring-blue-400
    checked:ring-offset-1 checked:ring-offset-white
    transition duration-200"
              />
              Refurbished
            </label>
          </li>
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            <label className="label">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4
    appearance-none
    rounded-full
    bg-white
    border border-gray-300
    checked:bg-blue-600
    checked:ring-1 checked:ring-blue-400
    checked:ring-offset-1 checked:ring-offset-white
    transition duration-200"
              />
              Brand new
            </label>
          </li>
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            <label className="label">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4
    appearance-none
    rounded-full
    bg-white
    border border-gray-300
    checked:bg-blue-600
    checked:ring-1 checked:ring-blue-400
    checked:ring-offset-1 checked:ring-offset-white
    transition duration-200"
              />
              Old items
            </label>
          </li>
        </ul>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title flex items-center justify-between border-t border-gray-300 ">
          <h1>Ratings</h1>
          <ChevronDown />
        </div>
        <ul className="collapse-content">
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            <label className="label">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <svg
                width="93"
                height="18"
                viewBox="0 0 93 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M83.6999 14.4663L89.4473 18L87.9221 11.34L92.9999 6.85895L86.3132 6.28105L83.6999 0L81.0866 6.28105L74.3999 6.85895L79.4777 11.34L77.9525 18L83.6999 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.9001 14.4663L33.6475 18L32.1223 11.34L37.2001 6.85895L30.5134 6.28105L27.9001 0L25.2868 6.28105L18.6001 6.85895L23.6779 11.34L22.1527 18L27.9001 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z"
                  fill="#FF9017"
                />
              </svg>
            </label>
          </li>
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            <label className="label">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <svg
                width="93"
                height="18"
                viewBox="0 0 93 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M83.6999 14.4663L89.4473 18L87.9221 11.34L92.9999 6.85895L86.3132 6.28105L83.6999 0L81.0866 6.28105L74.3999 6.85895L79.4777 11.34L77.9525 18L83.6999 14.4663Z"
                  fill="#BDC4CD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.9001 14.4663L33.6475 18L32.1223 11.34L37.2001 6.85895L30.5134 6.28105L27.9001 0L25.2868 6.28105L18.6001 6.85895L23.6779 11.34L22.1527 18L27.9001 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z"
                  fill="#FF9017"
                />
              </svg>
            </label>
          </li>
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            <label className="label">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <svg
                width="93"
                height="18"
                viewBox="0 0 93 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M83.6999 14.4663L89.4473 18L87.9221 11.34L92.9999 6.85895L86.3132 6.28105L83.6999 0L81.0866 6.28105L74.3999 6.85895L79.4777 11.34L77.9525 18L83.6999 14.4663Z"
                  fill="#BDC4CD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z"
                  fill="#BDC4CD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.9001 14.4663L33.6475 18L32.1223 11.34L37.2001 6.85895L30.5134 6.28105L27.9001 0L25.2868 6.28105L18.6001 6.85895L23.6779 11.34L22.1527 18L27.9001 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z"
                  fill="#FF9017"
                />
              </svg>
            </label>
          </li>
          <li
            href="#"
            className=" p-1 cursor-pointer rounded hover:bg-blue-200 hover:text-black"
          >
            <label className="label">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <svg
                width="93"
                height="18"
                viewBox="0 0 93 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M83.6999 14.4663L89.4473 18L87.9221 11.34L92.9999 6.85895L86.3132 6.28105L83.6999 0L81.0866 6.28105L74.3999 6.85895L79.4777 11.34L77.9525 18L83.6999 14.4663Z"
                  fill="#BDC4CD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z"
                  fill="#BDC4CD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z"
                  fill="#BDC4CD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.9001 14.4663L33.6475 18L32.1223 11.34L37.2001 6.85895L30.5134 6.28105L27.9001 0L25.2868 6.28105L18.6001 6.85895L23.6779 11.34L22.1527 18L27.9001 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z"
                  fill="#FF9017"
                />
              </svg>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}
