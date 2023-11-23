import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PiCaretUp, PiCaretDown } from "react-icons/pi";

import useClickOutsideToClose from "../hooks/useClickOutsideToClose";
import FadeInAnimation from "./FadeInAnimation";

const LandPage = () => {
  const [propertyType, setPropetyType] = useState("");
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [selectedType, setSelectedType] = useState(0);
  const [showTypeOptions, setShowTypeOptions] = useState(false);
  const navigate = useNavigate();
  const typeOptionsRef = useRef();

  // Define property types to include in the property type options
  const allProperyTypes = [
    { name: "Select Property Type", value: "" },
    { name: "Apartment", value: "Apartment" },
    { name: "Maisonette", value: "Maisonette" },
    { name: "Villa", value: "Villa" },
    { name: "Bungalow", value: "Bungalow" },
    { name: "Mansion", value: "Mansion" },
    { name: "Bedsitter", value: "Bedsitter" },
  ];

  // Passes state to the search-results page via route
  const handleSearch = (e) => {
    e.preventDefault();
    if (propertyType === "") {
      toast.error("Property Type field is required searching");
    } else {
      navigate("search-results", {
        state: {
          propertyType,
          minPrice: minPrice === null ? 0 : minPrice,
          maxPrice: maxPrice === null ? 0 : maxPrice,
        },
      });
    }
    setMaxPrice(null);
    setMinPrice(null);
    setPropetyType("");
    setSelectedType(0);
  };

  // Close the property type options menu upon clicking outside the menu
  useClickOutsideToClose(typeOptionsRef, () => setShowTypeOptions(false));

  return (
    <FadeInAnimation delay={true}>
      <div className="relative custom_container">
        <div className="min-h-screen w-[100%] flex justify-center items-center border-b-[1px] border-gray-100 pt-[4rem] pb-[1rem] xs320:mt-[2rem] md480:pt-[11rem]">
          <div className="flex flex-col gap-[8vh] w-full">
            <div className="flex flex-col items-center">
              <div className="flex flex-col gap-[0.9rem] items-start md480:gap-[1.125rem]">
                <h1 className="capitalize font-poppinsBold text-[1.85rem] leading-tight text-darkThemeColor md480:text-large">
                  home for homes, <br /> homes just for you.
                </h1>
                <p className="font-poppinsLight text-textColor text-small max-w-[300px] md480:text-default md480:max-w-md">
                  We are happy to help you buy a home, rent a house and sell a
                  property. Let us.
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col items-center">
                <div className="w-full md480:w-[80%] md800:w-[90%] lg1023:w-[85%]">
                  <p className="bg-white px-[1.5rem] py-[1.25rem] font-poppinsLight text-titleColor rounded-t-sm text-default w-full md800:text-center md800:text-h3">
                    Search for a Property
                  </p>
                  <form
                    onSubmit={handleSearch}
                    className=" flex flex-col space-y-[0.75rem] items-center bg-white px-[1.5rem] py-[1.25rem] rounded-b-sm w-full md800:flex-row md800:space-x-[0.75rem] md800:space-y-0"
                  >
                    <div
                      ref={typeOptionsRef}
                      className="relative w-full md800:w-5/12"
                    >
                      <div
                        className="flex justify-between items-center w-full border-[1px] border-gray-200 px-[1.5rem] py-[0.75rem] rounded-sm hover:border-lightThemeColor focus:border-lightThemeColor"
                        onClick={(e) =>
                          setShowTypeOptions(showTypeOptions ? false : true)
                        }
                      >
                        <div className="flex flex-col space-y-[0.5rem]">
                          <input
                            value={allProperyTypes[selectedType].name}
                            className="bg-inherit w-full hover:outline-none focus:outline-none"
                            readOnly
                          />
                        </div>
                        <span className="text-default">
                          {showTypeOptions ? <PiCaretUp /> : <PiCaretDown />}
                        </span>
                      </div>
                      {showTypeOptions && (
                        <div className="absolute top-[2.5rem] right-0 z-30 flex flex-col items-start bg-white rounded-md shadow-md mt-[0.5rem] w-full">
                          {allProperyTypes.map((type, index) => {
                            return (
                              <span
                                key={index}
                                className={`px-[1rem] py-[0.5rem] w-full font-poppinsLight text-textColor hover:bg-ctaColor hover:text-bodyColor ${
                                  index == allProperyTypes.length - 1 &&
                                  "hover:rounded-b-md"
                                } ${index == 0 && "hover:rounded-t-md"}`}
                                onClick={(e) =>
                                  setSelectedType(index) &
                                  setPropetyType(type.value) &
                                  setShowTypeOptions(false)
                                }
                              >
                                {type.name}
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <div className="w-full flex justify-between items-center space-x-1 md800:w-5/12">
                      <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        min={1}
                        max={5e8}
                        maxLength={9}
                        className="px-[1.5rem] py-[0.75rem] rounded-sm w-1/2 border-[1px] border-gray-200 hover:border-lightThemeColor focus:border-lightThemeColor"
                        placeholder="min price"
                      />
                      <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        min={1}
                        max={5e8}
                        maxLength={9}
                        className="px-[1.5rem] py-[0.75rem] rounded-sm w-1/2 border-[1px] border-gray-200 hover:border-lightThemeColor focus:border-lightThemeColor"
                        placeholder="max price"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-ctaColor px-[1.5rem] py-[0.75rem] rounded-[10px] text-bodyColor font-poppinsRegular hover:bg-darkThemeColor w-full md800:w-2/12"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <span>
            <span className="absolute bottom-2 -right-10 w-[25%] md480:w-[20%] md800:w-[13%] md800:bottom-5">
              <img
                src="/images/outline-house.png"
                className="w-full"
                loading="eager"
                alt="NyumbaHub Outline House"
              />
            </span>
            <span className="hidden absolute top-[40%] -left-10 w-[13%] md800:block">
              <img
                src="/images/outline-house.png"
                className="w-full"
                loading="eager"
                alt="NyumbaHub Outline House"
              />
            </span>
          </span>
        </div>
      </div>
    </FadeInAnimation>
  );
};

export default LandPage;
