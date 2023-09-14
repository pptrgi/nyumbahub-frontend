import React from "react";
import { Link } from "react-router-dom";
import {
  PiArrowsClockwise,
  PiHeart,
  PiHouse,
  PiPhone,
  PiSquaresFour,
} from "react-icons/pi";
import ActiveHeaderLink from "./ActiveHeaderLink";

const HamburgerMenu = ({
  showHamMenu,
  setShowHamMenu,
  typeDropdownItems,
  categoryDropdownItems,
}) => {
  return (
    <div
      className={
        showHamMenu
          ? "absolute top-0 w-3/4 min-h-screen bg-bodyColor text-textColor font-poppinsRegular px-[1rem] overflow-y-auto py-[2rem]"
          : "hidden"
      }
    >
      <div className="flex flex-col justify-start items-start mt-[2rem]">
        <div className="flex justify-center items-center w-full mb-[4rem]">
          <h3 className="font-poppinsBold text-h2 text-lightThemeColor">
            NyumbaHub
          </h3>
        </div>
        <div className="flex flex-col space-y-[1.5rem] w-full">
          <ActiveHeaderLink
            toWhere={""}
            inactiveGroupStyle={
              "flex space-x-[0.75rem] items-center border-b-[1px] border-gray-200 w-full hover:text-ctaColor"
            }
            icon={<PiHouse />}
            iconStyle={"text-h3"}
            linkTitle={"Home"}
            linkTitleStyle={"font-poppinsRegular"}
            optionalMenuSetter={setShowHamMenu}
          />
          <ActiveHeaderLink
            toWhere={"wishlist"}
            inactiveGroupStyle={
              "flex space-x-[0.75rem] items-center border-b-[1px] border-gray-200 w-full hover:text-ctaColor"
            }
            icon={<PiHeart />}
            iconStyle={"text-h3"}
            linkTitle={"Wishlist"}
            linkTitleStyle={"font-poppinsRegular"}
            optionalMenuSetter={setShowHamMenu}
          />
          <ActiveHeaderLink
            toWhere={"contact"}
            inactiveGroupStyle={
              "flex space-x-[0.75rem] items-center border-b-[1px] border-gray-200 w-full hover:text-ctaColor"
            }
            icon={<PiPhone />}
            iconStyle={"text-h3"}
            linkTitle={"Contact"}
            linkTitleStyle={"font-poppinsRegular"}
            optionalMenuSetter={setShowHamMenu}
          />
          <ActiveHeaderLink
            toWhere={"all-properties"}
            inactiveGroupStyle={
              "flex space-x-[0.75rem] items-center border-b-[1px] border-gray-200 w-full hover:text-ctaColor"
            }
            icon={<PiSquaresFour />}
            iconStyle={"text-h3"}
            linkTitle={"All Properties"}
            linkTitleStyle={"font-poppinsRegular"}
            optionalMenuSetter={setShowHamMenu}
          />
          <ActiveHeaderLink
            toWhere={"compare"}
            inactiveGroupStyle={
              "flex space-x-[0.75rem] items-center border-b-[1px] border-gray-200 w-full hover:text-ctaColor"
            }
            icon={<PiArrowsClockwise />}
            iconStyle={"text-h3"}
            linkTitle={"Compare"}
            linkTitleStyle={"font-poppinsRegular"}
            optionalMenuSetter={setShowHamMenu}
          />
          <div className="flex flex-col space-y-[0.75rem] group">
            <span className="border-b-[1px] border-gray-200 w-full group-hover:text-ctaColor">
              Properties by Type
            </span>
            <div className="flex flex-col space-y-[0.5rem] items-start px-[0.75rem]">
              {typeDropdownItems.map((type, index) => {
                return (
                  <Link key={index} to={`${type.params}`}>
                    <span
                      onClick={(e) => setShowHamMenu(false)}
                      className="capitalize"
                    >
                      {type.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col space-y-[0.75rem] group">
            <span className="border-b-[1px] border-gray-200 w-full group-hover:text-ctaColor">
              Properties by Category
            </span>
            <div className="flex flex-col space-y-[0.5rem] items-start px-[0.75rem]">
              {categoryDropdownItems.map((category, index) => {
                return (
                  <Link key={index} to={`${category.params}`}>
                    <span
                      onClick={(e) => setShowHamMenu(false)}
                      className="capitalize"
                    >
                      {category.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
