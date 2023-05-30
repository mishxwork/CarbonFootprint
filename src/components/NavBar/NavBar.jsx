import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router";
import "./NavBar.css";
// import logo from "../../assets/Brillio_logoRGB.png";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center pt-8 pb-8 pl-24 pr-24">
      <div className="flex-1 flex justify-start items-center">
        <div className="navbar-links_container">
          {/* <p>
            <img className="-mt-1" src={logo} width="80" />
          </p> */}
          {/* <p>
            <a href="#home" className="text-indigo-900">
              Home
            </a>
          </p> */}
          {/* <p>
            <a href="#usecase" className="text-indigo-900">
              Use Case
            </a>
          </p> */}
        </div>
      </div>
      <div className="navbar-sign text-indigo-900">
        <button type="button" onClick={() => navigate("/dashboard")}>
          Emissions Insight!
        </button>
      </div>
      <div className="navbar-menu text-indigo-900">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              {/* <p>
                <a className="text-indigo-900" href="#home">
                  Home
                </a>
              </p>
              <p>
                <a className="text-indigo-900" href="#usecase">
                  Use Case
                </a>
              </p> */}
            </div>
            <div className="navbar-menu_container-links-sign">
              <p className="text-indigo-900">Sign in</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
