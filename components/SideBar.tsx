import React from "react";

function SideBar() {
  return (
    <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <label htmlFor="my-drawer-3">click</label>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
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

export default SideBar;
