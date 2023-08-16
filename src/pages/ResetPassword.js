import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const ResetPassword = () => {
  return (
    <div className="page container">
      <Breadcrumb pageTitle={"Reset Password"} />
      <div className="flex justify-center items-center w-full min-h-[70vh]">
        <div className="flex flex-col gap-[2rem]">
          <div className="w-[300px] bg-white rounded-sm sm:w-[400px] md:w-[500px] pt-[3rem] pb-[2rem]">
            <div className="flex flex-col items-center gap-[2.5rem] px-[1rem] sm:col-span-3 w-full">
              <h3 className="text-center font-poppinsRegular text-lightThemeColor text-default sm:text-h3">
                Reset your Forgotten Password
              </h3>
              <form className="flex flex-col items-center text-textColor w-full sm:w-3/4">
                <div className="flex flex-col space-y-[0.75rem] w-full">
                  <input
                    type="password"
                    placeholder="password"
                    className="hover:outline-none focus:outline-none px-[1rem] py-[0.6rem] border-[1px] border-gray-200 hover:border-thirtyColor focus:border-thirtyColor rounded-sm"
                    required
                  />
                  <input
                    type="confirm password"
                    placeholder="confirm password"
                    className="hover:outline-none focus:outline-none px-[1rem] py-[0.6rem] border-[1px] border-gray-200 hover:border-thirtyColor focus:border-thirtyColor rounded-sm"
                    required
                  />
                </div>
                <div className="flex justify-end items-end mt-[3rem] w-full">
                  <div className="flex items-center space-x-4">
                    <span className="text-textColor w-full">Cancel</span>
                    <button
                      type="submit"
                      className="bg-ctaColor text-bodyColor w-full py-[0.5rem] px-[1.25rem] rounded-md"
                    >
                      Reset
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

export default ResetPassword;
