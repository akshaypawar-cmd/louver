import type { FC } from "react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { testimonials } from "../../mockData";

const UserProfile: FC = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const hasData = testimonials.length > 0;
  const currentTestimonial = hasData ? testimonials[currentIndex] : null;

  const arrowBtnClass ="hidden md:flex size-11 border border-gray-600 text-gray-600 rounded-full items-center justify-center";
  const iconBtnClass ="w-11 h-11 border border-gray-600 text-gray-600 rounded-full flex items-center justify-center";

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
    <div className="md:max-w-4xl mx-auto flex flex-col items-center justify-center mt-6">
      <button className="border border-gray-100 text-black px-3 py-2 rounded-full text-sm font-semibold">
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
          <div className="rounded-2xl md:w-3xl md:px-10 md:py-4 flex flex-col md:flex-row bg-gray-100 items-center gap-4 p-4 h-64 md:h-52">
            {hasData ? (
              <>
                <img
                  src={currentTestimonial!.image}
                  alt={currentTestimonial!.name}
                  className="w-24 h-24 md:w-20 md:h-20 rounded-full object-cover shadow-lg"
                />

                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {currentTestimonial!.name}
                  </h3>

                  <p className="text-sm text-gray-600 mt-1 line-clamp-4">
                    {currentTestimonial!.message}
                  </p>

                  <p className="text-xs text-black mt-2">
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
