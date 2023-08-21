import { useState, useEffect, useRef } from "react";
import {
  PiWhatsappLogo,
  PiLinkedinLogo,
  PiTwitterLogo,
  PiFacebookLogo,
  PiArrowsClockwise,
  PiHeart,
  PiUser,
  PiList,
} from "react-icons/pi";
import { BiAnalyse } from "react-icons/bi";
import { TbAB2, TbTransform, TbScale } from "react-icons/tb";
import DropdownMenu from "./DropdownMenu";
import ActiveHeaderLink from "./ActiveHeaderLink";
import HamburgerMenu from "./HamburgerMenu";
import AccountPanel from "./AccountPanel";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [showHamMenu, setShowHamMenu] = useState(false);
  // const [userDetails, setUserDetails] = useState(false);
  const [showAccountPanel, setShowAccountPanel] = useState(false);
  const menuRef = useRef();
  const accountRef = useRef();
  const userDetails = useSelector((state) => state.user.user);
  console.log(userDetails);

  // listen for events that are outside the menu panel while it is open to close it
  useEffect(() => {
    const outsideClickListener = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setShowHamMenu(false);
      }
      if (!accountRef.current.contains(event.target)) {
        setShowAccountPanel(false);
      }
    };
    document.addEventListener("mousedown", outsideClickListener);
    return () => {
      // investigate
      document.removeEventListener("mousedown", outsideClickListener);
    };
  }, []);

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
  // const typeDropdownItems = [
  //   { name: "apartment", params: "type/64d4a97b2ae9a7c96dba2674" },
  //   { name: "maisonette", params: "type/64d4a9862ae9a7c96dba2678" },
  //   { name: "villa", params: "type/64b64816ebd5fd40c0f3d665" },
  //   { name: "bungalow", params: "type/64d4a9732ae9a7c96dba2670" },
  //   { name: "mansion", params: "type/64d4a98c2ae9a7c96dba267c" },
  //   { name: "bedsitter", params: "type/64d4a9972ae9a7c96dba2680" },
  // ];
  // const categoryDropdownItems = [
  //   { name: "for rent", params: "category/64d36c24632663f6a74fd5f6" },
  //   { name: "featured", params: "category/64d36c39632663f6a74fd5f8" },
  //   { name: "for sale", params: "category/64d36c24632663f6a74fd5f6" },
  //   { name: "new listing", params: "category/64d4a9e82ae9a7c96dba268c" },
  //   { name: "top seller", params: "category/64d4a9df2ae9a7c96dba2688" },
  //   { name: "reduced price", params: "category/64d4aa192ae9a7c96dba2690" },
  // ];
  return (
    <div className="fixed top-0 w-[100%] z-50 h-auto" id="nav">
      <nav className="hidden flex-col md:flex sm:hidden">
        <div className="bg-darkThemeColor ">
          <div className="container justify-between py-[0.5rem] tracking-wider md:flex md:px-[1rem]">
            <div className="flex items-center gap-[0.75rem] text-bodyColor text-tiny font-poppinsLight">
              <span>
                Phone: <a href="tel:254700119134">+254700119134</a>
              </span>
              <span>
                Email:{" "}
                <a href="mailto:lifencreatives@gmail.com">
                  lifencreatives@gmail.com
                </a>
              </span>
              <span>Open: Mon - Fri 08:00 - 17:00hrs</span>
            </div>
            <div className="flex items-center gap-[0.75rem] text-bodyColor ">
              <span>
                <a href="https://wa.me/254700119134">
                  <PiWhatsappLogo />
                </a>
              </span>
              <span>
                <a href="https://twitter.com/ptrgitonga">
                  <PiTwitterLogo />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/petergitonga">
                  <PiLinkedinLogo />
                </a>
              </span>
              <span>
                <a href="https://www.facebook.com/pptrgitonga">
                  <PiFacebookLogo />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-darkThemeColor border-t-[1px] border-gray-400">
          <div className="container flex justify-between py-[1.25rem] text-bodyColor sm:px-[1rem]">
            <span className="font-poppinsSemibold text-h2 font-mediumWeight">
              NyumbaHub
            </span>
            <div className="flex items-center space-x-[1.5rem] tracking-wider">
              <ActiveHeaderLink
                toWhere={"compare"}
                inactiveGroupStyle={"flex items-center space-x-2"}
                icon={<PiArrowsClockwise />}
                iconStyle={"text-h2 font-semibolded"}
                linkTitle={"Compare"}
                linkTitleStyle={"font-poppinsRegular"}
              />
              <ActiveHeaderLink
                toWhere={"wishlist"}
                inactiveGroupStyle={"flex items-center space-x-2"}
                icon={<PiHeart />}
                iconStyle={"text-h2 font-semibolded"}
                linkTitle={"Wishlist"}
                linkTitleStyle={"font-poppinsRegular"}
              />
              <div className="relative flex flex-col">
                <div
                  className="flex items-center space-x-2"
                  onClick={(e) =>
                    setShowAccountPanel(showAccountPanel ? false : true)
                  }
                >
                  <div className="relative">
                    <span className="text-h2 font-semibolded">
                      <PiUser />
                    </span>
                    {userDetails && (
                      <span className="absolute -top-[0.125rem] -right-[0.325rem] px-[5px] py-[5px] bg-[#00C300] rounded-full" />
                    )}
                  </div>
                  <span className="font-poppinsRegular">Account</span>
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
          <div className="container flex justify-start space-x-[1.5rem] text-bodyColor text-small tracking-wider py-[0.75rem] md:px-[1rem]">
            <DropdownMenu
              title={"View by Type"}
              titleStyle={""}
              items={typeDropdownItems}
              itemsStyle={
                "absolute top-[2.75rem] flex flex-col space-y-[0.75rem] py-[0.75rem] items-start bg-lightGrayCTA text-lightThemeColor"
              }
            />
            <DropdownMenu
              title={"View by Category"}
              titleStyle={""}
              items={categoryDropdownItems}
              itemsStyle={
                "absolute top-[2.75rem] flex flex-col space-y-[0.75rem] py-[0.75rem] items-start bg-lightGrayCTA text-lightThemeColor"
              }
            />
            <ActiveHeaderLink
              toWhere={""}
              inactiveGroupStyle={""}
              icon={null}
              iconStyle={"hidden"}
              linkTitle={"Home"}
              linkTitleStyle={""}
            />
            <ActiveHeaderLink
              toWhere={"all-properties"}
              inactiveGroupStyle={""}
              icon={null}
              iconStyle={"hidden"}
              linkTitle={"All Properties"}
              linkTitleStyle={""}
            />
            <ActiveHeaderLink
              toWhere={"contact"}
              inactiveGroupStyle={""}
              icon={null}
              iconStyle={"hidden"}
              linkTitle={"Contact"}
              linkTitleStyle={""}
            />
          </div>
        </div>
      </nav>
      <nav className="relative bg-darkThemeColor py-[1.25rem] md:hidden lg:hidden xl:hidden">
        <div className="container flex justify-between text-bodyColor">
          <div className="flex items-center space-x-[1.5rem]">
            <span
              onClick={(e) => setShowHamMenu(showAccountPanel ? false : true)}
              className="text-[1.375rem] sm:text-h2"
            >
              <PiList />
            </span>
            <span className="block text-default font-poppinsSemibold sm:hidden">
              NyumbaHub
            </span>
          </div>

          <span className="hidden text-h3 sm:block">NyumbaHub</span>

          <div className="flex items-center space-x-[0.925rem] sm:space-x-[1rem]">
            <div className="flex items-center space-x-[0.925rem] sm:space-x-[1rem]">
              <ActiveHeaderLink
                toWhere={"compare"}
                inactiveGroupStyle={""}
                icon={<PiArrowsClockwise />}
                iconStyle={"text-[1.375rem] sm:text-h2"}
                linkTitle={""}
                linkTitleStyle={"hidden"}
              />
              <ActiveHeaderLink
                toWhere={"wishlist"}
                inactiveGroupStyle={""}
                icon={<PiHeart />}
                iconStyle={"text-[1.375rem] sm:text-h2"}
                linkTitle={""}
                linkTitleStyle={"hidden"}
              />
            </div>
            <div className="relative flex flex-col">
              <div
                onClick={(e) => setShowAccountPanel(true)}
                className="relative"
              >
                <span className="text-[1.375rem] sm:text-h2">
                  <PiUser />
                </span>
                {userDetails && (
                  <span className="absolute -top-[0.125rem] -right-[0.3rem] px-[4.5px] py-[4.5px] bg-[#00C300] rounded-full" />
                )}
              </div>
              <div ref={accountRef}>
                {showAccountPanel && <AccountPanel userDetails={userDetails} />}
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
