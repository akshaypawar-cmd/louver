import React, { useState, useRef, useEffect } from "react";
import { Asterisk } from "lucide-react";
import { Menu } from "lucide-react";
import { Search } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import bgImg from "@assets/bgImage.jpg";
import user1 from "@assets/user1.jpg";
import user2 from "@assets/user2.jpg";
import user3 from "@assets/user3.jpg";
import user4 from "@assets/user4.jpg";

const HeroSection: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <div
        className="h-screen bg-no-repeat bg-[2%_center] bg-[length:170%] md:bg-center md:bg-[length:100%] relative min-h-[100vh]"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/4"></div>

        <nav className="relative z-10 max-w-7xl px-6 py-6 flex flex-col">
          <div className="flex items-center justify-between">
            <div className="text-1xl font-bold text-white">
              LOUVER <span className="font-normal">SPORT</span>
            </div>

            <div className="hidden md:flex items-center lg:ml-105 md:gap-3 backdrop-contrast-50 rounded-full p-3 text-white font-normal">
              <Link to={"/about"} className="md:text-sm ">
                About Us
              </Link>
              <Link to={"/facilities"}>Facilities</Link>
              <Link to={"/membership"}>Membership</Link>
            </div>

            <div className="flex items-center  space-x-3">
              <div className="relative hidden border-2 border-gray-200 rounded-full sm:block">
                <Search
                  size={35}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-2 text-gray-700 "
                />
                <input
                  type="text"
                  placeholder="Search here..."
                  className="pl-2 pr-4 py-3 border border-white rounded-full bg-white/90 focus:outline-none"
                />
              </div>

              <button className="hidden sm:inline-flex bg-[#212529] text-white text-2lg px-5 py-2 rounded-full items-center gap-2 font-normal">
                Book Now <ArrowUpRight />
              </button>

              <div className="relative sm:hidden" ref={dropdownRef}>
                <button
                  className="p-2 rounded-full bg-white"
                  onClick={() => setOpen(!open)}
                >
                  <Menu className=" h-4 w-4 " />
                </button>

                {open && (
                  <div className="absolute right-0 top-14 bg-white  text-black rounded-xl shadow-xl w-36 p-2 z-50">
                    <p className="px-3 py-2 rounded-lg bg-black text-white text-base  ">
                      About Us
                    </p>
                    <p className="px-3 py-2 rounded-lg  ">Facilities</p>
                    <p className="px-3 py-2 rounded-lg  ">Membership</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="relative w-[90%] bg-transparent sm:hidden border border-white rounded-full mt-4">
            <Search
              size={35}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-2 text-gray-900"
            />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-7 pr-4 py-2 border-2 border-white rounded-full bg-white/90 focus:outline-none"
            />
          </div>
        </nav>

        <div className="relative h-1/2 flex items-center justify-start pl-4 mb-3 sm:pl-7">
          <div className="text-white w-[95%] flex flex-col lg:mt-22 mb-13 mr-10">
            <button className="text-white border border-white -m-3 px-4 py-2 sm:px-5 sm:py-2 rounded-full mb-4 sm:mb-8 w-fit text-sm sm:text-base">
              Sport Center
            </button>

            <div className="hidden sm:flex items-start gap-12 w-full mb-14 justify-between pr-12">
              <h1 className="lg:text-4xl text-xl lg:font-light font-normal flex-1 line-clamp-3 max-w-lg">
                Your Play, Your Way-
                <br />
                Modern Sports Facilities
                <br />
                for Every Passion
              </h1>

              <div className="flex flex-col items-center">
                <div className="text-white text-3xl mb-3">
                  <Asterisk />
                </div>
                <p className="text-white">
                  All in one-sports <br /> facilities centre
                </p>
              </div>
            </div>

            <div className="sm:hidden flex flex-row items-start justify-between gap-4">
              <h1 className="text-sm font-normal line-clamp-3 max-w-full">
                Your Play, Your Way- Modern Sports Facilities for Every Passion
              </h1>

              <div className="flex flex-col items-start -m-20">
                <div className="text-white text-2xl mb-1">
                  <Asterisk />
                </div>
                <p className="text-white/110 text-[10px] mr-12 leading-tight w-[190%]">
                  All in one-sports <br /> facilities centre
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-36 mr-5 -right-2 md:right-12 md:bottom-45 pointer-events-none border border-blue-800 rounded-full inline-flex p-1">
          <img
            src={user1}
            className="lg:w-12 w-10 h-10 lg:h-12 rounded-full object-cover"
          />
          <img
            src={user2}
            className="lg:w-12 w-10 h-10 lg:h-12 -ml-3 md:-ml-5 rounded-full object-cover"
          />
          <img
            src={user3}
            className="lg:w-12 w-10 h-10 lg:h-12 -ml-3 md:-ml-5 rounded-full object-cover"
          />
          <img
            src={user4}
            className="lg:w-12 w-10 h-10 lg:h-12 -ml-3 md:-ml-5 rounded-full object-cover"
          />
        </div>

        <div className="absolute sm:bottom-28 -mt-13 lg:mt-5 line-clamp-3 md:left-270 -translate-x-1/2 z-20">
          <p className="text-white text-xs mt-1 w-[230px] ml-100 lg:mr-90 lg:text-end font-light">
            We’re committed to delivering a high- quality experience in a
            welcoming and supportive atmosphere
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
