import React from 'react'
import { Toggle } from './Toggle';

export default function ContentTop({ searchedProducts }) {
  return (
    <div className="hidden md:flex w-full max-w-[920px] h-auto max-h-[62px] mb-4  justify-between items-center p-5 container border border-gray-300 rounded bg-base-100">
      <div>
        <span>{searchedProducts?.length || 0} items in </span>
        <span className="font-bold">
          {searchedProducts?.[0]?.category} category
        </span>
      </div>
      <div data-theme="light">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            defaultChecked
            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span>Verified only</span>
        </label>
      </div>
      <div>
        <select
          defaultValue="Featured"
          className="select border-none focus:outline-none "
        >
          <option>Featured</option>
          <option>Crimson</option>
          <option>Amber</option>
          <option>Velvet</option>
        </select>
      </div>
      <div>
        <Toggle />
      </div>
    </div>
  );
}
