import React, { useEffect, useState } from 'react';
import { useProductStore } from '../../stores/product.store';
import { useNavigate } from 'react-router-dom';

export default function NavForMobile() {
  const navigate = useNavigate();
  const items = ["AllCategory", "tech", "cloth", "phones", "Ipads", "Ipod", "Smart watches"];
  const [category, setCategory] = useState("");
  function handleChange(e) {
    setCategory(e.target.value);
  }

  useEffect(() => {
    if(category) {
      navigate(`/category/${category}`);
    }
  }, [category]);

  return (
    <div className="md:hidden w-full bg-white flex flex-col gap-3 p-3 shadow-sm mb-0.5">
      <label className="input w-full">
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
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" required placeholder="Search" />
      </label>

      <div>
        <form className="filter flex overflow-x-auto scrollbar-hide flex-nowrap gap-2">
          <input className="" type="reset" value="×" />
          {items.map((itm, i) => (
            <input
              key={i}
              onClick={handleChange}
              className="btn bg-[#EFF2F4] text-blue-600"
              type="radio"
              name="frameworks"
              value={itm}
              aria-label={itm}
              checked={category === itm}
            />
          ))}
        </form>
      </div>
    </div>
  );
}
