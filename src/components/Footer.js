import React from "react";
import {
  PiWhatsappLogo,
  PiLinkedinLogo,
  PiTwitterLogo,
  PiFacebookLogo,
  PiPhone,
  PiEnvelope,
  PiMapPin,
} from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      {/* place text color at the top, on footer tag */}
      <div className="bg-lightThemeColor flex flex-col gap-[2rem]">
        <div className="container py-[2rem] border-b-[1.5px] border-gray-100">
          <div className="flex flex-col justify-between gap-[1rem] w-full sm:gap-0 sm:flex-row">
            <div className="flex justify-center items-center w-full sm:w-1/2">
              <span className="text-h3 text-bodyColor font-poppinsSemibold sm:text-h2">
                NyumbaHub
              </span>
            </div>
            <div className="flex justify-center items-center w-full sm:justify-end sm:items-end sm:w-1/2">
              <span className="text-bodyColor bg-ctaColor py-[0.8rem] px-[1.5rem] rounded-md font-poppinsRegular font-mediumWeight tracking-wide">
                See the NyumbaHub API
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-12 items-start gap-2">
            <div className="flex flex-col space-y-[0.5rem] items-start col-span-6 sm:col-span-3">
              <span className="font-poppinsRegular text-bodyColor">
                Quick Links
              </span>
              <div className="flex flex-col space-y-[0.25rem] font-poppinsLight text-lightGrayCTA text-smaller sm:text-small sm:pb-[1rem] md:pb-0">
                <span>Home</span>
                <span>Contact</span>
                <span>All Properties</span>
                <span>Wishlist</span>
                <span>Compare</span>
                <span>Account</span>
              </div>
            </div>

            <div className="flex flex-col space-y-[0.5rem] items-start col-span-6 sm:col-span-4 md:col-span-3">
              <span className="font-poppinsRegular text-bodyColor">
                Type Properties
              </span>
              <div className="flex flex-col space-y-[0.25rem] font-poppinsLight text-lightGrayCTA text-smaller sm:text-small pb-[1rem] sm:pb-0">
                <span>Apartment</span>
                <span>Maisonette</span>
                <span>Villa</span>
                <span>Airbnb</span>
                <span>Mansion</span>
                <span>Bungalow</span>
              </div>
            </div>
            <div className="flex flex-col space-y-[0.5rem] items-start col-span-6 sm:col-span-4 md:col-span-3">
              <span className="font-poppinsRegular text-bodyColor">
                Category Properties
              </span>
              <div className="flex flex-col space-y-[0.25rem] font-poppinsLight text-lightGrayCTA text-smaller sm:text-small">
                <span>Featured</span>
                <span>For Rent</span>
                <span>For Sale</span>
                <span>New Listings</span>
                <span>Top Seller</span>
                <span>Reduced Price</span>
              </div>
            </div>
            <div className="flex flex-col space-y-[0.5rem] items-start col-span-6 sm:col-span-4 md:col-span-3">
              <span className="font-poppinsRegular text-bodyColor">
                Contact Us
              </span>
              <div className="flex flex-col space-y-[1.5rem] text-bodyColor font-poppinsLight text-smaller sm:text-small">
                <span className="font-poppinsLight text-ctaColor">
                  Write me a Message
                </span>
                {/* <div className="flex space-x-3 items-center">
                  <span className="text-default sm:text-h3">
                    <PiMapPin />
                  </span>
                  <span>Place, Town, County, Kenya</span>
                </div> */}

                <div className="flex flex-col space-y-[1rem]">
                  <div className="flex space-x-3 items-center">
                    <span className="text-default sm:text-h3">
                      <PiPhone />
                    </span>
                    <span className="tracking-wide">
                      <a href="tel:254700119134">+254700119134</a>
                    </span>
                  </div>
                  <div className="flex flex-col space-y-[0.25rem]">
                    <div className="flex space-x-3 items-center">
                      <span className="text-default sm:text-h3">
                        <PiEnvelope />
                      </span>
                      <span className="tracking-wide">
                        <a href="mailto:pptrgitonga@gmail.com">
                          pptrgitonga@gmail.com
                        </a>
                      </span>
                    </div>
                    <div className="flex space-x-3 items-center">
                      <span className="text-default sm:text-h3">
                        <PiEnvelope />
                      </span>
                      <span className="tracking-wide">
                        <a href="mailto:lifencreatives@gmail.com">
                          lifencreatives@gmail.com
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-[1rem] text-default text-bodyColor pb-[1rem] sm:pb-0 sm:text-h3">
                  <span>
                    <PiLinkedinLogo />
                  </span>
                  <span>
                    <PiTwitterLogo />
                  </span>
                  <span>
                    <PiWhatsappLogo />
                  </span>
                  <span>
                    <PiFacebookLogo />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-darkThemeColor">
          <div className="container pt-[2rem] pb-[3rem] text-bodyColor text-smaller sm:text-small">
            <div className="flex flex-col-reverse justify-between gap-[1rem] w-full sm:gap-0 sm:flex-row">
              <div className="flex justify-center items-center sm:justify-start sm:items-start w-full sm:w-2/3">
                <span>
                  &#169; 2023{" "}
                  <span className="text-ctaColor">Lifen Creatives</span>. All
                  Rights Reserved
                </span>
              </div>
              <div className="flex justify-center items-center w-full sm:justify-end sm:items-end sm:w-1/3">
                <div className="flex justify-between items-center w-full">
                  <span>Terms of Service</span>
                  <span>Privacy Policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
