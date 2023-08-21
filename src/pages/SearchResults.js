import { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";
import image from "../static/images/testImage.jpg";
import test2 from "../static/images/test2.jpg";
import test3 from "../static/images/test3.jpg";

import Pagination from "../components/Pagination";
import SortOptions from "../components/SortOptions";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProperties } from "../reduxFeatures/properties/propertySlice";

const SearchResults = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { propertyType, minPrice, maxPrice } = location.state;

  const foundProperties = useSelector((state) => state.property.properties);

  useEffect(() => {
    searchPropertiesNow();
  }, [propertyType, minPrice, maxPrice, dispatch]);

  const searchPropertiesNow = () => {
    dispatch(getAllProperties({ propertyType, minPrice, maxPrice }));
  };

  return (
    <div className="page container">
      <h3 className="font-poppinsLight text-default mt-[5rem] mb-[1.5rem] text-center text-lightThemeColor sm:text-h3 sm:pt-[1rem]">
        Search results
      </h3>
      <div className="grid grid-cols-4 items-center sm:px-[2rem]">
        <p className="font-poppinsLight text-textColor col-span-2">{`${foundProperties.length} properties found`}</p>
        <div className="flex justify-center items-center space-x-2 col-span-2">
          <span className="font-poppinsLight text-lightThemeColor">
            Sort By:
          </span>
          {/* <select className="bg-whiteColor border-[1px] border-gray-200 text-textColor px-[0.5rem] py-[0.25rem] rounded-md w-1/2 text-smaller focus:outline-none hover:outline-none focus:border-[1px] hover:border-[1px] focus:border-thirtyColor sm:text-small sm:w-fit">
            <option>Default</option>
            <option>High price first</option>
            <option>Low price first</option>
            <option>Name (A-Z)</option>
            <option>Name (Z-A)</option>
          </select> */}
          <SortOptions />
        </div>
      </div>
      <Pagination
        properties={foundProperties}
        itemsPerPage={3}
        wrapperStyling={
          "grid grid-cols-1 items-center gap-2 mt-[1.5rem] mb-[3rem] sm:grid-cols-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-3"
        }
      />
    </div>
  );
};

export default SearchResults;
