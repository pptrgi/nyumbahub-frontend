import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const Contact = () => {
  return (
    <div className="page container">
      <Breadcrumb pageTitle={"Contact"} />
      <h2 className="font-poppinsSemibold text-darkThemeColor mt-[1.5rem] mb-[2rem] text-h3">
        Get in Touch
      </h2>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-[2rem] w-[100%] sm:max-w-[70%] md:max-w-[50%]">
          <form className=" w-full bg-white flex flex-col space-y-[1rem] border-b-[1.5px] border-gray-100 px-[2rem] py-[3rem] rounded-md ">
            <div className="relative bg-inherit rounded-md">
              <input
                type="text"
                className="w-full bg-inherit border-[1.5px] border-gray-200 py-[0.75rem] hover:outline-none focus:outline-none focus:border-gray-400 rounded-md px-[0.75rem] text-textColor text-smaller sm:text-small"
              />
              <span className="absolute -top-2 left-[1rem] bg-inherit px-[0.25rem] text-smaller sm:text-small">
                Full Name
              </span>
            </div>

            <div className="relative bg-inherit rounded-md">
              <input
                type="email"
                className="w-full bg-inherit border-[1.5px] border-gray-200 py-[0.75rem] hover:outline-none focus:outline-none focus:border-gray-400 rounded-md px-[0.75rem] text-textColor font-poppinsLight text-smaller sm:text-small"
              />
              <span className="absolute -top-2 left-[1rem] bg-inherit px-[0.25rem] text-smaller sm:text-small">
                Email Address
              </span>
            </div>
            <div className="relative bg-inherit rounded-md">
              <input
                type="text"
                className="w-full bg-inherit border-[1.5px] border-gray-200 py-[0.75rem] hover:outline-none focus:outline-none focus:border-gray-400 rounded-md px-[0.75rem] text-textColor font-poppinsLight text-smaller sm:text-small"
              />
              <span className="absolute -top-2 left-[1rem] bg-inherit px-[0.25rem] text-smaller sm:text-small">
                Subject
              </span>
            </div>
            <div className="relative bg-inherit rounded-md">
              <textarea
                rows={4}
                className="w-full bg-inherit border-[1.5px] border-gray-200 py-[0.75rem] hover:outline-none focus:outline-none focus:border-gray-400 rounded-md px-[0.75rem] text-textColor resize-none font-poppinsLight text-smaller sm:text-small"
              />
              <span className="absolute -top-2 left-[1rem] bg-inherit px-[0.25rem] text-smaller sm:text-small">
                Message
              </span>
            </div>
            <div className="flex justify-end items-end">
              <button
                type="submit"
                className="bg-ctaColor text-bodyColor px-[1.5rem] py-[0.75rem] rounded-md"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="flex justify-between w-full items-center pt-[2rem] pb-[3rem] text-textColor font-poppinsLight ">
            <a
              href="https://wa.me/254700119134"
              className="flex flex-col space-y-[0.125rem] hover:text-ctaColor"
            >
              <span className="flex justify-center items-center w-full">
                Via
              </span>
              <span className="underline underline-offset-4 ">Whatsapp</span>
            </a>
            <a
              href="tel:254700119134"
              className="flex flex-col space-y-[0.125rem] hover:text-ctaColor"
            >
              <span className="flex justify-center items-center w-full">
                Make
              </span>
              <span className=" underline underline-offset-4 ">Phone Call</span>
            </a>
            <a
              href="mailto:lifencreatives@gmail.com"
              className="flex flex-col space-y-[0.125rem] hover:text-ctaColor"
            >
              <span className="flex justify-center items-center w-full">
                Send
              </span>
              <span className=" underline underline-offset-4 ">An Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
