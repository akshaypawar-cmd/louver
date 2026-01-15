import { useState, type FC } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { testimonials } from "@mockdata";

const UserProfile: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasData = testimonials.length > 0;
  const currentTestimonial = hasData ? testimonials[currentIndex] : null;
  const arrowBtnClass ="hidden md:flex size-11 border border-gray-300 bg-white shadow-md text-gray-600 rounded-full items-center justify-center"
  const iconBtnClass ="w-11 h-11 text-gray-600 border-gray-300 bg-white shadow-md rounded-full flex items-center justify-center"

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className="max-w-7xl mx-auto flex flex-col items-center bg-neutral-100 justify-center">
      <button className="border mt-2 border-gray-400 text-black px-3 py-2 rounded-full text-sm font-semibold">
        Testimonial
      </button>

      <p className="mt-5 font-semibold md:text-2xl text-center">
        Here is what our Clients
        <span className="block md:inline"> are saying about us </span>
      </p>

      <div className="mt-12 mb-10 p-3 flex flex-col items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2">
          <button 
            aria-label="previous"
            className={arrowBtnClass}
            onClick={handlePrev}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="bg-white rounded-2xl shadow-md  max-w-3xl px-6 md:p-14 p-10 flex md:flex-row flex-col items-center gap-5">
            {hasData ? (
              <>
                <img
                  src={currentTestimonial!.image}
                  alt={currentTestimonial!.name}
                  className="w-24 h-24 rounded-full object-cover shadow"
                />

                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900">
                    {currentTestimonial!.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 leading-relaxed line-clamp-4">
                    {currentTestimonial!.message}
                  </p>

                  <p className="text-xs text-gray-400 mt-3">
                    {currentTestimonial!.date}
                  </p>
                </div>
              </>
            ) : (
              <p className="text-gray-500 font-medium text-center w-full">
                No Data Found
              </p>
            )}
          </div>

          <button
            aria-label="next"
            className={arrowBtnClass}
            onClick={handleNext}
          >
            <ArrowRight className="h-5 w-6" />
          </button>
        </div>

        <div className="flex md:hidden mt-2 gap-40">
          <button
            aria-label="previous"
            className={iconBtnClass}
            onClick={handlePrev}
          >
            <ArrowLeft className="h-5 w-6" />
          </button>

          <button
            aria-label="next"
            className={iconBtnClass}
            onClick={handleNext}
          >
            <ArrowRight className="h-5 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
