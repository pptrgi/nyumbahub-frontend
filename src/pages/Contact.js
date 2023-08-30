import React from "react";
import { PiWhatsappLogo, PiEnvelope, PiPhone } from "react-icons/pi";
import Breadcrumb from "../components/Breadcrumb";
import PageTitler from "../components/PageTitler";

const Contact = () => {
  return (
    <div className="page container">
      <Breadcrumb pageTitle={"Contact"} />
      <PageTitler title={"Contact Us"} />
      <h2 className="font-poppinsSemibold text-darkThemeColor mt-[1.5rem] mb-[2rem] text-h3">
        Get in Touch
      </h2>
      <div className="flex flex-col justify-center items-center gap-[1.5rem]">
        <div className="flex flex-col gap-[2rem] w-[100%] sm:max-w-[70%] md:max-w-[50%]">
          <form className=" w-full bg-white flex flex-col space-y-[1rem] border-b-[1.5px] border-gray-100 px-[1rem] py-[3rem] rounded-md sm:px-[2rem]">
            <div className="relative bg-inherit rounded-md">
              <input
                type="text"
                className="w-full bg-inherit border-[1.5px] border-gray-200 py-[0.75rem] hover:outline-none focus:outline-none focus:border-gray-400 rounded-md px-[0.75rem] text-lightThemeColor font font-poppinsSemibold text-smaller sm:text-small"
                maxLength={40}
              />
              <span className="absolute -top-2 left-[1rem] bg-inherit px-[0.25rem] text-smaller sm:text-small">
                Full Name
              </span>
            </div>

            <div className="relative bg-inherit rounded-md">
              <input
                type="email"
                className="w-full bg-inherit border-[1.5px] border-gray-200 py-[0.75rem] hover:outline-none focus:outline-none focus:border-gray-400 rounded-md px-[0.75rem] text-lightThemeColor font font-poppinsSemibold text-smaller sm:text-small"
                maxLength={40}
              />
              <span className="absolute -top-2 left-[1rem] bg-inherit px-[0.25rem] text-smaller sm:text-small">
                Email Address
              </span>
            </div>
            <div className="relative bg-inherit rounded-md">
              <input
                type="text"
                className="w-full bg-inherit border-[1.5px] border-gray-200 py-[0.75rem] hover:outline-none focus:outline-none focus:border-gray-400 rounded-md px-[0.75rem] text-lightThemeColor font font-poppinsSemibold text-smaller sm:text-small"
                maxLength={70}
              />
              <span className="absolute -top-2 left-[1rem] bg-inherit px-[0.25rem] text-smaller sm:text-small">
                Subject
              </span>
            </div>
            <div className="relative bg-inherit rounded-md">
              <textarea
                rows={4}
                className="w-full bg-inherit border-[1.5px] border-gray-200 py-[0.75rem] hover:outline-none focus:outline-none focus:border-gray-400 rounded-md px-[0.75rem] text-lightThemeColor font font-poppinsSemibold resize-none text-smaller sm:text-small"
              />
              <span className="absolute -top-2 left-[1rem] bg-inherit px-[0.25rem] text-smaller sm:text-small">
                Message
              </span>
            </div>
            <div className="flex justify-end items-end">
              <button
                type="submit"
                className="bg-ctaColor text-bodyColor px-[1.5rem] py-[0.75rem] rounded-md hover:bg-darkThemeColor"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="w-[100%] sm:max-w-[80%] md:max-w-[60%] pt-[1rem] pb-[3rem]">
          <div className="flex justify-between w-full items-center text-textColor font-poppinsLight">
            <a
              href="https://wa.me/254700119134"
              className="flex items-center space-x-[0.25rem] hover:text-ctaColor sm:space-x-[0.5rem]"
            >
              <span className="text-h3 sm:text-h2">
                <PiWhatsappLogo />
              </span>
              <span className="flex flex-col items-start w-full sm:space-y-[0.125rem]">
                <span className="text-tiny sm:text-small">Via</span>
                <span className="text-smaller sm:text-default">Whatsapp</span>
              </span>
            </a>
            <a
              href="tel:254700119134"
              className="flex items-center space-x-[0.25rem] hover:text-ctaColor sm:space-x-[0.5rem]"
            >
              <span className="text-h3 sm:text-h2">
                <PiPhone />
              </span>
              <span className="flex flex-col items-start w-full sm:space-y-[0.125rem]">
                <span className="text-tiny sm:text-small">Make</span>
                <span className="text-smaller sm:text-default">Phone Call</span>
              </span>
            </a>
            <a
              href="mailto:pptrgitonga@gmail.com"
              className="flex items-center space-x-[0.25rem] hover:text-ctaColor sm:space-x-[0.5rem]"
            >
              <span className="text-h3 sm:text-h2">
                <PiEnvelope />
              </span>
              <span className="flex flex-col items-start w-full sm:space-y-[0.125rem]">
                <span className="text-tiny sm:text-small">Send</span>
                <span className="text-smaller sm:text-default">An Email</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
