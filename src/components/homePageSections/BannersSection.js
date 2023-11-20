import { Link } from "react-router-dom";

import FadeInAnimation from "../FadeInAnimation";

const BannersSection = () => {
  return (
    <FadeInAnimation>
      <section className="pt-[4rem] px-[0.5rem] md800:px-[1.5rem]">
        <div className="flex flex-col space-y-1 items-center md480:flex-row md480:w-full md480:space-y-1 md480:space-x-1 lg1023:space-x-2">
          <div className="bg-gray-300 text-textColor flex justify-center items-center w-full py-[1.75rem] px-[0.5rem] h-[250px] md480:py-[2rem] md800:h-[280px] md480:w-1/3">
            <div className="flex flex-col justify-between items-center w-full h-full">
              <div className="flex flex-col justify-center items-center space-y-[1.5rem]">
                <span className="font-poppinsLight text-h3 text-bodyColor">
                  NyumbaHub
                </span>
                <div className="flex flex-col space-y-[0.5rem] justify-center items-center w-full">
                  <div className="flex flex-col space-y-[0.5rem] mb-[1rem]">
                    <span className="font-poppinsSemibold text-default tracking-wider">
                      Support 24/7
                    </span>
                    <div className="flex justify-center items-center w-full">
                      <span className="w-[70px] py-[1.5px] rounded-full bg-ctaColor" />
                    </div>
                  </div>
                  <p className="font-poppinsLight text-center max-w-[300px] tracking-wide">
                    Always There When and Where You Need Us
                  </p>
                </div>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="px-[2rem] py-[0.75rem] border-[1.8px] border-textColor rounded-md font-poppinsLight hover:bg-textColor hover:text-gray-300 md480:px-[1.25rem] md800:px-[1.75rem] lg1023:px-[2rem]"
                >
                  Try Our Service
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-lightThemeColor text-darkLightGrayCTA flex justify-center items-center w-full py-[1.75rem] px-[0.5rem] h-[280px] md480:py-[2rem] md800:h-[300px] md480:w-1/3">
            <div className="flex flex-col justify-between items-center w-full h-full">
              <div className="flex flex-col justify-center items-center space-y-[1.5rem]">
                <span className="font-poppinsLight text-h3 text-bodyColor">
                  NyumbaHub
                </span>
                <div className="flex flex-col space-y-[0.5rem] justify-center items-center w-full">
                  <div className="flex flex-col space-y-[0.5rem] mb-[1rem]">
                    <span className="font-poppinsSemibold text-default tracking-wider">
                      Trust Culture
                    </span>
                    <div className="flex justify-center items-center w-full">
                      <span className="w-[70px] py-[1.5px] rounded-full bg-ctaColor" />
                    </div>
                  </div>
                  <p className="font-poppinsLight text-center max-w-[300px] tracking-wide">
                    Genuine Non-Existent Properties and Qualified Buyers
                  </p>
                </div>
              </div>
              <div>
                <Link
                  to="/all-properties"
                  className="px-[2rem] py-[0.75rem] border-[1.8px] border-darkLightGrayCTA rounded-md font-poppinsLight hover:bg-darkLightGrayCTA hover:text-lightThemeColor md480:px-[1.25rem] md800:px-[1.75rem] lg1023:px-[2rem]"
                >
                  Sell, Rent or Buy
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-textColor text-lightGrayCTA flex justify-center items-center w-full py-[1.75rem] px-[0.5rem] h-[250px] md480:py-[2rem] md800:h-[280px] md480:w-1/3">
            <div className="flex flex-col justify-between items-center w-full h-full">
              <div className="flex flex-col justify-center items-center space-y-[1.5rem]">
                <span className="font-poppinsLight text-h3 text-bodyColor">
                  NyumbaHub
                </span>
                <div className="flex flex-col space-y-[0.5rem] justify-center items-center w-full">
                  <div className="flex flex-col space-y-[0.5rem] mb-[1rem]">
                    <span className="font-poppinsSemibold text-default tracking-wider">
                      Other Services
                    </span>
                    <div className="flex justify-center items-center w-full">
                      <span className="w-[70px] py-[1.5px] rounded-full bg-ctaColor" />
                    </div>
                  </div>
                  <p className="font-poppinsLight text-center max-w-[300px] tracking-wide">
                    Lifen Creatives Offers a Vast Range of Services.
                  </p>
                </div>
              </div>
              <div>
                <span className="px-[2rem] py-[0.75rem] border-[1.8px] border-lightGrayCTA rounded-md font-poppinsLight hover:text-textColor hover:bg-lightGrayCTA md480:px-[1.25rem] md800:px-[1.75rem] lg1023:px-[2rem]">
                  <a href="https://ptrgitonga.vercel.app#services">
                    Explore Services
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInAnimation>
  );
};

export default BannersSection;
