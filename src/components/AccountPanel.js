import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  PiQuestion,
  PiSignOut,
  PiNotePencil,
  PiEyeSlash,
} from "react-icons/pi";

import { signOutUserAC } from "../reduxFeatures/users/userSlice";

const AccountPanel = ({ userDetails, closeAccountPanel = () => {} }) => {
  const dispatch = useDispatch();

  // sign the user out and close the account panel
  const handleUserSignout = () => {
    dispatch(signOutUserAC());
    closeAccountPanel();
  };

  return (
    <>
      <div
        className="absolute top-0 -right-4 z-30 flex_col items-start text-textColor font-poppinsRegular shadow-md bg-white rounded-md mt-[2rem] w-[200px] px-[1rem] pt-[2.5rem] pb-[1.5rem] md800:right-0 md480:w-[220px]"
        id="account-panel-tag"
      >
        {userDetails ? (
          <div className="flex_col w-full">
            <div className="flex_center w-full">
              <div className="flex_col space-y-2">
                <span className="capitalize">{`Hello ${userDetails?.firstName}`}</span>
              </div>
            </div>
            <div className="flex_col space-y-[0.75rem] mt-[2rem]">
              <div className="group">
                <Link
                  to="/edit-profile"
                  onClick={(e) => closeAccountPanel()}
                  className="flex items-center space-x-3 group-hover:text-ctaColor"
                >
                  <span className="text-default">
                    <PiNotePencil />
                  </span>
                  <span className="text-smaller md480:text-small">
                    Edit Profile
                  </span>
                </Link>
              </div>

              <div className="group">
                <Link
                  to="/change-password"
                  onClick={(e) => closeAccountPanel()}
                  className="flex items-center space-x-3 group-hover:text-ctaColor"
                >
                  <span className="text-default">
                    <PiEyeSlash />
                  </span>
                  <span className="text-smaller md480:text-small">
                    Change Password
                  </span>
                </Link>
              </div>

              <div className="group">
                <Link
                  to="/contact"
                  onClick={(e) => closeAccountPanel()}
                  className="flex items-center space-x-3 group-hover:text-ctaColor"
                >
                  <span className="text-default">
                    <PiQuestion />
                  </span>
                  <span className="text-smaller md480:text-small">
                    Help & Support
                  </span>
                </Link>
              </div>

              <div className="group">
                <div
                  onClick={(e) => handleUserSignout()}
                  className="flex items-center space-x-3 text-ctaColor group-hover:text-red-500 cursor-pointer"
                >
                  <span className="text-default">
                    <PiSignOut />
                  </span>
                  <span className="text-smaller md480:text-small ">
                    Sign Out
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex_col w-full">
            <div className="flex justify-between items-center w-full font-mediumWeight">
              <Link
                to="/signin"
                onClick={(e) => closeAccountPanel()}
                className="font-poppinsBold tracking-wide hover:text-darkThemeColor"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                onClick={(e) => closeAccountPanel()}
                className="px-[1.25rem] py-[0.6rem] bg-ctaColor text-bodyColor rounded-md hover:bg-darkThemeColor md480:py-[0.75rem]"
              >
                Register
              </Link>
            </div>
            <div className="flex_col space-y-[0.75rem] mt-[2rem] text-textColor">
              <div className="flex items-center space-x-3 pointer-events-none opacity-30">
                <span className="text-h3">
                  <PiNotePencil />
                </span>
                <span className="text-smaller md480:text-small">
                  Edit Profile
                </span>
              </div>
              <div className="flex items-center space-x-3 pointer-events-none opacity-30">
                <span className="text-h3">
                  <PiEyeSlash />
                </span>
                <span className="text-smaller md480:text-small">
                  Change Password
                </span>
              </div>
              <div className="flex items-center space-x-3 pointer-events-none opacity-30">
                <span className="text-h3">
                  <PiQuestion />
                </span>
                <span className="text-smaller md480:text-small">
                  Help & Support
                </span>
              </div>
              <div className="flex items-center space-x-3 pointer-events-none opacity-30">
                <span className="text-h3">
                  <PiSignOut />
                </span>
                <span className="text-smaller md480:text-small">Sign Out</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AccountPanel;
