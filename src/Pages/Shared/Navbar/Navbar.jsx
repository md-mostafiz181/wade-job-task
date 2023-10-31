import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import "./Navbar.css"

const Navbar = () => {
  const navOptions = (
    <>
      <li className="text-1xl font-bold primaryTextColor primaryFonts ">
        <Link to="/">Home</Link>
      </li>

      <li className="text-1xl font-bold primaryTextColor primaryFonts">
        <Link to="/About">About</Link>
      </li>
      <li className="text-1xl font-bold primaryTextColor primaryFonts">
        <Link to="/Blog">Blog</Link>
      </li>
      <li className="text-1xl font-bold primaryTextColor primaryFonts">
        <Link to= "/Service">Service</Link>
      </li>
      <li className="text-1xl font-bold primaryTextColor primaryFonts">
        <Link to= "/Testimonial">Testimonial</Link>
      </li>
      <li className="text-1xl font-bold primaryTextColor primaryFonts">
        <Link to="/Contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div id="navbar-part" >
      <Container>
        <div className="">
          <div className="navbar ">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {navOptions}
                </ul>
              </div>
              <a className="text-2xl primaryFonts font-bold text-white">
                Wa<span className="text-orange-500">de</span>
              </a>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navOptions}</ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
