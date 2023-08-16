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

  // const [properties, setProperties] = useState([
  //   {
  //     image: [image, test2, test3],
  //     title: "3 Bedroom Apartment Ruiru",
  //     category: ["new listing", "featured", "for rent"],
  //     price: "KES 8,000,000",
  //     bathrooms: 4,
  //     bedrooms: 3,
  //     location: "Ruiru Police Station, Thika Road",
  //   },
  //   {
  //     image: [test2, image, test3],
  //     title: "Villa Beach Mombasa Next to Beach",
  //     category: ["reduced price", "top seller", "for sale"],
  //     price: "KES 12,000,000",
  //     bathrooms: 3,
  //     bedrooms: 3,
  //     location: "Nyali Beach, Nyali, Mombasa County, Kenya",
  //   },
  //   {
  //     image: [test3, image, test2],
  //     title: "Very Beautiful Mansion for the Rich Kenya",
  //     category: ["featured", "for rent", "reduced price", "top seller"],
  //     price: "KES 48,500,000",
  //     bathrooms: 5,
  //     bedrooms: 5,
  //     location: "Kiambu Next to Thika Next Around",
  //   },
  //   {
  //     image: [test3, test2, image],
  //     title: "Very Beautiful Mansion for the Rich Kenya",
  //     category: ["for sale", "new listing", "featured", "top seller"],
  //     price: "KES 48,500,000",
  //     bathrooms: 5,
  //     bedrooms: 5,
  //     location: "Kiambu Next to Thika Next Around",
  //   },
  //   {
  //     image: [test2, test3, image],
  //     title: "Villa Beach Mombasa Next to Beach",
  //     category: [
  //       "new listing",
  //       "featured",
  //       "reduced price",
  //       "top seller",
  //       "for sale",
  //     ],
  //     price: "KES 12,000,000",
  //     bathrooms: 3,
  //     bedrooms: 3,
  //     location: "Nyali Beach, Nyali, Mombasa County, Kenya",
  //   },
  //   {
  //     image: [image, test2, test3],
  //     title: "3 Bedroom Apartment Ruiru",
  //     category: [
  //       "new listing",
  //       "featured",
  //       "for rent",
  //       "reduced price",
  //       "top seller",
  //     ],
  //     price: "KES 8,000,000",
  //     bathrooms: 4,
  //     bedrooms: 3,
  //     location: "Ruiru Police Station, Thika Road",
  //   },
  // ]);
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
