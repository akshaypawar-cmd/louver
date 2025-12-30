import type { FC } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import userProfile from "@assets/user3.jpg"

const UserProfile:FC = () => {

const arrowBtnClass ="hidden md:flex size-11 border border-gray-600 text-gray-600 rounded-full items-center justify-center";
const iconBtnClass ="w-11 h-11 border border-gray-600 text-gray-600 rounded-full flex items-center justify-center";

  return (
     <>
      <div className="md:max-w-4xl mx-auto flex flex-col items-center justify-center mt-6">
        <button className="border border-gray-500 text-black px-3 py-2 rounded-full text-sm font-semibold">
          Testimonial
        </button>

        <p className="mt-5 font-semibold md:text-2xl text-center">
          Here is what our Clients
          <span className="block md:inline">are saying about us </span>
        </p>

        <div className="mt-12 mb-10 p-3 flex flex-col items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2">
            <button
              aria-label="previous"
              className={arrowBtnClass }
            >
              <ArrowLeft className="w-5 h-5"/>
            </button>

            <div className="rounded-2xl md:px-10 md:py-4 flex flex-col md:flex-row bg-gray-50 items-center gap-4 p-4 h-64 md:h-52">
              <img
                src={userProfile}
                alt="User"
                className="w-24 h-24 md:w-20 md:h-20 rounded-full object-cover shadow-lg"
              />

              <div className="text-left ">
                <h3 className="text-lg font-semibold text-gray-900">
                  John Doe
                </h3>

                <p className="text-sm text-gray-600 mt-1 line-clamp-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing.
                  <span className="block md:inline">
                    elit nibh mauris, nec turpis orci lectus maecenas.
                  </span>
                  Suspendisse sed magna eget nibh in turpis
                </p>

                <p className="text-xs text-black mt-2">Apr 12, 1990</p>
              </div>
            </div>

            <button
              aria-label="next"
              className={arrowBtnClass}
            >
              <ArrowRight className="h-5 w-6"/>
            </button>
          </div>

          <div className="flex md:hidden mt-2 gap-40">
            <button
              aria-label="previous"
              className={iconBtnClass}
              >
              <ArrowLeft className="h-5 w-6"/>
            </button>

            <button
              aria-label="next"
              className={iconBtnClass}
            >
              <ArrowRight className="h-5 w-6"/>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile ;
