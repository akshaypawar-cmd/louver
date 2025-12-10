import { useState, useRef, useEffect, type FC } from "react";
import { Link } from "react-router-dom";

import { Asterisk, Menu, Search, ArrowUpRight } from "lucide-react";

import bgImg from "@assets/bgImage.jpg";
import user1 from "@assets/user1.jpg";
import user2 from "@assets/user2.jpg";
import user3 from "@assets/user3.jpg";
import user4 from "@assets/user4.jpg";

const HeroSection: FC = () => {
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
        <nav className="relative z-10 max-w-full p-6 flex flex-col">
          <div className="flex items-center justify-between md:gap-1">
            <div className="text-1xl font-bold text-white">
              LOUVER <span className="font-normal">SPORT</span>
            </div>

            <div className="hidden md:flex items-center md:text-xs lg:text-sm md:gap-3 backdrop-contrast-50 rounded-full p-3 text-white font-normal">
              <Link to={"/about"}>About Us</Link>
              <Link to={"/facilities"}>Facilities</Link>
              <Link to={"/membership"}>Membership</Link>
            </div>

            <div className="flex items-center space-x-3">
              <div className="relative hidden border-2 border-gray-200 rounded-full sm:block">
                <Search
                  size={35}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-2 text-gray-700"
                />
                <input
                  type="text"
                  placeholder="Search here..."
                  className="pl-2 pr-4 py-3 border border-white rounded-full bg-white/90 focus:outline-none"
                />
              </div>

              <button className="hidden sm:inline-flex bg-[#212529] md:px-2 md:py-2 md:text-xs text-white text-2lg px-5 py-2 rounded-full items-center gap-2 font-normal">
                Book Now <ArrowUpRight />
              </button>

              <div className="relative sm:hidden" ref={dropdownRef}>
                <button
                  className="p-2 rounded-full bg-white"
                  onClick={() => setOpen(!open)}
                >
                  <Menu className="h-4 w-4" />
                </button>

                {open && (
                  <div className="absolute right-0 top-14 bg-white text-black rounded-xl shadow-xl w-36 p-2 z-50">
                    <p className="px-3 py-2 rounded-lg bg-black text-white text-base">
                      About Us
                    </p>
                    <p className="p-2">Facilities</p>
                    <p className="p-2">Membership</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="relative w-[98%] bg-transparent sm:hidden border border-white rounded-full mt-4">
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
        <button className="text-white border border-white ml-3 px-4 py-2 sm:px-5 md:mt-4 sm:py-2 rounded-full w-fit text-sm sm:text-base">
          Sport Center
        </button>

        <div className="relative h-1/2 flex items-center justify-start pl-4 mb-3   sm:pl-7">
          <div className="text-white w-[95%] flex flex-col lg:mt-22 mb-13  mr-10 md:mt-12  md:mb-2">
            <div className="flex w-full justify-between items-start gap-4 sm:gap-12   mb-19 pr-0 sm:pr-12">
              <h1 className="line-clamp-3 flex-1 text-sm sm:text-xl lg:text-2xl xl:w-full md:mb-22 font-normal lg:font-light max-w-full sm:max-w-lg">
                Your Play, Your Way-
                <br className="hidden sm:block" />
                Modern Sports Facilities
                <br className="hidden sm:block" />
                for Every Passion
              </h1>

              <div className=" flex flex-col items-start rounded  px-2 py-2 sm:p-2  backdrop-contrast-50 md:backdrop-filter-none sm:backdrop-contrast-50  -m-18 ml-1 sm:m-0 sm:mr-13 md:-mr-10 xl:mb-6">
                <div className="text-white text-2xl sm:text-3xl mb-1 sm:mb-3">
                  <Asterisk />
                </div>
                <p className="text-white text-[10px] sm:text-sm leading-tight sm:leading-normal mr-20 sm:mr-0 w-[190%] sm:w-auto md:mb-9">
                  All in one-sports <br /> facilities centre
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-full bottom-20 md:bottom-27  flex flex-col items-end  pr-6 md:pr-12">
          <div className="flex border border-blue-800 rounded-full p-1  z-20">
            <img
              src={user1}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
            />
            <img
              src={user2}
              className="w-10 h-10 lg:w-12 lg:h-12 -ml-3 lg:-ml-4 rounded-full object-cover"
            />
            <img
              src={user3}
              className="w-10 h-10 lg:w-12 lg:h-12 -ml-3 lg:-ml-4 rounded-full object-cover"
            />
            <img
              src={user4}
              className="w-10 h-10 lg:w-12 lg:h-12 -ml-3 lg:-ml-4 rounded-full object-cover"
            />
          </div>

          <p className="text-white text-xs sm:text-sm lg:text-base font-light lg:font-normal xl:-mt-1  leading-tight sm:leading-normal mt-3 md:mt-6 w-[220px] sm:w-[280px] md:w-[340px] text-right">
            We’re committed to delivering a high-quality experience in a
            welcoming and supportive atmosphere
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
