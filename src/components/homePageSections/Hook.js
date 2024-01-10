import { Link } from "react-router-dom";

import FadeInAnimation from "../FadeInAnimation";

const Hook = () => {
  return (
    <FadeInAnimation>
      <section className="custom_container pt-[4rem] px-[0.5rem] lg1023:px-[1.5rem]">
        <div className="grid grid-cols-1 gap-y-1 items-center w-full md480:grid-cols-6 md480:gap-x-1 lg1023:gap-x-2">
          <div className="hook_card bg-gray-300 text-textColor">
            <div className="hook_card-contentbuttonwrapper">
              <div className="hook_card-contentwrapper">
                <span className="font-poppinsLight text-h3 text-bodyColor">
                  NyumbaHub
                </span>
                <div className="flex_col_center space-y-[0.5rem] w-full">
                  <div className="flex_col space-y-[0.5rem] mb-[1rem]">
                    <span className="font-poppinsSemibold text-default tracking-wider">
                      Support 24/7
                    </span>
                    <div className="flex_center w-full">
                      <span className="w-[70px] py-[1.5px] rounded-full bg-ctaColor" />
                    </div>
                  </div>
                  <p className="font-poppinsLight text-center max-w-[300px] tracking-wide">
                    Always Available When and Where You Need Us
                  </p>
                </div>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="hook_card-button border-textColor hover:bg-textColor hover:text-gray-300"
                >
                  Try Our Service
                </Link>
              </div>
            </div>
          </div>

          <div className="hook_card bg-lightThemeColor text-darkLightGrayCTA">
            <div className="hook_card-contentbuttonwrapper">
              <div className="hook_card-contentwrapper">
                <span className="font-poppinsLight text-h3 text-bodyColor">
                  NyumbaHub
                </span>
                <div className="flex_col_center space-y-[0.5rem] w-full">
                  <div className="flex_col space-y-[0.5rem] mb-[1rem]">
                    <span className="font-poppinsSemibold text-default tracking-wider">
                      Trust Culture
                    </span>
                    <div className="flex_center w-full">
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
                  className="hook_card-button border-darkLightGrayCTA hover:bg-darkLightGrayCTA hover:text-lightThemeColor"
                >
                  Sell, Rent or Buy
                </Link>
              </div>
            </div>
          </div>

          <div className="hook_card bg-darkBlueColor">
            <div className="hook_card-contentbuttonwrapper">
              <div className="hook_card-contentwrapper">
                <span className="font-poppinsLight text-h3 text-bodyColor">
                  NyumbaHub
                </span>
                <div className="flex_col_center space-y-[0.5rem]">
                  <div className="flex_col space-y-[0.5rem] mb-[1rem]">
                    <span className="font-poppinsSemibold text-default tracking-wider text-white/90">
                      Other Services
                    </span>
                    <div className="flex_center w-full">
                      <span className="w-[70px] py-[1.5px] rounded-full bg-ctaColor" />
                    </div>
                  </div>
                  <p className="font-poppinsLight text-center max-w-[300px] tracking-wide text-white/80">
                    Lifen Creatives Offers a Vast Range of Services.
                  </p>
                </div>
              </div>
              <div>
                <a
                  href="https://pgitonga.vercel.app"
                  className="hook_card-button text-white/80 border-lightGrayCTA rounded-md hover:text-darkBlueColor hover:bg-white/80"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInAnimation>
  );
};

export default Hook;
