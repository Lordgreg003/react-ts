import React, { useRef } from "react";
import { image1 } from "../../images/Index";
import {} from "react-router-dom";
import "../../som.css";

const Nav = () => {
  const openRef = useRef<any>("");
  const flexRef = useRef<any>("hidden");

  const skrill = () => {
    openRef.current.className === "open hambuger focus:outline-none"
      ? (openRef.current.className = "hambuger focus:outline-none")
      : (openRef.current.className = "open hambuger focus:outline-none");

    flexRef.current.className === "hidden md:hidden"
      ? (flexRef.current.className = "md:hidden")
      : (flexRef.current.className = "hidden md:hidden");

    console.log(openRef);
    console.log(flexRef);
  };

  return (
    <nav className="">
      <div className="flex items-center justify-between bg-[#C8CCCD]">
        <div className="flex items-center">
          <img src={image1} alt="" />
          <div className="text-[#69B99D] text-xl font-bold">House Linkup</div>
        </div>
        <div className="hidden md:flex md:space-x-2 lg:space-x-6">
          <a className="text-[#69B99D]" href="#home">
            Home
          </a>
          <a href="#property">Property</a>
          <a href="#about">About</a>
          <a href="#service">Service</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="hidden md:block md:space-x-3 lg:space-x-5">
          <button className="text-[#69B99D] md:py-3 md:px-12 bg-white">
            Signup
          </button>
          <button className="text-white md:py-3 md:px-12 bg-[#69B99D]">
            Login
          </button>
        </div>
        <div className="flex  md:hidden ml-auto ">
          <button
            onClick={skrill}
            id="menu-btn"
            ref={openRef}
            className="hambuger focus:outline-none "
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        <div ref={flexRef} className="hidden md:hidden">
          <div className="absolute z-20 flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-[#C8CCCD] sm:w-auto sm:self-center left-6 right-6 drop-shadow-md text-black">
            <a onClick={skrill} href="#home">
              Home
            </a>
            <a onClick={skrill} href="#property">
              Property
            </a>
            <a onClick={skrill} href="#about">
              About
            </a>
            <a onClick={skrill} href="#service">
              Service
            </a>
            <a onClick={skrill} href="#contact">
              Contact
            </a>
            <button>Signup</button>
            <button>Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
