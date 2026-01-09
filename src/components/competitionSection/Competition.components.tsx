import { type FC } from "react";
import { ArrowUpRight } from "lucide-react";

import imgCom from "@assets/Competition.jpg";

const Competition: FC = () => {
  const commonButtonClass ="px-4 py-2 text-xs md:p-2 rounded-full font-medium border border-gray-500";

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="flex flex-wrap gap-3">
            <button className={`${commonButtonClass} bg-sky-200 text-black`}>
              Competition
            </button>
            <button className={commonButtonClass}>Training</button>
            <button className={commonButtonClass}>Friendly Match</button>
          </div>

          <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-xl">
            Experience the best in Courts, Fields, and More
          </h2>

          <p className="text-gray-600 max-w-md">
            Our state-of-art sports facilities offer a variety of courts,
            fields, including tennis, basketball and football, and designed to
            cater to both casual players and competitive athletes.
          </p>

          <button className="bg-gray-900 text-white px-5 py-2 rounded-full w-fit flex items-center gap-2 font-normal">
            Book Now
            <ArrowUpRight className="size-5" />
          </button>
        </div>

        <div className="md:col-span-7">
          <img
            src={imgCom}
            alt="Sports"
            className="w-full md:h-96 min-h-64 object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Competition;
