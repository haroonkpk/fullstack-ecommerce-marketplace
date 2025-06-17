import React from 'react'

export default function BlockDetail() {
  return (
    <div className="w-full max-w-[880px] h-auto container border border-gray-300 rounded bg-base-100 gap-5">
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab border-blue-600 text-blue-600"
          aria-label="Description"
          defaultChecked
        />
        <div className="tab-content border-t-base-300 bg-base-100 p-10">
          <div className='flex flex-col gap-5'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div>
              <table className="table-auto border border-gray-300 w-full max-w-[567px] text-left text-sm">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                      Model
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      #8786867
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                      Style
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Classic style
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                      Certificate
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      ISO-898921212
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                      Size
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      34mm x 450mm x 19mm
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-100">
                      Memory
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      36GB RAM
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-[325px] space-y-4 ">
              <div className="flex items-center gap-2">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.32917 13.2292L3.85417 9.75417L2.67084 10.9292L7.32917 15.5875L17.3292 5.58751L16.1542 4.41251L7.32917 13.2292Z"
                      fill="#8B96A5"
                    />
                  </svg>
                </span>
                {/* text */}
                <span>Some great feature name here</span>
              </div>
              <div className="flex items-center gap-2">
                {" "}
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.32917 13.2292L3.85417 9.75417L2.67084 10.9292L7.32917 15.5875L17.3292 5.58751L16.1542 4.41251L7.32917 13.2292Z"
                      fill="#8B96A5"
                    />
                  </svg>
                </span>
                {/* text */}
                <span>Some great feature name here</span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.32917 13.2292L3.85417 9.75417L2.67084 10.9292L7.32917 15.5875L17.3292 5.58751L16.1542 4.41251L7.32917 13.2292Z"
                      fill="#8B96A5"
                    />
                  </svg>
                </span>
                {/* text */}
                <span>Some great feature name here</span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.32917 13.2292L3.85417 9.75417L2.67084 10.9292L7.32917 15.5875L17.3292 5.58751L16.1542 4.41251L7.32917 13.2292Z"
                      fill="#8B96A5"
                    />
                  </svg>
                </span>
                {/* text */}
                <span>Some great feature name here</span>
              </div>
            </div>
          </div>
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          className="tab border-blue-600 text-blue-600"
          aria-label="Reviews"
        />
        <div className="tab-content border-t-base-300 bg-base-100 p-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in ronsequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          className="tab border-blue-600 text-blue-600"
          aria-label="Shipping"
        />
        <div className="tab-content border-t-base-300 bg-base-100 p-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in ronsequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          className="tab border-blue-600 text-blue-600"
          aria-label="About seller"
        />
        <div className="tab-content border-t-base-300 bg-base-100 p-10">
          uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in ronsequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo
        </div>
      </div>
    </div>
  );
}
