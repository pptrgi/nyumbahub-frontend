import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import {
  PiTextColumns,
  PiTextAlignJustify,
  PiSortAscending,
} from "react-icons/pi";
import SearchResultCard from "../components/searchResult/SearchResultCard";

import image from "../static/images/testImage.jpg";
import test2 from "../static/images/test2.jpg";
import test3 from "../static/images/test3.jpg";
import Pagination from "../components/Pagination";
import DropdownMenu from "../components/DropdownMenu";
import SortOptions from "../components/SortOptions";
import { getAllProperties } from "../reduxFeatures/properties/propertySlice";
import FilterPanelMobile from "../components/FilterPanelMobile";

const AllProperties = () => {
  const [propertyType, setPropertyType] = useState("");
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [sort, setSort] = useState("");
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [showTypeOptions, setShowTypeOptions] = useState(true);
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.property.properties);

  useEffect(() => {
    getAllPropertiesNow();
  }, [minPrice, maxPrice, propertyType, sort]);

  const getAllPropertiesNow = () => {
    dispatch(getAllProperties({ minPrice, maxPrice, propertyType, sort }));
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
      <Breadcrumb pageTitle={`All Properties`} />
      <h2 className="font-poppinsSemibold text-darkThemeColor mt-[1.5rem] mb-[2rem] text-h3">
        Preview the Available Properties
      </h2>
      <div className="flex justify-between gap-[1rem] items-start w-full">
        <div className="w-2/12 sm:w-3/12">
          <div className="hidden flex-col items-start bg-white border-[1.5px] border-gray-200 pt-[1.5rem] pb-[1rem] px-[0.75rem] rounded-lg sm:flex">
            <span className="font-poppinsRegular text-lightThemeColor mb-[0.5rem] font-semibolded">
              Filter By
            </span>
            <form className="px-[0.25rem]">
              <div className="flex flex-col space-y-[1rem] font-poppinsLight text-small">
                <div>
                  <span>Property type</span>
                  <div className="flex flex-col space-y-[1px] px-[0.25rem]">
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
                  </div>
                </div>
                <div className="">
                  <span>Price</span>
                  <div className="flex flex-col space-y-[3px] px-[0.25rem] w-full">
                    <input
                      type="number"
                      placeholder="min price"
                      className="hover:outline-none focus:outline-none px-[1rem] py-[0.25rem] border-[1px] border-gray-200 hover:border-thirtyColor focus:border-thirtyColor rounded-sm w-full"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="max price"
                      className="hover:outline-none focus:outline-none px-[1rem] py-[0.25rem] border-[1px] border-gray-200 hover:border-thirtyColor focus:border-thirtyColor rounded-sm w-full"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/* <div className="flex justify-end items-end w-full mt-[0.75rem]">
                <button
                  type="submit"
                  className="font-poppinsRegular text-small font-semibolded text-ctaColor tracking-wider"
                >
                  Filter
                </button>
              </div> */}
            </form>
          </div>
          <div className="hidden flex-col items-start bg-white border-[1.5px] border-gray-200 my-[1rem] pt-[1.5rem] pb-[1rem] px-[0.75rem] rounded-lg sm:flex">
            <span className="font-poppinsRegular text-lightThemeColor mb-[0.5rem] font-semibolded">
              Other Links
            </span>
            <div className="flex flex-col space-y-[0.5rem] font-poppinsLight text-small px-[0.25rem]">
              <span>Home</span>
              <span>Contact</span>
              <span>Wishlist</span>
            </div>
          </div>
          <div className="relative flex justify-start items-start pt-[0.75rem] sm:hidden">
            <span
              onClick={(e) =>
                setShowFilterPanel(showFilterPanel ? false : true)
              }
              className="px-[0.125rem] bg-gray-100 rounded-md text-h3 text-titleColor"
            >
              <PiSortAscending />
            </span>
            {showFilterPanel && (
              <div className="absolute top-[2.75rem] left-0 z-30 sm:hidden">
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
                <div className="flex flex-col justify-center items-center space-y-[1.5rem] md:space-y-[2rem]">
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
  );
};

export default AllProperties;
