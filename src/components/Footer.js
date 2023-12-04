import { Link } from "react-router-dom";
import {
  PiWhatsappLogo,
  PiLinkedinLogo,
  PiFacebookLogo,
  PiPhone,
  PiEnvelope,
} from "react-icons/pi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

import FadeInAnimation from "./FadeInAnimation";

const Footer = () => {
  return (
    <FadeInAnimation>
      <footer className="flex flex-col">
        <div className="bg-lightThemeColor flex flex-col gap-[2rem]">
          <div className="custom_container py-[2rem] border-b-[1.5px] border-gray-100 lg1023:w-full">
            <div className="flex flex-col justify-between gap-[1rem] md480:gap-0 md480:flex-row">
              <div className="flex justify-center items-center w-full md480:w-1/2">
                <span className="text-h3 text-bodyColor font-poppinsSemibold md480:text-h2">
                  NyumbaHub
                </span>
              </div>
              <div className="flex justify-center items-center w-full md480:justify-end md480:items-end md480:w-1/2">
                <div className="group">
                  <div className="flex space-x-2 items-center text-bodyColor bg-ctaColor py-[0.8rem] px-[1.5rem] rounded-md font-poppinsRegular font-mediumWeight tracking-wide group-hover:bg-bodyColor group-hover:text-ctaColor">
                    <span>
                      <a href="https://nyumbahub.netlify.app">
                        Visit NyumbaHub API
                      </a>
                    </span>
                    <span>
                      <FaExternalLinkAlt />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom_container">
            <div className="grid grid-cols-12 items-start gap-2">
              <div className="flex flex-col space-y-[0.5rem] items-start col-span-6 md480:col-span-3">
                <span className="font-poppinsRegular text-bodyColor font-mediumWeight">
                  Quick Links
                </span>
                <div className="flex flex-col space-y-[0.25rem] font-poppinsLight text-lightGrayCTA text-smaller md480:text-small md480:pb-[1rem] md800:pb-0">
                  <Link to="/" className="hover:text-gray-400">
                    Home
                  </Link>
                  <Link to="/contact" className="hover:text-gray-400">
                    Contact
                  </Link>
                  <Link to="/all-properties" className="hover:text-gray-400">
                    All Properties
                  </Link>
                  <Link to="/wishlist" className="hover:text-gray-400">
                    Wishlist
                  </Link>
                  <Link to="/compare" className="hover:text-gray-400">
                    Compare
                  </Link>
                  <Link to="/register" className="hover:text-gray-400">
                    Account
                  </Link>
                </div>
              </div>

              <div className="flex flex-col space-y-[0.5rem] items-start col-span-6 md480:col-span-4 md800:col-span-3">
                <span className="font-poppinsRegular text-bodyColor font-mediumWeight">
                  Property Types
                </span>
                <div className="flex flex-col space-y-[0.25rem] font-poppinsLight text-lightGrayCTA pb-[1rem] text-smaller md480:text-small md480:pb-0">
                  <Link
                    to="/type/64b23dfd3567c004de3bf49e"
                    className="hover:text-gray-400"
                  >
                    Apartment
                  </Link>
                  <Link
                    to="/type/64b23de73567c004de3bf498"
                    className="hover:text-gray-400"
                  >
                    Maisonette
                  </Link>
                  <Link
                    to="/type/64b23df23567c004de3bf49b"
                    className="hover:text-gray-400"
                  >
                    Villa
                  </Link>
                  <Link to="/" className="hover:text-gray-400">
                    Airbnb
                  </Link>
                  <Link
                    to="/type/64afeefd919371933061ddb4"
                    className="hover:text-gray-400"
                  >
                    Mansion
                  </Link>
                  <Link
                    to="/type/64b23bd62051ecc3babb05fb"
                    className="hover:text-gray-400"
                  >
                    Bungalow
                  </Link>
                </div>
              </div>
              <div className="flex flex-col space-y-[0.5rem] items-start col-span-6 md480:col-span-4 md800:col-span-3">
                <span className="font-poppinsRegular text-bodyColor font-mediumWeight">
                  Property Categories
                </span>
                <div className="flex flex-col space-y-[0.25rem] font-poppinsLight text-lightGrayCTA text-smaller md480:text-small">
                  <Link
                    to="/category/64b23f843567c004de3bf4c9"
                    className="hover:text-gray-400"
                  >
                    Featured
                  </Link>
                  <Link
                    to="/category/64b23f6f3567c004de3bf4c3"
                    className="hover:text-gray-400"
                  >
                    For Rent
                  </Link>
                  <Link
                    to="/category/64b23f783567c004de3bf4c6"
                    className="hover:text-gray-400"
                  >
                    For Sale
                  </Link>
                  <Link
                    to="/category/64b23f8f3567c004de3bf4cc"
                    className="hover:text-gray-400"
                  >
                    New Listings
                  </Link>
                  <Link
                    to="/category/64b23fa93567c004de3bf4d2"
                    className="hover:text-gray-400"
                  >
                    Top Seller
                  </Link>
                  <Link
                    to="/category/64b23f983567c004de3bf4cf"
                    className="hover:text-gray-400"
                  >
                    Reduced Price
                  </Link>
                </div>
              </div>
              <div className="flex flex-col space-y-[0.5rem] items-start col-span-6 md480:col-span-4 md800:col-span-3">
                <span className="font-poppinsRegular text-bodyColor font-mediumWeight">
                  Contact Us
                </span>
                <div className="flex flex-col space-y-[1.5rem] text-bodyColor font-poppinsLight text-smaller md480:text-small">
                  <Link
                    to="/contact"
                    className="font-poppinsLight text-ctaColor hover:font-semibolded"
                  >
                    Write us a Message
                  </Link>
                  <div className="flex flex-col space-y-[1rem]">
                    <div className="group">
                      <div className="flex space-x-3 items-center group-hover:text-gray-400">
                        <span className="text-default md480:text-h3">
                          <PiPhone />
                        </span>
                        <span className="tracking-wide">
                          <a href="tel:254700119134">+254700119134</a>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-[0.25rem] ">
                      <div className="group">
                        <div className="flex space-x-3 items-center group-hover:text-gray-400">
                          <span className="text-default md480:text-h3">
                            <PiEnvelope />
                          </span>
                          <span className="tracking-wide">
                            <a href="mailto:pptrgitonga@gmail.com">
                              pptrgitonga@gmail.com
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="group">
                        <div className="flex space-x-3 items-center group-hover:text-gray-400">
                          <span className="text-default md480:text-h3">
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
                  </div>
                  <div className="flex items-center space-x-[1rem] text-h3 text-bodyColor pb-[1rem] md480:pb-0 md480:text-h2">
                    <span className="hover:text-gray-400">
                      <a href="https://www.linkedin.com/in/petergitonga">
                        <PiLinkedinLogo />
                      </a>
                    </span>
                    <span className="hover:text-gray-400">
                      <a href="https://twitter.com/ptrgitonga">
                        <RiTwitterXLine />
                      </a>
                    </span>
                    <span className="hover:text-gray-400">
                      <a href="https://wa.me/254700119134">
                        <PiWhatsappLogo />
                      </a>
                    </span>
                    <span className="hover:text-gray-400">
                      <a href="https://www.facebook.com/pptrgitonga">
                        <PiFacebookLogo />
                      </a>
                    </span>
                  </div>
                  <div className="pb-[1rem] md480:pb-0">
                    <a
                      href="https://buymeacoffee.com/ptrgitonga"
                      className="flex space-x-2 items-center "
                    >
                      <span className="block md480:hidden">Buy us a</span>
                      <span className="hidden md480:block">
                        Support us by a
                      </span>
                      <img
                        src="/images/buymeacoffee_logo.png"
                        alt="Buy Peter a Coffee"
                        className="h-[20px]"
                      />
                      <span>of Coffee</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-darkThemeColor">
            <div className="custom_container pt-[2rem] pb-[3rem] text-bodyColor text-smaller md480:text-small">
              <div className="flex flex-col-reverse justify-between gap-[1rem] w-full md480:gap-0 md480:flex-row">
                <div className="flex justify-center items-center w-full md480:justify-start md480:items-start md480:w-2/3">
                  <div>
                    &#169; {new Date().getFullYear()}{" "}
                    <a
                      href="https://pgitonga.vercel.app"
                      className="text-ctaColor hover:text-ctaColor/80"
                    >
                      Lifen Creatives
                    </a>
                    . All Rights Reserved
                  </div>
                </div>
                <div className="flex justify-center items-center w-full md480:justify-end md480:items-end md480:w-1/3">
                  <div className="flex justify-between items-center w-full">
                    <Link
                      to="/terms-of-service"
                      className="hover:text-ctaColor"
                    >
                      Terms of Service
                    </Link>
                    <Link to="/privacy-policy" className="hover:text-ctaColor">
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FadeInAnimation>
  );
};

export default Footer;
