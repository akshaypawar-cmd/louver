import type { FC } from "react";
import { Send } from "lucide-react";

import membershipImg from "@assets/Dum_girl.jpg";

const UserMembership: FC = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <section className="bg-black h-1/3 mb-10 m-4 flex items-center justify-center rounded-2xl p-2">
          <div className="w-full flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <img
                src={membershipImg}
                alt="Membership"
                className="w-full h-80 object-cover rounded-3xl"
              />
            </div>

            <div className="w-full">
              <div className="flex gap-4 mb-6">
                <button className="px-5 py-2 md:py-4 border border-white text-white rounded-full text-xm font-medium">
                  Membership
                </button>
                <button className="px-5 py-3 bg-gray-200 text-black rounded-full text-sm font-medium">
                  Newsletter
                </button>
              </div>

              <div className="mb-6 w-full">
                <h2 className="text-xl md:text-4xl font-bold text-white mb-2">
                  Get the Last Updates,Special Offers, and Exclusive Event
                  Invitations!
                </h2>
              </div>

              <div className="relative w-full md:w-1/2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 pr-14 rounded-full bg-gray-900 text-white outline-none"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-blue-500 hover:opacity-95 transition"
                  aria-label="send email"
                >
                  <Send className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserMembership;
