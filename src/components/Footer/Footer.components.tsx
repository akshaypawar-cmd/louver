import type { FC } from "react"
import { Link } from "react-router-dom"

import { facilitiesList, socialLinks } from "@mockData"

const Footer:FC = () => {

  return (
  <> 
      <section className="bg-sky-200 mb-10 m-4 rounded-xl p-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-800 text-2xl md:text-2xl max-w-xs">
                Your Play, Your Way-
                <span className="md:block"> Modern Sports Facilities </span>
                for Every Passion
              </p>
              <button className="md:mt-10 mt-6 font-normal inline-block bg-white text-gray-800 px-4 py-2 rounded-full text-sm">
                Louvre sport
              </button>
            </div>
            <div className="md:grid grid grid-cols-3 md:grid-cols-3">
              <div>
                <h4 className="text-gray-900 font-semibold mb-3">Facilities</h4>
                <ul className="space-y-8 text-gray-800 text-xs md:text-xs">
                  {facilitiesList.map((facility) => (
                    <li key={facility} className="mb-2">
                      {facility}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-gray-900 font-semibold mb-3">About</h4>
                <ul className="space-y-2 text-gray-800 text-xs">
                  <li>Our Mission</li>
                  <li>Vision</li>
                  <li>Community</li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-900 mb-3 md:font-semibold">Social</h4>
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

          <hr className="my-7 border-gray-700" />

          <div className="flex md:flex-row items-center md:items-start justify-between gap-4">
            <div className="flex items-center gap-4 text-gray-800 text-sm">
              <span>Privacy Policy/Terms</span>
            </div>

            <div className="flex items-center gap-3 text-gray-800">
              <a href="mailto:info@loversport.com" className="text-sm">
                All right reserved@louvre 2024
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
 
  )
}

export default Footer
