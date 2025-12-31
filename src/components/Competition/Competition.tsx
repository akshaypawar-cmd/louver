import  { type FC } from 'react'
import  imgCom from "assets/Competition.jpg"
import { ArrowUpRight } from 'lucide-react';
const Competition:FC = () => {
  return (
  <section className="max-w-7xl  mx-auto ">
        <div className="relative bg-white rounded-2xl p-6 md:p-12 overflow-hidden">
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="flex-1">
              <div className="flex  md:flex-row w-1/2  gap-2 mb-1">
                <button className="mb-6 border-none  cursor-pointer bg-[#AEE5FF]  lg:p-3  text-[black] px-2 py-1 font-medium  rounded-full text-xs ">
                  Competition
                </button>
                <button className="mb-6 border cursor-pointer text-black px-2 py-1 font-medium rounded-full text-xs ">
                  Training
                </button>
                <button className="mb-6 border cursor-pointer text-[7px]  text-black  px-2 py-1 font-medium rounded-full md:text-xs ">
                  Friendly Match
                </button>
              </div>

              <h2 className="text-gray-900 text-2xl lg:text-5xl font-normal mb-4 leading-snug max-w-md">
                Experience the best
                <span className="block">
                in Courts, Fields,</span>
                <span className="block"> 
                and More 
                </span>
              </h2>

              <p className="text-gray-600 line-clamp-4  w-full  text-[10px]   lg:line-clamp-4  lg:text-sm leading-relaxed mb-4    lg:w-1/2 ">
                Our state-of-art sports facilities offer a variety of courts
                <br />
                and fields, including tennis, basketball and football,
                <br /> designed to cater to both casual player and
                <br />
                competitive athletes.
              </p>
            </div>

            <div className="relative w-full md:w-2/5 flex items-center justify-end">
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-96 h-96  from-blue-200 to-transparent rounded-3xl blur-3xl opacity-30 -z-10"></div>
                <img
                  src={imgCom}
                  alt="Competition"
                  className="w-full    h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <button className="bg-[#212529] ml-10  text-white text-1lg px-5 py-2 rounded-full  flex items-center gap-2     font-normal ">
          Book Now
        <ArrowUpRight/>
          </button>
      </section>
  )
}

export default Competition ; 
