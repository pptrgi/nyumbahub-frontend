import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const userData = useSelector((state) => state.user.user);

  return (
    <div className="page container mb-[5rem]">
      <Breadcrumb pageTitle={"Edit Profile"} />
      <h2 className="font-poppinsSemibold text-darkThemeColor mt-[1.5rem] mb-[2rem] text-h3">
        Manage your Account
      </h2>
      <div className="flex justify-center items-center">
        <form className="w-[100%] flex flex-col space-y-[1rem] bg-white text-textColor px-[0.5rem] py-[3rem] md:max-w-[80%] sm:max-w-[90%] sm:px-[2rem]">
          <div className="w-full flex space-x-[0.25rem] justify-start items-start sm:space-x-[1rem]">
            <label className="w-5/12 px-[0.5rem] py-[0.5rem] sm:w-4/12 md:w-3/12">
              First Name:
            </label>
            <span className="w-7/12 sm:w-8/12 md:w-9/12">
              <input
                type="text"
                value={userData?.firstName}
                className="w-full border-[1.5px] border-gray-200 rounded-md px-[0.5rem] py-[0.5rem] hover:outline-none focus:outline-none focus:border-gray-300"
              />
            </span>
          </div>
          <div className="w-full flex space-x-[0.25rem] justify-start items-start sm:space-x-[1rem]">
            <label className="w-5/12 px-[0.5rem] py-[0.5rem] sm:w-4/12 md:w-3/12">
              Last Name:
            </label>
            <span className="w-7/12 sm:w-8/12 md:w-9/12">
              <input
                type="text"
                value={userData?.lastName}
                className="w-full border-[1.5px] border-gray-200 rounded-md px-[0.5rem] py-[0.5rem] hover:outline-none focus:outline-none focus:border-gray-300"
              />
            </span>
          </div>
          <div className="w-full flex space-x-[0.25rem] justify-start items-start sm:space-x-[1rem]">
            <label className="w-5/12 px-[0.5rem] py-[0.5rem] sm:w-4/12 md:w-3/12">
              Email:
            </label>
            <span className="w-7/12 sm:w-8/12 md:w-9/12">
              <input
                type="email"
                value={userData?.email}
                className="w-full border-[1.5px] border-gray-200 rounded-md px-[0.5rem] py-[0.5rem] hover:outline-none focus:outline-none focus:border-gray-300"
              />
            </span>
          </div>
          <div className="w-full flex space-x-[0.25rem] justify-start items-start sm:space-x-[1rem]">
            <label className="w-5/12 px-[0.5rem] py-[0.5rem] sm:w-4/12 md:w-3/12">
              Mobile:
            </label>
            <span className="w-7/12 sm:w-8/12 md:w-9/12">
              <input
                type="number"
                value={userData?.phone}
                className="w-full border-[1.5px] border-gray-200 rounded-md px-[0.5rem] py-[0.5rem] hover:outline-none focus:outline-none focus:border-gray-300"
              />
            </span>
          </div>
          <div className="pt-[1.25rem]">
            <div className="flex justify-end items-end">
              <div className="flex justify-center items-center space-x-[2rem]">
                <Link to="/" className="font-poppinsSemibold font-mediumWeight">
                  Cancel
                </Link>
                <button className="px-[1.5rem] py-[0.75rem] bg-ctaColor rounded-lg text-bodyColor">
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
