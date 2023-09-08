import React from "react";
import { Link } from "react-router-dom";
import {
  PiEnvelopeFill,
  PiWhatsappLogoFill,
  PiPhoneFill,
} from "react-icons/pi";

const CTASection = () => {
  return (
    <section className="section mb-[3rem]">
      <div className="py-[2rem] bg-lightGrayCTA sm:py-[3rem] ">
        <div className="container flex justify-center items-center">
          <div className="flex flex-col justify-between items-center gap-[2rem] w-full sm:flex-row sm:gap-[0.75rem] lg:gap-[2rem]">
            <div className="flex flex-col justify-between items-center gap-[2rem] sm:flex-col-reverse lg:flex-row sm:w-8/12 lg:w-9/12 sm:justify-start sm:items-start lg:items-center lg:justify-between sm:gap-[2rem] lg:gap-0">
              <div className="flex items-center gap-2 text-h2 text-lightThemeColor lg:w-3/12 sm:gap-3 lg:gap-2">
                <span className="border-r-[1px] border-lightThemeColor pr-[0.5rem] sm:pr-[0.65rem] lg:pr-[0.5rem]">
                  <PiEnvelopeFill />
                </span>
                <span className="border-r-[1px] border-lightThemeColor pr-[0.5rem] sm:pr-[0.65rem] lg:pr-[0.5rem]">
                  <PiWhatsappLogoFill />
                </span>
                <span className="">
                  <PiPhoneFill />
                </span>
              </div>
              <div className="lg:w-9/12  ">
                <p className="text-default font-poppinsRegular text-lightThemeColor font-mediumWeight text-center tracking-wide leading-6 max-w-[490px] sm:leading-8 sm:text-h3 sm:text-start lg:text-start">
                  Would you like to get our services, and updates on the
                  special, popular and new properties?
                </p>
              </div>
            </div>
            <div className="flex sm:justify-end sm:items-end lg:w-3/12 sm:w-4/12 ">
              <Link
                to="/contact"
                className="bg-darkThemeColor px-[1.75rem] py-[1rem] rounded-md text-bodyColor font-poppinsRegular hover:bg-black"
              >
                Talk to Us NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
