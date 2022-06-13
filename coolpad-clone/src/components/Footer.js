import React from "react";

import {
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import partner1 from "../assets/icons/trust1.png";
import partner2 from "../assets/icons/trust2.png";
import partner3 from "../assets/icons/trust3.png";
import partner4 from "../assets/icons/trust4.png";
import enIcon from "../assets/icons/en-icon2.png";

export default function Footer() {
  return (
    <div>
      {/* Partner Start */}
      <div className="w-full h-64 bg-neutral-700">
        <center>
          <p className="text-md font-bold text-white pt-14">
            TRUSTED BY THESE CARRIERS:
          </p>
        </center>
        <div className="flex justify-evenly mt-6">
          <img src={partner1} alt="partner1" />
          <img src={partner2} alt="partner2" />
          <img src={partner3} alt="partner3" />
          <img src={partner4} alt="partner4" />
        </div>
      </div>
      {/* Partner End */}

      {/* Footer Start */}
      <div className="w-full h-[550px] bg-cyan-600">
        <div className="pt-24 flex">
          <div className="w-1/2 pl-14">
            <p className="text-xl font-bold text-white mb-3">
              LETS STAY TOGETHER
            </p>
            <p className="text-white text-lg max-w-md mb-4">
              Sign up to receive our updates, product news and promotions
            </p>
            <div className="flex items-center">
              <input
                className="w-80 h-14 pl-5 bg-white rounded-l-full"
                type="text"
                placeholder="Enter your email address"
              />
              <button className="w-36 h-14 bg-cyan-800 rounded-r-full font-bold text-white">
                SUBMIT
              </button>
            </div>
          </div>
          <div className="w-1/2 pr-14 flex justify-evenly">
            <div>
              <p className="text-xl font-bold text-white mb-3">PRODUCTS</p>
              <ul className="text-white text-lg max-w-md mb-1">
                <li className="hover:underline cursor-pointer">Phones</li>
                <li className="hover:underline cursor-pointer">
                  Connected Device
                </li>
                <li className="hover:underline cursor-pointer">Kids Tech</li>
                <li className="hover:underline cursor-pointer">FamilyLabs</li>
              </ul>
            </div>
            <div>
              <p className="text-xl font-bold text-white mb-3">COMPANY</p>
              <ul className="text-white text-lg max-w-md mb-1">
                <li className="hover:underline cursor-pointer">Press</li>
                <li className="hover:underline cursor-pointer">About</li>
                <li className="hover:underline cursor-pointer">Careers</li>
                <li className="hover:underline cursor-pointer">Recycling</li>
              </ul>
            </div>
            <div>
              <p className="text-xl font-bold text-white mb-3">SUPPORTS</p>
              <ul className="text-white text-lg max-w-md mb-1">
                <li className="hover:underline cursor-pointer">Contact Us</li>
                <li className="hover:underline cursor-pointer">
                  Knowledge Center
                </li>
                <li className="hover:underline cursor-pointer">FAQ's</li>
                <li className="hover:underline cursor-pointer">
                  Register Product
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Start */}
        <div className="flex justify-start">
          <div className="pt-20 pl-16 flex">
            <div className="flex justify-center items-center group">
              <a
                href=""
                className="bg-white rounded-full p-2 mr-3 group-hover:bg-cyan-800"
              >
                <FaFacebookF
                  size="20px"
                  className="text-cyan-600 group-hover:text-white"
                />
              </a>
            </div>
            <div className="flex justify-center items-center group">
              <a
                href=""
                className="bg-white rounded-full p-2 mr-3 group-hover:bg-cyan-800"
              >
                <FaLinkedin
                  size="20px"
                  className="text-cyan-600 group-hover:text-white"
                />
              </a>
            </div>
            <div className="flex justify-center items-center group">
              <a
                href=""
                className="bg-white rounded-full p-2 mr-3 group-hover:bg-cyan-800"
              >
                <FaInstagram
                  size="20px"
                  className="text-cyan-600 group-hover:text-white"
                />
              </a>
            </div>
            <div className="flex justify-center items-center group">
              <a
                href=""
                className="bg-white rounded-full p-2 mr-3 group-hover:bg-cyan-800"
              >
                <FaTwitter
                  size="20px"
                  className="text-cyan-600 group-hover:text-white"
                />
              </a>
            </div>
            <div className="flex justify-center items-center group">
              <a
                href=""
                className="bg-white rounded-full p-2 mr-3 group-hover:bg-cyan-800"
              >
                <FaYoutube
                  size="20px"
                  className="text-cyan-600 group-hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>
        {/* Social Media End */}

        <div className="pt-5">
          <div className="container mx-auto">
            <div className="flex items-center justify-between ">
              <div className="px-4 text-xl text-gray-700">
                <p>Copyright © 2020 Coolpad US. All Rights Reserved.</p>
              </div>
              <div className="px-4">
                <ul className="flex text-xl">
                  <li className="mr-1 cursor-pointer text-gray-700 hover:underline hover:text-black">
                    Privay Policy |
                  </li>
                  <li className="mr-1 cursor-pointer text-gray-700 hover:underline hover:text-black">
                    Term of Use |
                  </li>
                  <li className="mr-1 cursor-pointer text-gray-700 hover:underline hover:text-black">
                    Warranty |
                  </li>
                  <li className="mr-1 cursor-pointer text-gray-700 hover:underline hover:text-black">
                    Site Map
                  </li>
                </ul>
              </div>
              <div className="px-4 mr-3">
                <a href="#">
                  <img src={enIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  );
}
