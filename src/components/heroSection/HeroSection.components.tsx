import { useState, useRef, useEffect, type FC } from "react";
import { Asterisk, Menu, Search, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

import bgImg from "@assets/bgImage.jpg";
import { menuItems, navItems, users } from "@mockdata";

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
        className="h-screen w-full  bg-no-repeat bg-cover bg-top-left md:bg-center md:bg-cover relative"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <nav className="relative md:whitespace-nowrap z-10 max-w-full p-6 flex flex-col">
          <div className="flex items-center justify-between md:gap-2 w-full">
            <div className="text-xl md:text-sm font-bold text-white">
              LOUVER <span className="font-normal md:text-sm">SPORT</span>
            </div>

            <div className="hidden md:flex items-center md:gap-4 md:p-4 text-sm gap-6 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 text-white">
              {navItems.map((item) => (
                <NavLink
                  key={item.link}
                  to={item.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-b-2 border-white"
                      : "text-white"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-3 md:gap-2">
              <div className="hidden md:block relative backdrop-blur-sm rounded-full">
                <Search
                  size={35}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-2 text-gray-700 "
                />
                <input
                  type="text"
                  placeholder="Search here..."
                  className="pl-3 pr-10 py-2 border border-white rounded-full outline-none text-white"
                />
              </div>

              <button className="hidden md:flex bg-gray-900 md:ml-3 items-center px-4 py-2 text-xs text-white rounded-full gap-2">
                Book Now <ArrowUpRight />
              </button>

              <div className="md:hidden relative" ref={dropdownRef}>
                <button
                  className="p-2 rounded-full bg-white"
                  onClick={() => setOpen(!open)}
                >
                  <Menu className="h-5 w-5" />
                </button>

                {open && (
                  <div className="absolute right-0 top-12 bg-white text-black rounded-xl shadow-xl w-36 p-2 z-50">
                    {menuItems.map((item) => (
                      <NavLink
                        to={item.link}
                        key={item.link}
                        className={({ isActive }) =>
                          isActive
                            ? "px-3 py-2 rounded-lg bg-black text-white block"
                            : "px-3 py-2 rounded-lg text-black block"
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="relative md:hidden w-full bg-transparent border border-white rounded-full mt-4">
            <Search
              size={32}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-1"
            />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-4 pr-12 py-2 rounded-full bg-white/17 outline-none"
            />
          </div>
        </nav>

        <button className="text-white border border-white ml-4 px-5 py-2 rounded-full text-sm mt-2">
          Sport Center
        </button>

        <div className="flex items-center justify-start pl-6 mt-6 md:mt-10">
          <div className="text-white w-11/12">
            <div className="flex justify-between gap-6">
              <h1 className="text-xs md:text-2xl font-light max-w-lg">
                Your Play, Your Way–
                <br />
                Modern Sports Facilities
                <br />
                for Every Passion
              </h1>

              <div className="flex flex-col items-start bg-white/10 backdrop-blur-sm p-2 rounded">
                <Asterisk className="text-white text-3xl mb-2"/>
                <p className="text-white  text-sm leading-tight">
                  All in one-sports <span className="block">facilities centre </span> 
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-full bottom-14 md:bottom-6 flex flex-col items-end pr-6">
          <div className="flex border border-blue-800 rounded-full p-1">
            {users.map((item, index) => (
              <img
                key={item.id}
                src={item.img}
                className={`w-10 h-10 rounded-full object-cover ${
                  index !== 0 ? "-ml-3" : ""
                }`}
              />  
            ))}
          </div>

          <p className="text-white text-xs sm:text-sm mt-3 w-56 text-right">
            We're committed to delivering a high-quality experience in a
            welcoming and supportive atmosphere
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
