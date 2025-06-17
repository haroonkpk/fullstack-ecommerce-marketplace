import React from 'react'

export default function DrawerMobile() {
  return (
      <div className="drawer z-90">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
  );
}
