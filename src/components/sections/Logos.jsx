import React from "react";
import { logos } from "../../utils/content";

const Logos = () => {
  return (
    <section className="bg-gradient-to-top">
      <div className="m-auto max-w-[90rem] px-24 py-28 max-xl:px-16 max-xl:py-22 max-lg:px-8 max-md:px-6 max-md:py-12">
        <p className="text-primary-50 m-auto mb-20 text-center text-xl/loose max-lg:text-lg/8 max-sm:pb-6">
          Organizations powered by{" "}
          <span className="font-bold tracking-tight">NoteFlow</span>
        </p>
        <div className="flex flex-col gap-y-16 max-md:flex-row max-md:items-center max-md:justify-around max-sm:gap-x-14">
          <ul className="flex flex-wrap justify-between max-md:flex-col max-md:gap-y-16">
            {logos.slice(0, 4).map((logo) => {
              return (
                <li key={logo.id}>
                  <img
                    className="h-10 max-xl:h-8 max-lg:h-7"
                    src={logo.src}
                    alt={logo.alt}
                  />
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-wrap justify-between max-md:flex-col max-md:gap-y-16">
            {logos.slice(4).map((logo) => {
              return (
                <li key={logo.id}>
                  <img
                    className="h-10 max-xl:h-8 max-lg:h-7"
                    src={logo.src}
                    alt={logo.alt}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Logos;
