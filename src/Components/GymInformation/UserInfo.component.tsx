import { type FC } from "react";

import girl from "@assets/girl_Gym.jpg";
import { formFields } from "../../mock-data/userSec";

const UserInfo: FC = () => {
  
  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div className="rounded-2xl overflow-hidden flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 flex items-center justify-between p-4 md:p-8 order-2 md:order-1">
            <img
              src={girl}
              alt="Gym"
              className="w-full h-72 object-cover shadow-2xl"
            />
          </div>

          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col md:mr-10 md:flex-col justify-center order-1 md:order-2">
            <h2 className="md:text-3xl text-4xl font-light text-start text-gray-900 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-xs text-start mb-6">
              Reach out and we'll get in touch within 24 hours.
            </p>

            <form className="space-y-4">
              {formFields.map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full px-10 py-3 border border-gray-200 rounded-full outline-none"
                />
              ))}

              <div className="pt-2">
                <button
                  type="submit"
                  className="text-base font-semibold w-full bg-sky-200 text-gray-900 px-6 py-3 rounded-full cursor-pointer"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserInfo;
