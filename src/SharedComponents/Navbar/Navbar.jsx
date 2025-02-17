import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navigationLink = <>
    <li><NavLink to='/myself' >Myself</NavLink></li>
    <li ><NavLink>Contributions</NavLink></li>
    <li><NavLink>Notebook</NavLink></li>
    <li><NavLink>Find Me</NavLink></li>
    </>

  return (
    <div>
      <div className="dropdown dropdown-hover">
        <div  role="" className="font-medium text-sm text-black m-1 text-right">
          <NavLink to='/'>Menu</NavLink> 
        </div>
        <ul
          
          className="  dropdown-top
          text-right "
        //   className="dropdown-content  "
        >   
            {navigationLink}

          {/* <li>
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
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
