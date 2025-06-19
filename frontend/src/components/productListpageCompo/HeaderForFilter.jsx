import React from 'react'
import { Toggle } from './Toggle';

export default function HeaderForFilter() {
  return (
    <div className="md:hidden w-full  p-3 h-auto flex justify-between items-center bg-white shadow-sm">
      <div className="p-1 border flex gap-2 items-center border-gray-200 rounded-[6px] ">
        <span>Sort: </span>
        <span>Newest</span>
        <span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 13.5H6.75V12H2.25V13.5ZM2.25 4.5V6H15.75V4.5H2.25ZM2.25 9.75H11.25V8.25H2.25V9.75Z"
              fill="#8B96A5"
            />
          </svg>
        </span>
      </div>
      <div className="p-1 border flex gap-2 items-center border-gray-200 rounded-[6px] ">
        <span>Filter (3)</span>
        <span>
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25367 4.5H12.7537L8.99617 9.225L5.25367 4.5ZM3.19117 4.2075C4.70617 6.15 7.50367 9.75 7.50367 9.75V14.25C7.50367 14.6625 7.84117 15 8.25367 15H9.75367C10.1662 15 10.5037 14.6625 10.5037 14.25V9.75C10.5037 9.75 13.2937 6.15 14.8087 4.2075C15.1912 3.7125 14.8387 3 14.2162 3H3.78367C3.16117 3 2.80867 3.7125 3.19117 4.2075Z"
              fill="#8B96A5"
            />
          </svg>
        </span>
      </div>
      <div>
        <Toggle />
      </div>
    </div>
  );
}
