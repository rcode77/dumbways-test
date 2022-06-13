import React, { useState, useEffect } from "react";

import coolpadIcon from "../assets/icons/coolpad.png";
import searchIcon from "../assets/icons/search.png";
import enIcon from "../assets/icons/en-icon.png";

export default function Navbar() {
  const [show, setShow] = useState(false);
  let curScroll;
  let prevScroll = window.scrollY || document.documentElement.scrollTop;
  let toggled;
  let curDirection = 0;
  let prevDirection = 0;

  const checkScroll = function () {
    curScroll = window.scrollY || document.documentElement.scrollTop;
    if (curScroll > prevScroll) {
      // scrolled down
      curDirection = 2;
    } else {
      //scrolled up
      curDirection = 1;
    }

    if (curDirection !== prevDirection) {
      toggled = toggleHeader();
    }

    prevScroll = curScroll;
    if (toggled) {
      prevDirection = curDirection;
    }
  };

  const toggleHeader = function () {
    toggled = true;
    let threshold = 200;
    if (curDirection === 2 && curScroll > threshold) {
      setShow(true);
    } else if (curDirection === 1) {
      setShow(false);
    } else {
      toggled = false;
    }
    return toggled;
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 z-20 flex w-full items-center bg-white/70 transition ${
        show && "transition -translate-y-full"
      }`}
    >
      <div className="container mx-auto ">
        <div className="flex items-center justify-between ">
          <div className="px-4">
            <a href="#home" className="block py-6">
              <img src={coolpadIcon} class alt="" />
            </a>
          </div>
          <div className="px-4">
            <ul className="flex text-xl">
              <li className="mr-10 cursor-pointer text-gray-600">Products</li>
              <li className="mr-10 cursor-pointer text-gray-600">Bubble</li>
              <li className="mr-10 cursor-pointer text-gray-600">FamilyLabs</li>
              <li className="mr-10 cursor-pointer text-gray-600">About</li>
              <li className="mr-10 cursor-pointer text-gray-600">
                Knowledge Center
              </li>
              <li className="cursor-pointer text-gray-600">
                Register a Product
              </li>
            </ul>
          </div>
          <div className="px-4 flex">
            <a href="#">
              <img src={searchIcon} className="mr-5" alt="" />
            </a>
            <a href="#">
              <img src={enIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
