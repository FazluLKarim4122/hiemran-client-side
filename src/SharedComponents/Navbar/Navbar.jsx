import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="font-medium text-sm text-black m-1">
          Menu
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a className="font-medium text-sm text-black">Myself</a>
          </li>
          <li>
            <a className="font-medium text-sm text-black">Contributions</a>
          </li>
          <li>
            <a className="font-medium text-sm text-black">Notebook</a>
          </li>
          <li>
            <a className="font-medium text-sm text-black">Find Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
