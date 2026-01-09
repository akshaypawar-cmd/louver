import { type FC, useRef } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

import type { FacilityCard } from "./Facility.types";
import { cardsData } from "@mockdata";


const Facility: FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -280,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 280,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="flex flex-col md:flex-row items-start justify-between mb-10 gap-6">
        <div className="flex flex-col md:flex-row items-start gap-5">
          <span className="inline-block px-4 py-1.5 rounded-full border font-normal text-sm">
            Facilities
          </span>

          <h1 className="font-semibold text-3xl text-gray-900">
            Explore Our Facilities
          </h1>
        </div>

        <button className="bg-gray-950 text-white px-3 py-2 rounded-full flex mr-2 items-center gap-2 font-normal">
          View All
          <ChevronRight />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="gap-3 overflow-x-auto hide-scrollbar flex snap-mandatory"
      >
        {cardsData.map((item: FacilityCard, index: number) => (
          <div key={index} className="relative min-w-72 max-w-80 snap-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full rounded-xl object-cover"
            />

            <button className="absolute top-4 left-4 px-3 py-2 rounded-full border text-white text-xs font-medium">
              {item.title}
            </button>

            <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/50 rounded-xl flex justify-between items-center">
              <p className="text-white text-sm">{item.desc}</p>

              {index === 0 && (
                <button className="p-3 rounded-full bg-white/20">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col md:flex-row gap-4 ml-3 mt-10 w-full">
          <div className="order-1 md:order-2 w-full text-end md:text-end">
            <h1 className="text-sm font-light leading-5 text-gray-500">
              Book a court for focused practice, Team drills,
              <span className="block">
                or private coaching, and take your game to the next level
              </span>
            </h1>
          </div>

          <div className="order-2 md:order-1 flex gap-4 justify-end md:justify-start">
            <button
              aria-label="previous"
              className="md:min-w-11 md:min-h-11 h-8 w-8 rounded-full border flex items-center justify-center"
              onClick={scrollLeft}
            >
              <ArrowLeft className="size-5" />
            </button>

            <button
              aria-label="next"
              className="md:min-w-11 md:min-h-11 h-8 w-8 rounded-full border flex items-center justify-center"
              onClick={scrollRight}
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
