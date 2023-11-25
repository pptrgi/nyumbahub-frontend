import { Link } from "react-router-dom";
import {
  PiEnvelopeFill,
  PiWhatsappLogoFill,
  PiPhoneFill,
} from "react-icons/pi";

import FadeInAnimation from "../FadeInAnimation";

const CTASection = () => {
  return (
    <FadeInAnimation>
      <section className="my-[4rem] lg1023:mx-[2rem]">
        <div className="custom_container py-[2rem] px-[0.75rem] bg-lightGrayCTA md480:py-[3rem] lg1023:py-[3.5rem] lg1129:py-[3.75rem] md480:px-[1.5rem] lg1023:px-[2.25rem] lg1120:px-[2.5rem]">
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-between items-center gap-[2rem] w-full md480:flex-row md480:gap-[0.75rem] lg1023:gap-[2rem]">
              <div className="flex flex-col justify-between items-center gap-[2rem] md480:flex-col-reverse lg1023:flex-row md480:w-8/12 lg1023:w-9/12 md480:justify-start md480:items-start lg1023:items-center lg1023:justify-between md480:gap-[2rem] lg1023:gap-0">
                <div className="flex items-center gap-2 text-h2 text-lightThemeColor lg1023:w-3/12 md480:gap-3 lg1023:gap-2">
                  <span className="border-r-[1px] border-lightThemeColor pr-[0.5rem] md480:pr-[0.65rem] lg1023:pr-[0.5rem]">
                    <PiEnvelopeFill />
                  </span>
                  <span className="border-r-[1px] border-lightThemeColor pr-[0.5rem] md480:pr-[0.65rem] lg1023:pr-[0.5rem]">
                    <PiWhatsappLogoFill />
                  </span>
                  <span>
                    <PiPhoneFill />
                  </span>
                </div>
                <div className="lg1023:w-9/12  ">
                  <p className="text-default font-poppinsRegular text-lightThemeColor font-mediumWeight text-center tracking-wide leading-6 max-w-[490px] md480:leading-8 md480:text-h3 md480:text-start lg1023:text-start">
                    Would you like to get our services, and updates on the
                    special, popular and new properties?
                  </p>
                </div>
              </div>
              <div className="flex sm:justify-end md480:items-end lg1023:w-3/12 md480:w-4/12 ">
                <Link
                  to="/contact"
                  className="bg-darkThemeColor px-[1.75rem] py-[1rem] rounded-md text-bodyColor font-poppinsRegular truncate hover:bg-black"
                >
                  Talk to Us NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInAnimation>
  );
};

export default CTASection;
