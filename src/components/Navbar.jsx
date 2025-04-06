import React, { useState } from "react";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isvisible, setIsvisible] = useState(false);

  return (
    <div className="max-w-screen-xl py-6 mx-auto flex items-center justify-between border-b-[1px] border-b-zinc-700 lg:px-0 px-5">
      <div className="navbar-left flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links lg:flex gap-14 ml-24 hidden">
          {["Home", "Work", "Careers", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[1px] h-7 bg-zinc-500"></span>
            ) : (
              <a
                href="#"
                className='text-sm flex items-center gap-2 font-["satoshi"]'
              >
                {index === 1 ? (
                  <span
                    style={{ boxShadow: "0 0 0.65em #00FF19" }}
                    className="inline-block w-2 h-2 rounded-full bg-green-500"
                  ></span>
                ) : null}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <div className="lg:block hidden">
        <Button />
      </div>
      <div className="relative">
        <GiHamburgerMenu
          onClick={() => setIsvisible(!isvisible)}
          className="lg:hidden  h-7 w-7 "
        />
      </div>
      {isvisible && (
        <div className="absolute top-[11%] z-[999] left-0 bg-zinc-800 w-full h-screen lg:hidden">
          {["Home", "Work", "Careers", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[1px] h-7 bg-zinc-500"></span>
            ) : (
              <a
                href="#"
                className='text-lg flex items-center justify-center mt-5 gap-2 font-["satoshi"]'
              >
                {index === 1 ? (
                  <span
                    style={{ boxShadow: "0 0 0.65em #00FF19" }}
                    className="inline-block w-2 h-2 rounded-full bg-green-500"
                  ></span>
                ) : null}
                {elem}
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
