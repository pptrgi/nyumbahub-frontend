import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PiTextColumns, PiTextAlignJustify } from "react-icons/pi";
import { IoOptionsOutline } from "react-icons/io5";
import Breadcrumb from "../components/Breadcrumb";
import FilterPanelMobile from "../components/FilterPanelMobile";
import SortOptions from "../components/SortOptions";
import { getAllProperties } from "../reduxFeatures/properties/propertySlice";
import Pagination from "../components/Pagination";
import PreLoader from "../components/PreLoader";
import PageTitler from "../components/PageTitler";

const AllProperties = () => {
  const [propertyType, setPropertyType] = useState("");
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [sort, setSort] = useState("");
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [showTypeOptions, setShowTypeOptions] = useState(true);
  const dispatch = useDispatch();
  const propertiesState = useSelector((state) => state.property);
  const properties = propertiesState?.properties;

  useEffect(() => {
    getAllPropertiesNow();
  }, [minPrice, maxPrice, propertyType, sort]);

  const getAllPropertiesNow = () => {
    dispatch(getAllProperties({ minPrice, maxPrice, propertyType, sort }));
  };

  return (
    <>
      {propertiesState?.isLoading == true ? (
        <PreLoader />
      ) : (
        <div className="page container">
          <Breadcrumb pageTitle={`All Properties`} />
          <PageTitler title={"All Properties"} />
          <h2 className="font-poppinsSemibold text-darkThemeColor mt-[1.5rem] mb-[2rem] text-h3">
            Preview the Available Properties
          </h2>
          <div className="flex justify-between gap-[1rem] items-start w-full">
            <div className="w-2/12 sm:w-3/12">
              <div className="hidden flex-col items-start bg-white border-[1.5px] border-gray-200 pt-[1.5rem] pb-[1rem] px-[0.75rem] rounded-lg w-full sm:flex">
                <span className="font-poppinsRegular text-lightThemeColor mb-[0.5rem] font-semibolded">
                  Filter By
                </span>
                <div className="px-[0.25rem] w-full">
                  <div className="flex flex-col space-y-[1rem] font-poppinsLight text-small">
                    <div>
                      <span>Property type</span>
                      <form className="flex flex-col space-y-[1px] px-[0.25rem]">
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="propertyType"
                            onClick={(e) => setPropertyType("Apartment")}
                          />
                          <label>Apartment</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="propertyType"
                            onClick={(e) => setPropertyType("Maisonette")}
                          />
                          <label>Maisonette</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="propertyType"
                            onClick={(e) => setPropertyType("Villa")}
                          />
                          <label>Villa</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="propertyType"
                            onClick={(e) => setPropertyType("Bungalow")}
                          />
                          <label>Bungalow</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="propertyType"
                            onClick={(e) => setPropertyType("Mansion")}
                          />
                          <label>Mansion</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="propertyType"
                            onClick={(e) => setPropertyType("Bedsitter")}
                          />
                          <label>Bedsitter</label>
                        </div>
                      </form>
                    </div>
                    <div className="w-full">
                      <span>Price</span>
                      <form className="flex flex-col space-y-[3px] px-[0.25rem] w-full">
                        <input
                          type="number"
                          placeholder="min price"
                          className="hover:outline-none focus:outline-none px-[1rem] py-[0.25rem] border-[1px] border-gray-200 hover:border-lightThemeColor focus:border-lightThemeColor rounded-sm w-full"
                          value={minPrice}
                          onChange={(e) => setMinPrice(e.target.value)}
                          min={1}
                          max={5e8}
                        />
                        <input
                          type="number"
                          placeholder="max price"
                          className="hover:outline-none focus:outline-none px-[1rem] py-[0.25rem] border-[1px] border-gray-200 hover:border-lightThemeColor focus:border-lightThemeColor rounded-sm w-full"
                          value={maxPrice}
                          onChange={(e) => setMaxPrice(e.target.value)}
                          min={1}
                          max={5e8}
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start bg-white border-[1.5px] border-gray-200 my-[1rem] pt-[1.5rem] pb-[1rem] px-[0.75rem] rounded-lg sm:flex">
                <span className="font-poppinsRegular text-lightThemeColor mb-[0.5rem] font-semibolded">
                  Other Links
                </span>
                <div className="flex flex-col space-y-[0.5rem] font-poppinsRegular text-small px-[0.25rem]">
                  <Link to="/" className="hover:text-ctaColor">
                    Home
                  </Link>
                  <Link to="/contact" className="hover:text-ctaColor">
                    Contact
                  </Link>
                  <Link to="/wishlist" className="hover:text-ctaColor">
                    Wishlist
                  </Link>
                </div>
              </div>
              <div className="relative flex justify-start items-start pt-[0.75rem] sm:hidden">
                <span
                  onClick={(e) =>
                    setShowFilterPanel(showFilterPanel ? false : true)
                  }
                  className="px-[0.5rem] py-[0.25rem] bg-gray-100 rounded-sm text-[1.75rem] text-textColor"
                >
                  <IoOptionsOutline />
                </span>

                {showFilterPanel && (
                  <div className="absolute top-[3.25rem] left-0 z-30 sm:hidden">
                    <FilterPanelMobile
                      setPropertyType={setPropertyType}
                      setMinPrice={setMinPrice}
                      setMaxPrice={setMaxPrice}
                      maxPrice={maxPrice}
                      minPrice={minPrice}
                      setShowFilterPanel={setShowFilterPanel}
                      setShowTypeOptions={setShowTypeOptions}
                      showTypeOptions={showTypeOptions}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="w-10/12 sm:w-9/12">
              <div className="flex flex-col space-y-[1rem] items-center">
                <div className="w-full py-[0.25rem] px-[0.5rem] bg-white flex justify-between items-center">
                  <div className="flex space-x-2 items-center">
                    <span className="">Sort By:</span>
                    <SortOptions setSort={setSort} />
                  </div>
                  <div className="hidden space-x-2 items-center sm:flex">
                    <span>Arrange:</span>
                    <div className="flex items-center space-x-2">
                      <span className="px-[0.125rem] bg-gray-100 rounded-md text-h3">
                        <PiTextColumns />
                      </span>
                      <span className="px-[0.125rem] bg-gray-100 rounded-md text-h3">
                        <PiTextAlignJustify />
                      </span>
                    </div>
                  </div>
                </div>
                {properties.length > 0 ? (
                  <Pagination
                    properties={properties}
                    itemsPerPage={4}
                    wrapperStyling={
                      "grid grid-cols-1 items-center gap-4 md:grid-cols-2"
                    }
                  />
                ) : (
                  <div className="flex justify-center items-center w-full h-[30vh]">
                    <div className="flex justify-center items-center">
                      <h3 className="font-poppinsLight text-h3 sm:text-h2">
                        No Properties Yet
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllProperties;
