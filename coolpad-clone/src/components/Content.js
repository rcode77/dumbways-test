import React, { useEffect, useState } from "react";
import icon from "../assets/icons/best-of-ces.png";

import { BsChevronDown, BsChevronRight } from "react-icons/bs";

import familyProduct from "../assets/images/family-products.png";
import featured1 from "../assets/images/featured1.png";
import featured2 from "../assets/images/featured2.png";
import about1 from "../assets/images/about1.png";
import about2 from "../assets/images/about2.png";
import about3 from "../assets/images/about3.png";

const DATA_QUERY = `{
    brands{
      id
      name
      products{
        id
        name
      }  
    }
}`;

export default function Content() {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      await fetch("https://dev-scphonecmlcj.microgen.id/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: DATA_QUERY }),
      })
        .then((response) => response.json())
        .then((result) => setData(result.data.brands[1]));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="bg-cyan-600">
        {/* Button Start */}
        <center className="flex justify-center ">
          <a
            href="#award"
            className="bg-slate-300/70 rounded-full p-2 -my-3 z-10"
          >
            <BsChevronDown size="40px" color="white" />
          </a>
        </center>
        {/* Button End */}

        {/* Award Start */}
        <div className="h-[500px] w-full flex" id="award">
          <center className="mx-auto my-auto text-white font-bold">
            <p className="text-4xl mb-6">Award-Winning Technology for Kids</p>
            <p className="text-xl mb-2">
              Android Central Best of CES 2019 – Dyno Smartwatch
            </p>
            <p className="max-w-3xl text-lg mb-5">
              “…after a brief hands-on with the watch, I can already see this is
              one of the only I’d ever recommend for any kid”{" "}
              <a className="text-black" href="">
                - Russel Holly
              </a>
            </p>
            <img src={icon} alt="" />
          </center>
        </div>
        {/* Award End */}

        {/* Product Family Start */}
        <div className="h-[900px] bg-gradient-to-b from-white to-gray-300 flex">
          <center className="mx-auto my-auto">
            <div className="-my-10">
              <p className="text-3xl font-bold text-gray-700 mb-4 mt-16">
                Our Family of Products, Designed with Yours in Mind
              </p>
              <p>
                Explore our best-selling products and how we can help keep your
                family connected
              </p>
            </div>
            <a
              href=""
              className="flex items-center justify-center text-lg mt-16 text-cyan-600 font-semibold hover:underline"
            >
              Shop Our Family <BsChevronRight />{" "}
            </a>
            <img src={familyProduct} alt="" />
          </center>
        </div>
        {/* Product Family End */}

        {/* Featured Product Start */}
        <div className="h-[900px] bg-white">
          <div className="flex h-full">
            <div className="border-4 border-gray-300 h-[750px] w-[1150px] m-auto">
              <div className="bg-white max-w-sm flex justify-center mx-auto -mt-5">
                <p className="text-3xl font-bold text-gray-700">
                  Featured Products
                </p>
              </div>
              <div className="container flex justify-center mt-10">
                {/* Left */}
                <div className="w-[520px] h-[520px] mr-3 bg-gradient-to-b from-white to-gray-300 relative">
                  <div className="flex">
                    <div className="w-72 ml-7 mt-10">
                      <p className="text-3xl font-bold text-gray-700 mb-2">
                        Built to Impress
                      </p>
                      <p className="text-gray-500">
                        A powerful smartphone, purpose-built for busy family
                        life.
                      </p>
                    </div>
                    <div className="w-56 flex justify-center mt-10">
                      <img src={featured1} alt="" />
                    </div>
                  </div>
                  <div className="w-full h-24 bg-cyan-600 absolute bottom-0">
                    <div className="flex justify-between items-center h-full">
                      <div className="ml-5">
                        <p className="text-black/40 font-bold text-sm">
                          PHONES
                        </p>
                        <p className="text-3xl font-bold text-white mb-2">
                          {/* {data.products[0].name} */}
                          Legacy
                        </p>
                      </div>
                      <div className="flex h-full">
                        <center className="flex justify-center items-center">
                          <a
                            href=""
                            className="bg-black/10 rounded-full p-2 mr-5"
                          >
                            <BsChevronRight size="40px" color="white" />
                          </a>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Left End */}

                {/* Right */}
                <div className="w-[520px] h-[520px] ml-3 bg-gradient-to-b from-white to-gray-300 relative">
                  <div className="flex">
                    <div className="w-64 ml-7 mt-10">
                      <p className="text-3xl font-bold text-gray-700 mb-2">
                        Always Together, Never Lost
                      </p>
                      <p className="text-gray-500">
                        Playful for kids and provides safety and peace of mind
                        for parents.
                      </p>
                    </div>
                    <div className="w-52 flex justify-center mt-10">
                      <img src={featured2} alt="" />
                    </div>
                  </div>
                  <div className="w-full h-24 bg-yellow-400 absolute bottom-0">
                    <div className="flex justify-between items-center h-full">
                      <div className="ml-5">
                        <p className="text-black/40 font-bold text-sm">
                          KIDS TECH
                        </p>
                        <p className="text-3xl font-bold text-white mb-2">
                          Dyno Smartwatch
                        </p>
                      </div>
                      <div className="flex h-full">
                        <center className="flex justify-center items-center">
                          <a
                            href=""
                            className="bg-black/10 rounded-full p-2 mr-5"
                          >
                            <BsChevronRight size="40px" color="white" />
                          </a>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right End */}
              </div>

              {/* Button */}
              <div className="flex justify-center mt-12">
                <a href="">
                  <button className="px-20 py-4 bg-cyan-600 rounded-full text-xl text-white font-bold">
                    Shop All Products
                  </button>
                </a>
              </div>
              {/* Button End */}
            </div>
          </div>
        </div>
        {/* Featured Product End */}

        {/* About Start */}
        <div className="h-[700px] bg-gray-100 flex">
          <center className="mx-auto">
            <div className="my-10">
              <p className="text-3xl font-bold text-gray-700 mb-4 mt-16">
                Learn More About Our Company and Our Mission
              </p>
              <p className="text-gray-400">
                We’re focused on bringing people together again through
                technology
              </p>
            </div>
            <div className="flex">
              <div className="mr-2">
                <img src={about1} alt="" />
                <div className="w-full h-16 cursor-pointer group">
                  <p className="text-xl font-bold text-gray-700 pt-2 relative group-hover:hidden">
                    Focused on Family
                  </p>
                  <p className="bg-red-500 w-full h-16 text-xl font-bold text-white pt-4 -z-10 relative group-hover:z-10">
                    About Us
                  </p>
                </div>
              </div>
              <div className="mx-2">
                <img src={about2} alt="" />
                <div className="w-full h-16 cursor-pointer group">
                  <p className="text-xl font-bold text-gray-700 pt-2 relative group-hover:hidden">
                    Technology You Can Trust
                  </p>
                  <p className="bg-red-500 w-full h-16 text-xl font-bold text-white pt-4 -z-10 relative group-hover:z-10">
                    Our Technology
                  </p>
                </div>
              </div>
              <div className="ml-2">
                <img src={about3} alt="" />
                <div className="w-full h-16 cursor-pointer group">
                  <p className="text-xl font-bold text-gray-700 pt-2 relative group-hover:hidden">
                    Join Our Family
                  </p>
                  <p className="bg-red-500 w-full h-16 text-xl font-bold text-white pt-4 -z-10 relative group-hover:z-10">
                    Careers at Coolpad
                  </p>
                </div>
              </div>
            </div>
          </center>
        </div>
        {/* About ENd */}
      </div>
    </div>
  );
}
