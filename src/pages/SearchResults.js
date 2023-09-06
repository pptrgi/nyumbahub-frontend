import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import SortOptions from "../components/SortOptions";
import { getAllProperties } from "../reduxFeatures/properties/propertySlice";
import Preloader from "../components/PreLoader";
import PageTitler from "../components/PageTitler";

const SearchResults = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);
  const { propertyType, minPrice, maxPrice } = location.state;
  const foundProperties = useSelector((state) => state.property.properties);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      searchPropertiesNow();
      setLoading(false);
    }, 1000);
  }, [propertyType, minPrice, maxPrice, dispatch]);

  const searchPropertiesNow = () => {
    dispatch(getAllProperties({ propertyType, minPrice, maxPrice }));
  };

  return (
    <>
      <PageTitler title={"Search Results"} />
      {loading ? (
        <Preloader />
      ) : (
        <div className="page container">
          <h3 className="font-poppinsLight text-default mt-[5rem] mb-[1.5rem] text-center text-lightThemeColor sm:text-h3 sm:pt-[1rem]">
            Search results
          </h3>
          <div className="grid grid-cols-4 items-center sm:px-[2rem]">
            <p className="font-poppinsLight text-textColor col-span-2">{`${foundProperties?.length} properties found`}</p>
            <div className="flex justify-center items-center space-x-2 col-span-2">
              <span className="font-poppinsLight text-lightThemeColor">
                Sort By:
              </span>
              <SortOptions setSort={setSort} />
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
      )}
    </>
  );
};

export default SearchResults;
