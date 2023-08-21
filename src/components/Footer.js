import React from "react";
import { Link } from "react-router-dom";
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
                <a href="https://nyumbahub.netlify.app">
                  See the NyumbaHub API
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-12 items-start gap-2">
            <div className="flex flex-col space-y-[0.5rem] items-start col-span-6 sm:col-span-3">
              <span className="font-poppinsRegular text-bodyColor font-mediumWeight">
                Quick Links
              </span>
              <div className="flex flex-col space-y-[0.25rem] font-poppinsLight text-lightGrayCTA text-smaller sm:text-small sm:pb-[1rem] md:pb-0">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/all-properties">All Properties</Link>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/compare">Compare</Link>
                <Link to="/register">Account</Link>
              </div>
            </div>

            <div className="flex flex-col space-y-[0.5rem] items-start col-span-6 sm:col-span-4 md:col-span-3">
              <span className="font-poppinsRegular text-bodyColor font-mediumWeight">
                Type Properties
              </span>
              <div className="flex flex-col space-y-[0.25rem] font-poppinsLight text-lightGrayCTA text-smaller sm:text-small pb-[1rem] sm:pb-0">
                <Link to="/type/64b23dfd3567c004de3bf49e">Apartment</Link>
                <Link to="/type/64b23de73567c004de3bf498">Maisonette</Link>
                <Link to="/type/64b23df23567c004de3bf49b">Villa</Link>
                <Link to="/">Airbnb</Link>
                <Link to="/type/64afeefd919371933061ddb4">Mansion</Link>
                <Link to="/type/64b23bd62051ecc3babb05fb">Bungalow</Link>
              </div>
            </div>
            <div className="flex flex-col space-y-[0.5rem] items-start col-span-6 sm:col-span-4 md:col-span-3">
              <span className="font-poppinsRegular text-bodyColor font-mediumWeight">
                Category Properties
              </span>
              <div className="flex flex-col space-y-[0.25rem] font-poppinsLight text-lightGrayCTA text-smaller sm:text-small">
                <Link to="/category/64b23f843567c004de3bf4c9">Featured</Link>
                <Link to="/category/64b23f6f3567c004de3bf4c3">For Rent</Link>
                <Link to="/category/64b23f783567c004de3bf4c6">For Sale</Link>
                <Link to="/category/64b23f8f3567c004de3bf4cc">
                  New Listings
                </Link>
                <Link to="/category/64b23fa93567c004de3bf4d2">Top Seller</Link>
                <Link to="/category/64b23f983567c004de3bf4cf">
                  Reduced Price
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-[0.5rem] items-start col-span-6 sm:col-span-4 md:col-span-3">
              <span className="font-poppinsRegular text-bodyColor font-mediumWeight">
                Contact Us
              </span>
              <div className="flex flex-col space-y-[1.5rem] text-bodyColor font-poppinsLight text-smaller sm:text-small">
                <Link to="/contact" className="font-poppinsLight text-ctaColor">
                  Write me a Message
                </Link>
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
                <div className="flex items-center space-x-[1rem] text-h3 text-bodyColor pb-[1rem] sm:pb-0 sm:text-h2">
                  <span>
                    <a href="https://www.linkedin.com/in/petergitonga">
                      <PiLinkedinLogo />
                    </a>
                  </span>
                  <span>
                    <a href="https://twitter.com/ptrgitonga">
                      <PiTwitterLogo />
                    </a>
                  </span>
                  <span>
                    <a href="https://wa.me/254700119134">
                      <PiWhatsappLogo />
                    </a>
                  </span>
                  <span>
                    <a href="https://www.facebook.com/pptrgitonga">
                      <PiFacebookLogo />
                    </a>
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
                  <Link to="/terms-of-service">Terms of Service</Link>
                  <Link to="/privacy-policy">Privacy Policy</Link>
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
