import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import {
  PiWhatsappLogo,
  PiLinkedinLogo,
  PiFacebookLogo,
  PiArrowsClockwise,
  PiHeart,
  PiUser,
  PiList,
} from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";

import DropdownMenu from "./DropdownMenu";
import ActiveHeaderLink from "./ActiveHeaderLink";
import HamburgerMenu from "./HamburgerMenu";
import AccountPanel from "./AccountPanel";
import useClickOutsideToClose from "../hooks/useClickOutsideToClose";
import { Link } from "react-router-dom";

const Header = () => {
  const [showHamMenu, setShowHamMenu] = useState(false);
  const [showAccountPanel, setShowAccountPanel] = useState(false);
  const menuRef = useRef();
  const accountRef = useRef();
  const accountMobileRef = useRef();
  const userDetails = useSelector((state) => state.user.user.user);

  // Listen for click events that are outside the ham menu while it is open to close it
  useClickOutsideToClose(menuRef, () => setShowHamMenu(false));

  // Define property types and categories to be used in the hamburger and View by Type / View by Category dropdown menus
  const typeDropdownItems = [
    { name: "apartment", params: "type/64b23dfd3567c004de3bf49e" },
    { name: "maisonette", params: "type/64b23de73567c004de3bf498" },
    { name: "villa", params: "type/64b23df23567c004de3bf49b" },
    { name: "bungalow", params: "type/64b23bd62051ecc3babb05fb" },
    { name: "mansion", params: "type/64afeefd919371933061ddb4" },
    { name: "bedsitter", params: "type/64afeefd919371933061ddb4" },
  ];
  const categoryDropdownItems = [
    { name: "for rent", params: "category/64b23f6f3567c004de3bf4c3" },
    { name: "featured", params: "category/64b23f843567c004de3bf4c9" },
    { name: "for sale", params: "category/64b23f783567c004de3bf4c6" },
    { name: "new listing", params: "category/64b23f8f3567c004de3bf4cc" },
    { name: "top seller", params: "category/64b23fa93567c004de3bf4d2" },
    { name: "reduced price", params: "category/64b23f983567c004de3bf4cf" },
  ];

  return (
    <div className="fixed top-0 w-[100%] z-50 h-auto" id="nav">
      <nav className="hidden flex-col md800:flex">
        <div className="bg-darkThemeColor ">
          <div className="custom_container justify-between py-[0.5rem] tracking-wider md800:flex">
            <div className="flex items-center gap-[0.75rem] text-bodyColor text-tiny font-poppinsLight truncate">
              <span className="truncate group">
                Phone:{" "}
                <a
                  href="tel:254700119134"
                  className="group-hover:text-gray-400"
                >
                  +254700119134
                </a>
              </span>
              <span className="truncate group">
                Email:{" "}
                <a
                  href="mailto:lifencreatives@gmail.com"
                  className="group-hover:text-gray-400"
                >
                  lifencreatives@gmail.com
                </a>
              </span>
              <span className="truncate">Open: Mon - Fri 08:00 - 17:00hrs</span>
            </div>
            <div className="flex items-center gap-[0.75rem] text-bodyColor ">
              <span className="hover:text-gray-400">
                <a href="https://wa.me/254700119134">
                  <PiWhatsappLogo />
                </a>
              </span>
              <span className="hover:text-gray-400">
                <a href="https://twitter.com/ptrgitonga">
                  <RiTwitterXFill />
                </a>
              </span>
              <span className="hover:text-gray-400">
                <a href="https://www.linkedin.com/in/petergitonga">
                  <PiLinkedinLogo />
                </a>
              </span>
              <span className="hover:text-gray-400">
                <a href="https://www.facebook.com/pptrgitonga">
                  <PiFacebookLogo />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-darkThemeColor border-t-[1px] border-gray-400">
          <div className="custom_container flex justify-between py-[1.25rem] text-bodyColor">
            <Link to={"/"}>
              <h2 className="font-poppinsSemibold text-h2 font-mediumWeight">
                NyumbaHub
              </h2>
            </Link>
            <div className="flex items-center space-x-[1rem] tracking-wider lg1023:space-x-[1.5rem]">
              <ActiveHeaderLink
                toWhere={"compare"}
                inactiveGroupStyle={"flex items-center space-x-2 group"}
                icon={<PiArrowsClockwise />}
                iconStyle={"text-h2 font-semibolded group-hover:text-ctaColor"}
                linkTitle={"Compare"}
                linkTitleStyle={"font-poppinsRegular group-hover:text-ctaColor"}
              />
              <ActiveHeaderLink
                toWhere={"wishlist"}
                inactiveGroupStyle={"flex items-center space-x-2 group"}
                icon={<PiHeart />}
                iconStyle={"text-h2 font-semibolded group-hover:text-ctaColor"}
                linkTitle={"Wishlist"}
                linkTitleStyle={"font-poppinsRegular group-hover:text-ctaColor"}
              />
              <div className="relative flex flex-col">
                <div
                  className="flex items-center space-x-2"
                  onClick={(e) => setShowAccountPanel(!showAccountPanel)}
                >
                  <div className="relative cursor-pointer">
                    <span className="text-h2 font-semibolded">
                      <PiUser />
                    </span>
                    {userDetails && (
                      <span className="absolute -top-[0.125rem] -right-[0.3rem] px-[5px] py-[5px] bg-[#00C300] rounded-full " />
                    )}
                  </div>
                  <span className="font-poppinsRegular capitalize cursor-pointer">
                    {userDetails ? userDetails?.firstName : "Account"}
                  </span>
                </div>
                <div ref={accountRef}>
                  {showAccountPanel && (
                    <AccountPanel userDetails={userDetails} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-lightThemeColor">
          <div className="custom_container flex justify-start space-x-[1.5rem] text-bodyColor text-small tracking-wider py-[0.75rem]">
            <DropdownMenu
              title={"View by Type"}
              titleStyle={"truncate cursor-pointer group-hover:text-ctaColor"}
              items={typeDropdownItems}
              itemsStyle={
                "absolute top-[2.75rem] flex flex-col items-start bg-lightThemeColor text-lightGrayCTA"
              }
            />
            <DropdownMenu
              title={"View by Category"}
              titleStyle={"truncate cursor-pointer group-hover:text-ctaColor"}
              items={categoryDropdownItems}
              itemsStyle={
                "absolute top-[2.75rem] flex flex-col items-start bg-lightThemeColor text-lightGrayCTA"
              }
            />
            <ActiveHeaderLink
              toWhere={""}
              inactiveGroupStyle={"group"}
              icon={null}
              iconStyle={"hidden"}
              linkTitle={"Home"}
              linkTitleStyle={"group-hover:text-ctaColor"}
            />
            <ActiveHeaderLink
              toWhere={"all-properties"}
              inactiveGroupStyle={"group"}
              icon={null}
              iconStyle={"hidden"}
              linkTitle={"All Properties"}
              linkTitleStyle={"truncate group-hover:text-ctaColor"}
            />
            <ActiveHeaderLink
              toWhere={"contact"}
              inactiveGroupStyle={"group"}
              icon={null}
              iconStyle={"hidden"}
              linkTitle={"Contact"}
              linkTitleStyle={"group-hover:text-ctaColor"}
            />
          </div>
        </div>
      </nav>
      <nav className="relative bg-darkThemeColor py-[1.25rem] md800:hidden">
        <div className="custom_container flex justify-between text-bodyColor">
          <div className="flex items-center gap-x-[1.5rem] md480:gap-x-[3rem]">
            <span
              onClick={(e) => setShowHamMenu(true)}
              className="text-[1.375rem] hover:text-ctaColor md480:text-h2"
            >
              <PiList />
            </span>
            <span className="block text-default font-poppinsSemibold md480:hidden">
              NyumbaHub
            </span>
            <span className="hidden text-h3 md480:block">NyumbaHub</span>
          </div>

          <div className="flex items-center gap-x-[1rem] xs360:gap-x-[0.925rem] md480:gap-x-[1.25rem]">
            <div className="flex items-center gap-x-[1rem] xs360:gap-x-[0.925rem] md480:gap-x-[1.25rem]">
              <ActiveHeaderLink
                toWhere={"compare"}
                inactiveGroupStyle={"group"}
                icon={<PiArrowsClockwise />}
                iconStyle={
                  "text-[1.375rem] group-hover:text-ctaColor md480:text-h2"
                }
                linkTitle={""}
                linkTitleStyle={"hidden"}
              />
              <ActiveHeaderLink
                toWhere={"wishlist"}
                inactiveGroupStyle={"group"}
                icon={<PiHeart />}
                iconStyle={
                  "text-[1.375rem] group-hover:text-ctaColor md480:text-h2"
                }
                linkTitle={""}
                linkTitleStyle={"hidden"}
              />
            </div>
            <div className="relative flex flex-col">
              <div
                onClick={(e) => setShowAccountPanel(!showAccountPanel)}
                className="relative"
              >
                <span className="text-[1.375rem] md480:text-h2">
                  <PiUser />
                </span>
                {userDetails && (
                  <span className="absolute -top-[0.125rem] -right-[0.3rem] px-[4.5px] py-[4.5px] bg-[#00C300] rounded-full" />
                )}
              </div>
              <div ref={accountMobileRef}>
                {showAccountPanel && (
                  <AccountPanel
                    userDetails={userDetails}
                    closeAccountPanel={() => setShowAccountPanel(false)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div ref={menuRef}>
          {
            <HamburgerMenu
              showHamMenu={showHamMenu}
              setShowHamMenu={setShowHamMenu}
              typeDropdownItems={typeDropdownItems}
              categoryDropdownItems={categoryDropdownItems}
            />
          }
        </div>
      </nav>
    </div>
  );
};

export default Header;
