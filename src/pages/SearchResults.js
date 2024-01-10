import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Pagination from "../components/Pagination";
import SortOptions from "../components/SortOptions";
import { getAllProperties } from "../reduxFeatures/properties/propertySlice";
import Preloader from "../components/PreLoader";
import PageTitler from "../components/PageTitler";
import { sortProperties } from "../utils/sortProperties";

const SearchResults = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [sort, setSort] = useState("");
  const { propertyType, minPrice, maxPrice } = location.state;
  const foundPropertiesState = useSelector((state) => state.property);
  const foundProperties = foundPropertiesState?.properties;

  // Fetch properties according to the search criteria
  // Re-fetch when the criteria changes
  useEffect(() => {
    searchPropertiesNow();
  }, [propertyType, minPrice, maxPrice, dispatch]);

  const searchPropertiesNow = () => {
    dispatch(getAllProperties({ propertyType, minPrice, maxPrice }));
  };

  // Sort the found properties
  const sortedProperties = sortProperties(sort, [...foundProperties]); // making a copy of foundProperties array because foundProperties itself is read-only

  return (
    <>
      <PageTitler title={"Search Results"} />
      {foundPropertiesState?.isLoading == true ? (
        <Preloader />
      ) : (
        <div className="custom_container pt-[5rem] pb-[3rem] md800:pt-[11rem]">
          <h3 className="font-poppinsLight text-default text-center text-lightThemeColor mb-[1rem] md800:mb-[1.5rem] md480:text-h3">
            Search results
          </h3>
          <div className="grid grid-cols-4 items-center md480:px-[2rem]">
            <p className="font-poppinsLight text-textColor col-span-2">{`${foundProperties?.length} properties found`}</p>
            <div className="flex justify-center items-center space-x-2 col-span-2">
              <span className="font-poppinsLight text-lightThemeColor">
                Sort By:
              </span>
              <SortOptions setSort={setSort} />
            </div>
          </div>
          <Pagination
            properties={sortedProperties}
            itemsPerPage={3}
            wrapperStyling={
              "grid grid-cols-1 items-center gap-2 mt-[1.5rem] mb-[3rem] md480:grid-cols-2 md800:grid-cols-2 md800:gap-4 lg1023:grid-cols-3"
            }
          />
        </div>
      )}
    </>
  );
};

export default SearchResults;
