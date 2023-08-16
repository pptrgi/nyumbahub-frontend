import React from "react";
import {
  PiEnvelopeFill,
  PiWhatsappLogoFill,
  PiPhoneFill,
} from "react-icons/pi";

const CTASection = () => {
  return (
    <div className="section mb-[10rem]">
      <div className="py-[2rem] bg-lightGrayCTA sm:py-[3.5rem] ">
        <div className="container flex justify-center items-center">
          <div className="flex flex-col justify-between items-center w-full h-[180px] sm:flex-row sm:h-auto md:h-auto lg:h-auto xl:h-auto">
            <div className="flex items-center gap-2 text-h2 font-semibolded text-lightThemeColor">
              <span className="border-r-[1px] border-thirtyColor pr-[0.5rem]">
                <PiEnvelopeFill />
              </span>
              <span className="border-r-[1px] border-thirtyColor pr-[0.5rem]">
                <PiWhatsappLogoFill />
              </span>
              <span className="">
                <PiPhoneFill />
              </span>
            </div>
            <p className="text-default font-poppinsRegular text-titleColor text-center sm:text-left sm:max-w-[200px] md:max-w-[300px] lg:max-w-[300px] xl:max-w-[300px]">
              Would you like to get our services and updates on the special,
              popular or new properties?
            </p>
            <span className="bg-darkThemeColor px-[1.75rem] py-[1rem] rounded-md text-bodyColor hover:bg-darkLightGrayCTA">
              Talk to Us NOW
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
