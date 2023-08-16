import { useState, useRef, useEffect } from "react";
import {
  PiUser,
  PiQuestion,
  PiSignOut,
  PiNotePencil,
  PiEyeSlash,
} from "react-icons/pi";
import { Link } from "react-router-dom";

const AccountPanel = ({ userDetails }) => {
  return (
    <>
      <div
        className="absolute top-0 -right-4 z-30 flex flex-col items-start text-textColor font-poppinsRegular bg-white rounded-md mt-[2rem] w-[200px] px-[1rem] pt-[3rem] pb-[2rem] md:right-0"
        id="account-panel-tag"
      >
        {userDetails ? (
          <div className="flex flex-col w-full">
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-col space-y-2">
                <span>Hello, Jonathan</span>
              </div>
            </div>
            <div className="flex flex-col space-y-[0.75rem] mt-[2rem]">
              <Link to="/edit-profile" className="flex items-center space-x-3">
                <span className="text-default">
                  <PiNotePencil />
                </span>
                <span className="text-smaller sm:text-small">Edit Profile</span>
              </Link>
              <div className="flex items-center space-x-3">
                <span className="text-default">
                  <PiEyeSlash />
                </span>
                <span className="text-smaller sm:text-small">
                  Change Password
                </span>
              </div>
              <Link to="/contact" className="flex items-center space-x-3">
                <span className="text-default">
                  <PiQuestion />
                </span>
                <span className="text-smaller sm:text-small">
                  Help & Support
                </span>
              </Link>
              <div className="flex items-center space-x-3 text-ctaColor">
                <span className="text-default">
                  <PiSignOut />
                </span>
                <span className="text-smaller sm:text-small ">Sign Out</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center w-full font-mediumWeight">
              <Link
                to="/signin"
                className="px-[1.25rem] py-[0.5rem] bg-ctaColor text-bodyColor rounded-md"
              >
                Sign In
              </Link>
              <Link to="/register" className="font-poppinsRegular">
                Register
              </Link>
            </div>
            <div className="flex flex-col space-y-[0.75rem] mt-[2rem] text-textColor">
              <div className="flex items-center space-x-3 pointer-events-none opacity-30">
                <span className="text-h3">
                  <PiNotePencil />
                </span>
                <span className="text-smaller sm:text-small">Edit Profile</span>
              </div>
              <div className="flex items-center space-x-3 pointer-events-none opacity-30">
                <span className="text-h3">
                  <PiEyeSlash />
                </span>
                <span className="text-smaller sm:text-small">
                  Change Password
                </span>
              </div>
              <div className="flex items-center space-x-3 pointer-events-none opacity-30">
                <span className="text-h3">
                  <PiQuestion />
                </span>
                <span className="text-smaller sm:text-small">
                  Help & Support
                </span>
              </div>
              <div className="flex items-center space-x-3 pointer-events-none opacity-30">
                <span className="text-h3">
                  <PiSignOut />
                </span>
                <span className="text-smaller sm:text-small">Sign Out</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AccountPanel;
