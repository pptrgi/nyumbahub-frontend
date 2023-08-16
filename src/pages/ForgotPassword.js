import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="page container">
      <Breadcrumb pageTitle={"Forgot Password"} />
      <div className="flex justify-center items-center w-full min-h-[70vh]">
        <div className="flex flex-col gap-[2rem]">
          <div className="flex flex-col justify-center items-center gap-[0.5rem]">
            <h3 className="text-center font-poppinsRegular text-lightThemeColor text-default sm:text-h3">
              Ask to set new Password
            </h3>
            <p className="font-poppinsLight text-center leading-tight text-textColor text-smaller sm:text-small max-w-sm">
              A link to reset your password will be sent to the email you
              provide. Please visit the link
            </p>
          </div>
          <div className="w-[300px] bg-white rounded-sm sm:w-[400px] md:w-[500px] pt-[4rem] pb-[2rem]">
            <div className="flex flex-col items-center gap-[2.5rem] px-[1rem] sm:col-span-3 w-full">
              <form className="flex flex-col items-center text-textColor w-full sm:w-3/4">
                <div className="flex flex-col space-y-[0.75rem] w-full">
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="hover:outline-none focus:outline-none px-[1rem] py-[0.6rem] border-[1px] border-gray-200 hover:border-thirtyColor focus:border-thirtyColor rounded-sm"
                    required
                  />
                </div>
                <div className="flex justify-end items-end mt-[3rem] w-full">
                  <div className="flex items-center space-x-4">
                    <Link to="/" className="text-textColor w-full">
                      Cancel
                    </Link>
                    <button
                      type="submit"
                      className="bg-ctaColor text-bodyColor w-full py-[0.5rem] px-[1.25rem] rounded-md"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
