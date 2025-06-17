import React from 'react'

export default function Newsletter() {
  return (
    <div className="w-full h-[190px] gap-y-4 bg-[#EFF2F4] flex flex-col justify-center items-center">
        <div className='flex flex-col justify-center items-center'>
      <h1 className="text-[20px] font-semibold ">
        Subscribe on our newsletter
      </h1>
      <p className='text-[10px] sm:text-[16px]'>
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
        </div>
      <div className="flex gap-3">
        <label className="input max-w-[274px] ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input type="email" placeholder="haroon@gmail.com" required />
        </label>
        <button className="btn bg-blue-600 border-none text-white outline-none">Subscribe</button>
      </div>
    </div>
  );
}
