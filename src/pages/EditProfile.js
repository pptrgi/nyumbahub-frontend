import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";
import { editUserProfileAC } from "../reduxFeatures/users/userSlice";
import PageTitler from "../components/PageTitler";
import FadeOutAnimation from "../components/FadeOutAnimation";

const EditProfile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.user.user);
  const [firstName, setFirstName] = useState(userData?.firstName);
  const [lastName, setLastName] = useState(userData?.lastName);
  const [email, setEmail] = useState(userData?.email);
  const [phone, setPhone] = useState(userData?.phone);
  const userId = userData?.id;

  // Submit the user's modified profile
  const handleProfileUpdate = (e) => {
    e.preventDefault();

    const changedDetails = {
      firstName,
      lastName,
      email,
      phone,
    };
    dispatch(editUserProfileAC({ userId, changedDetails }));
  };

  return (
    <FadeOutAnimation delay={true}>
      <div className="custom_container page mb-[5rem]">
        <Breadcrumb pageTitle={"Edit Profile"} />
        <PageTitler title={"Manage Account"} />
        <h2 className="font-poppinsSemibold text-darkThemeColor mt-[1.5rem] mb-[2rem] text-h3">
          Manage your Account
        </h2>
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleProfileUpdate}
            className="w-[100%] flex flex-col space-y-[1rem] bg-white text-textColor px-[0.5rem] py-[3rem] md800:max-w-[80%] md480:max-w-[90%] md480:px-[2rem]"
          >
            <div className="w-full flex space-x-[0.25rem] justify-start items-start md480:space-x-[1rem]">
              <label className="w-5/12 px-[0.5rem] py-[0.5rem] md480:w-4/12 md800:w-3/12">
                First Name:
              </label>
              <span className="w-7/12 md480:w-8/12 md800:w-9/12">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  maxLength={20}
                  className="w-full border-[1.5px] border-gray-200 rounded-md px-[0.5rem] py-[0.5rem] hover:outline-none focus:outline-none focus:border-gray-300"
                />
              </span>
            </div>
            <div className="w-full flex space-x-[0.25rem] justify-start items-start md480:space-x-[1rem]">
              <label className="w-5/12 px-[0.5rem] py-[0.5rem] md480:w-4/12 md800:w-3/12">
                Last Name:
              </label>
              <span className="w-7/12 md480:w-8/12 md800:w-9/12">
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  maxLength={20}
                  className="w-full border-[1.5px] border-gray-200 rounded-md px-[0.5rem] py-[0.5rem] hover:outline-none focus:outline-none focus:border-gray-300"
                />
              </span>
            </div>
            <div className="w-full flex space-x-[0.25rem] justify-start items-start md480:space-x-[1rem]">
              <label className="w-5/12 px-[0.5rem] py-[0.5rem] md480:w-4/12 md800:w-3/12">
                Email:
              </label>
              <span className="w-7/12 md480:w-8/12 md800:w-9/12">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={40}
                  className="w-full border-[1.5px] border-gray-200 rounded-md px-[0.5rem] py-[0.5rem] hover:outline-none focus:outline-none focus:border-gray-300"
                />
              </span>
            </div>
            <div className="w-full flex space-x-[0.25rem] justify-start items-start md480:space-x-[1rem]">
              <label className="w-5/12 px-[0.5rem] py-[0.5rem] md480:w-4/12 md800:w-3/12">
                Mobile:
              </label>
              <span className="w-7/12 md480:w-8/12 md800:w-9/12">
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border-[1.5px] border-gray-200 rounded-md px-[0.5rem] py-[0.5rem] hover:outline-none focus:outline-none focus:border-gray-300"
                />
              </span>
            </div>
            <div className="pt-[1.25rem]">
              <div className="flex justify-end items-end">
                <div className="flex justify-center items-center space-x-[2rem]">
                  <Link
                    to="/"
                    className="font-poppinsSemibold font-mediumWeight hover:text-darkThemeColor"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="px-[1.5rem] py-[0.75rem] bg-ctaColor rounded-lg text-bodyColor hover:bg-darkThemeColor"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </FadeOutAnimation>
  );
};

export default EditProfile;
