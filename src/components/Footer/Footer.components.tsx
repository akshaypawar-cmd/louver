import type { FC } from "react";
import { Link } from "react-router-dom";

import { facilitiesList, socialLinks } from "@mockdata";

const Footer: FC = () => {

return (
<div className="max-w-7xl mx-auto p-3">
      <section className="bg-sky-200 rounded-xl p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 md:m-2 p-1 md:max-w-7xl flex-1 mx-auto">
          <div className="max-w-2xs m-6">
            <p className="text-gray-800 text-2xl">
              Your Play, Your Way-
              <span className="md:block"> Modern Sports Facilities </span>
              for Every Passion
            </p>

            <button className="mt-4 font-normal bg-white w-24 h-8 text-gray-800 rounded-full text-xs">
              Louvre sport
            </button>
          </div>
          <div className=" grid grid-cols-3 md:grid-cols-3 md:max-w-md gap-2 md:flex-1 md:mx-auto">
            <div className="w-32 h-64">
              <h4 className="text-gray-900 font-semibold mb-3">Facilities</h4>
              <ul className="text-gray-800 text-xs md:text-xs">
                {facilitiesList.map((facility) => (
                  <li key={facility} className="mb-2">
                    {facility}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-24 h-44">
              <h4 className="text-gray-900 font-semibold mb-3">About</h4>
              <ul className="space-y-2 text-gray-800 text-xs">
                <li>Our Mission</li>
                <li className="ml-3">Vision</li>
                <li>Community</li>
              </ul>
            </div>

            <div className="max-w-sm h-64 ">
              <h4 className="text-gray-900 mb-3 font-semibold">Social</h4>
              <div className="flex flex-col gap-5">
                {socialLinks.map(({ name, url, Icon }) => (
                  <Link
                    key={name}
                    to={url}
                    className="flex p-1 w-24 md:w-32 text-xs md:text-sm gap-2 items-center border border-gray-800 rounded-full text-gray-800"
                    target="_blank"
                  >
                    <Icon className="h-3 w-3 md:h-5 md:w-5" />
                    <span>{name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700"/>

        <div className="flex md:flex-row items-center  justify-between gap-4">
          <div className="flex items-center gap-4 text-gray-800 text-sm">
            <span>Privacy Policy/Terms</span>
          </div>

          <div className="flex items-center gap-3 text-gray-800">
            <a href="mailto:info@loversport.com" className="text-sm">
              All right reserved@louvre 2024
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
