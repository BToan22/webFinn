import React from "react";
import adventureLogo from "../assets/images/adventure_time_logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="relative bg-black py-4 text-white">
      {/* Thanh màu tím trên cùng */}
      <div className="absolute left-0 top-0 h-1 w-full bg-purple-500"></div>

      {/* Container chính */}
      <div className="container relative mx-auto flex flex-col items-center justify-between px-6 md:flex-row md:px-9">
        {/* Logo */}
        <img
          src={adventureLogo}
          alt="Adventure Time Logo"
          className="h-12 md:h-20"
        />

        {/* Menu */}
        <ul className="mt-4 flex flex-col items-center space-y-3 text-lg font-bold md:mt-0 md:flex-row md:space-x-10 md:space-y-0 md:text-3xl">
          <li
            className="cursor-pointer text-yellow-400 transition duration-300 hover:text-yellow-300"
            onClick={() => navigate("/work")}
          >
            WORK
          </li>
          <li
            className="cursor-pointer text-yellow-400 transition duration-300 hover:text-yellow-300"
            onClick={() => navigate("/fun")}
          >
            FUN
          </li>
          <li
            className="cursor-pointer text-green-400 transition duration-300 hover:text-green-300"
            onClick={() => navigate("/")}
          >
            ME
          </li>
        </ul>
      </div>

      {/* Thanh trắng dưới cùng */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-white"></div>
    </nav>
  );
};

export default Navbar;
