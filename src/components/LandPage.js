import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PiCaretUp, PiCaretDown } from "react-icons/pi";
import { toast } from "react-toastify";
import house from "../static/images/house.png";

const LandPage = () => {
  const [propertyType, setPropetyType] = useState("");
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [selectedType, setSelectedType] = useState(0);
  const [showTypeOptions, setShowTypeOptions] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const typeOptionsRef = useRef();

  console.log(propertyType);

  const allProperyTypes = [
    { name: "Select Property Type" },
    { name: "Apartment" },
    { name: "Maisonette" },
    { name: "Villa" },
    { name: "Bungalow" },
    { name: "Mansion" },
    { name: "Bedsitter" },
  ];

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
    // setPropetyType("");
    // setSelectedType(0);
  };

  useEffect(() => {
    const outsideClickListener = (event) => {
      if (!typeOptionsRef.current.contains(event.target)) {
        setShowTypeOptions(false);
      }
    };
    document.addEventListener("mousedown", outsideClickListener);
    return () => {
      // investigate
      document.removeEventListener("mousedown", outsideClickListener);
    };
  }, []);
  return (
    <div className="relative min-h-screen w-[100%] flex justify-center items-center border-b-[1px] border-gray-100">
      <div className="container flex flex-col gap-[8vh]">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-[0.75rem] items-start">
            <h1 className="capitalize font-poppinsBold text-[2rem] leading-tight text-darkThemeColor sm:text-h1 md:text-large">
              for rent? to buy? <br /> NyumbaHub it.
            </h1>
            <p className="font-poppinsLight text-textColor text-small max-w-[300px] md:text-default md:max-w-md">
              You get a place, you are happy we are happy the world is happy
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="w-full">
            <p className="bg-white px-[1.5rem] py-[1.25rem] font-poppinsLight text-titleColor text-default w-full md:text-center md:text-h3">
              Search for a Property
            </p>
            <form
              onSubmit={handleSearch}
              className=" flex flex-col space-y-[0.75rem] items-center bg-white px-[1.5rem] py-[1.25rem] md:flex-row md:space-x-[0.75rem] md:space-y-0 w-full"
            >
              {/* *********************************************************** */}
              <div ref={typeOptionsRef} className="relative w-full md:w-5/12">
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
                          className={`px-[1rem] py-[0.5rem] w-full hover:bg-ctaColor font-poppinsLight text-textColor ${
                            index == allProperyTypes.length - 1 &&
                            "hover:rounded-b-md"
                          } ${index == 0 && "hover:rounded-t-md"}`}
                          onClick={(e) =>
                            setSelectedType(index) &
                            setShowTypeOptions(false) &
                            setPropetyType(
                              selectedType == 0
                                ? ""
                                : allProperyTypes[selectedType].name
                            )
                          }
                        >
                          {type.name}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
              {/* *********************************************************** */}

              <div className="w-full flex justify-between items-center space-x-1 md:w-5/12">
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="px-[1.5rem] py-[0.75rem] rounded-sm hover:outline-none focus:outline-none w-1/2 border-[1px] border-gray-200 hover:border-lightThemeColor focus:border-lightThemeColor"
                  placeholder="min price"
                />
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="px-[1.5rem] py-[0.75rem] rounded-sm hover:outline-none focus:outline-none w-1/2 border-[1px] border-gray-200 hover:border-lightThemeColor focus:border-lightThemeColor"
                  placeholder="max price"
                />
              </div>
              <button
                type="submit"
                className="bg-ctaColor px-[1.5rem] py-[0.75rem] rounded-[10px] text-bodyColor font-poppinsRegular w-full md:w-2/12"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <span>
        {/* <span className="absolute bottom-[3vh] -right-10 w-[25vw] sm:w-[20vw] md:w-[13vw]"> */}
        <span className="absolute bottom-[7%] -right-10 w-[25%] sm:w-[20%] md:w-[13%] md:bottom-[5%]">
          <img src="/images/house.png" className="w-full" />
        </span>
        {/* <span className="hidden absolute top-[40%] -left-10 lef sm:w-[20vw] md:w-[13vw] md:block"> */}
        <span className="hidden absolute top-[40%] -left-10 w-[13%] md:block">
          <img src="/images/house.png" className="w-full" />
        </span>
      </span>
    </div>
  );
};

export default LandPage;
