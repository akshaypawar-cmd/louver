import { type FC } from "react";
import { ArrowUpRight,ArrowLeft,ArrowRight } from "lucide-react";

import swimming from "@assets/swim_img.jpg";
import batman from "@assets/batman_img.jpg";

const Cards: FC = () => {
  
  return (
    <>
      <section className="max-w-7xl p-4 md:p-8 mx-auto">
        <div className="flex flex-col md:flex-row md:ml-0 mx-auto gap-2">
          <div className=" md:w-1/3 md:mt-3 text-left">
            <button className="mb-6 border text-black px-2 py-2 font-medium rounded-full text-xs">
              About Louvre
            </button>
            <h2 className="text-xl md:text-base font-normal md:line-clamp-5 leading-tight text-gray-800">
              At Louvre sport center, we're passionate about providing a
              <span className="block md:inline">
                top-notch environment for athletes of all levels.{" "}
              </span>
            </h2>

            <div className="mt-8">
              <button className="inline-flex items-center gap-1 bg-gray-900 text-white px-4 py-2 rounded-full md:text-1xl cursor-pointer">
                Get in Touch
                <ArrowUpRight/>
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row mt-4 gap-6">
            <div className="relative flex-1 w-full rounded-2xl shadow-lg overflow-hidden">
              <img
                src={swimming}
                alt="swimmer"
                className="w-full h-64 md:h-80 object-cover"
              />
              <button className="bg-black/70 text-white text-xs absolute top-4 left-4 px-5 py-2 rounded-full flex items-center gap-2 font-normal">
                Indoor Area
              </button>

              <div className="absolute bottom-8 left-4 right-4 flex items-center justify-between">
                <div className="text-white">
                  <h3 className="text-lg font-semibold drop-shadow">
                    Versatile space for a wide
                  </h3>
                  <p className="text-sm drop-shadow opacity-90">
                    rand of activities
                  </p>
                </div>

                <button className="bg-white/90 rounded-full cursor-pointer w-10 h-10 flex items-center justify-center shadow-md">
                  <ArrowUpRight />
                </button>
              </div>
            </div>

            <div className="relative flex-1 w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={batman}
                alt="basketball"
                className="w-full h-59 object-cover"
              />

              <button className="bg-black/70 text-white text-xs absolute top-4 left-4 px-5 py-2 rounded-full font-normal">
                Outdoor Area
              </button>

              <div className="absolute bottom-21 md:bottom-24 p-2 left-4 right-4 flex items-center justify-between">
                <div className="text-white">
                  <h3 className="text-sm font-semibold drop-shadow">
                    Futsal Court
                  </h3>
                  <p className="text-sm drop-shadow opacity-90">
                    Play, train and compete
                  </p>
                </div>

                <button className="bg-black text-white font-semibold cursor-pointer rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                  <ArrowUpRight className="min-w-4 min-h-4"/>
                </button>
              </div>
              <div className="flex md:flex-row items-center p-2 justify-between w-full gap-4">
                <p className="text-xs md:text-xs text-gray-500 block max-w-1/2 line-clamp-2 md:block md:max-w-md">
                  Discover your new - favorite place to play, train, and
                  compete.
                </p>

                <div className="flex items-center gap-2">
                  <button
                    aria-label="previous"
                    className="min-w-10 min-h-10 font-light rounded-full border border-gray-300 flex items-center justify-center"
                  >
                    <ArrowLeft className="min-w-4 min-h-4 text-gray-600"/>
                  </button>
                  <button
                    aria-label="next"
                    className="cursor-pointer min-w-10 min-h-10 rounded-full border border-gray-300 flex items-center justify-center"
                  >
                    <ArrowRight className="min-w-4 min-h-4 text-gray-600"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;

