import React from "react";
import Logo from "../icons/Logo";
import { footerCols } from "../../utils/content";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-bottom">
      <div className="m-auto flex max-w-[90rem] justify-between px-24 py-30 max-xl:px-16 max-xl:py-20 max-lg:grid max-lg:gap-y-18 max-lg:px-8 max-md:px-6 max-sm:pb-16">
        <div>
          <a href="#" className="flex items-center gap-x-3">
            <Logo
              className="stroke-primary-500"
              width={4.5}
              alt="Noteflow Logo Icon"
            />
            <p className="text-primary-50 text-xl font-bold tracking-tight">
              NoteFlow
            </p>
          </a>
        </div>

        <div className="grid grid-cols-[repeat(4,max-content)] gap-x-24 max-xl:gap-x-18 max-lg:gap-x-20 max-sm:grid-cols-2 max-sm:gap-y-16">
          {footerCols.map((col) => (
            <div key={col.id}>
              <p className="text-primary-50 mb-8 text-xl/loose font-semibold max-sm:mb-4">
                {col.category}
              </p>
              <ul className="flex flex-col gap-y-4">
                {col.links.map((link, i) => (
                  <li key={i} className="cursor-pointer">
                    <a
                      href="#"
                      className="text-primary-50 hover:text=primary-500 transition-properties text-md/8 font-light max-xl:text-base/loose"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
