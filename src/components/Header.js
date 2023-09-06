import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
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
import DropdownMenu from "./DropdownMenu";
import ActiveHeaderLink from "./ActiveHeaderLink";
import HamburgerMenu from "./HamburgerMenu";
import AccountPanel from "./AccountPanel";

const Header = () => {
  const [showHamMenu, setShowHamMenu] = useState(false);
  const [showAccountPanel, setShowAccountPanel] = useState(false);
  const menuRef = useRef();
  const accountRef = useRef();
  const accountMobileRef = useRef();
  const userDetails = useSelector((state) => state.user.user.user);
  console.log(userDetails);

  // listen for events that are outside the menu panel while it is open to close it
  useEffect(() => {
    const outsideClickListener = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setShowHamMenu(false);
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
                  <PiTwitterLogo />
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
          <div className="container flex justify-between py-[1.25rem] text-bodyColor sm:px-[1rem]">
            <span className="font-poppinsSemibold text-h2 font-mediumWeight">
              NyumbaHub
            </span>
            <div className="flex items-center space-x-[1rem] tracking-wider lg:space-x-[1.5rem]">
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
                  onClick={(e) =>
                    setShowAccountPanel(showAccountPanel ? false : true)
                  }
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
          <div className="container flex justify-start space-x-[1.5rem] text-bodyColor text-small tracking-wider py-[0.75rem] md:px-[1rem]">
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
      <nav className="relative bg-darkThemeColor py-[1.25rem] md:hidden">
        <div className="container flex justify-between text-bodyColor">
          <div className="flex items-center space-x-[1.5rem]">
            <span
              onClick={(e) => setShowHamMenu(true)}
              className="text-[1.375rem] hover:text-ctaColor sm:text-h2"
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
                inactiveGroupStyle={"group"}
                icon={<PiArrowsClockwise />}
                iconStyle={
                  "text-[1.375rem] group-hover:text-ctaColor sm:text-h2"
                }
                linkTitle={""}
                linkTitleStyle={"hidden"}
              />
              <ActiveHeaderLink
                toWhere={"wishlist"}
                inactiveGroupStyle={"group"}
                icon={<PiHeart />}
                iconStyle={
                  "text-[1.375rem] group-hover:text-ctaColor sm:text-h2"
                }
                linkTitle={""}
                linkTitleStyle={"hidden"}
              />
            </div>
            <div className="relative flex flex-col">
              <div
                onClick={(e) =>
                  setShowAccountPanel(showAccountPanel ? false : true)
                }
                className="relative"
              >
                <span className="text-[1.375rem] sm:text-h2">
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
                    setShowAccountPanel={setShowAccountPanel}
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
