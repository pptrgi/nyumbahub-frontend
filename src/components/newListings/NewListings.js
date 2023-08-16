import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNewListingCategory } from "../../reduxFeatures/categories/categorySlice";
import SpecificCard from "../propertyCards/SpecificCard";
import image from "../../static/images/testImage.jpg";
import test2 from "../../static/images/test2.jpg";
import test3 from "../../static/images/test3.jpg";

import { PiArrowLeft, PiArrowRight } from "react-icons/pi";

const NewListings = () => {
  const [visible, setVisible] = useState(3);
  const [showButton, setShowButton] = useState(true);
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.newListingCategory);
  const properties = [];

  category?.properties?.map((property) => {
    const propertyDetails = property.propertyId;
    properties.push(propertyDetails);
  });

  useEffect(() => {
    getNewListingCategoryNow();
  }, [dispatch]);

  const getNewListingCategoryNow = () => {
    dispatch(getNewListingCategory());
  };
  // const [properties, setProperties] = useState([
  //   {
  //     image: [image, test2, test3],
  //     name: "3 Bedroom Apartment Ruiru",
  //     category: "new listing",
  //     price: "KES 8,000,000",
  //     bathrooms: 4,
  //     bedrooms: 3,
  //     location: "Ruiru Police Station, Thika Road",
  //   },
  //   {
  //     image: [test2, image, test3],
  //     name: "Villa Beach Mombasa Next to Beach",
  //     category: "new listing",
  //     price: "KES 12,000,000",
  //     bathrooms: 3,
  //     bedrooms: 3,
  //     location: "Nyali Beach, Nyali, Mombasa County, Kenya",
  //   },
  //   {
  //     image: [test3, image, test2],
  //     name: "Very Beautiful Mansion for the Rich Kenya",
  //     category: "new listing",
  //     price: "KES 48,500,000",
  //     bathrooms: 5,
  //     bedrooms: 5,
  //     location: "Kiambu Next to Thika Next Around",
  //   },
  //   {
  //     image: [test3, test2, image],
  //     name: "Very Beautiful Mansion for the Rich Kenya",
  //     category: "new listing",
  //     price: "KES 48,500,000",
  //     bathrooms: 5,
  //     bedrooms: 5,
  //     location: "Kiambu Next to Thika Next Around",
  //   },
  //   {
  //     image: [test2, test3, image],
  //     name: "Villa Beach Mombasa Next to Beach",
  //     category: "new listing",
  //     price: "KES 12,000,000",
  //     bathrooms: 3,
  //     bedrooms: 3,
  //     location: "Nyali Beach, Nyali, Mombasa County, Kenya",
  //   },
  //   {
  //     image: [image, test2, test3],
  //     name: "3 Bedroom Apartment Ruiru",
  //     category: "new listing",
  //     price: "KES 8,000,000",
  //     bathrooms: 4,
  //     bedrooms: 3,
  //     location: "Ruiru Police Station, Thika Road",
  //   },
  // ]);

  const handleShowMore = () => {
    setVisible((prevVisible) => prevVisible + 3);
    if (properties.length === visible) {
      setShowButton(false);
    }
  };

  const scrollRight = () => {
    document.getElementById("scrollNewListingCards").scrollLeft += 320;
  };
  const scrollLeft = () => {
    document.getElementById("scrollNewListingCards").scrollLeft -= 320;
  };
  return (
    <div className="section container mb-[10rem]">
      <div className="flex flex-col justify-between sm:flex-row sm:mb-[1.5rem]">
        <h3 className="font-poppinsSemibold text-h3 text-darkThemeColor mb-[1.5rem] sm:mb-0">
          The Most Recent Listings
        </h3>
        <div className="flex justify-end items-end mb-[0.75rem] sm:mb-0">
          <div className="flex items-center space-x-3">
            <span
              className="px-[0.5rem] py-[0.25rem] bg-lightThemeColor text-bodyColor text-default rounded-md font-semibolded"
              onClick={scrollLeft}
            >
              <PiArrowLeft />
            </span>
            <span
              className="px-[0.5rem] py-[0.25rem] bg-lightThemeColor text-bodyColor text-default rounded-md font-semibolded"
              onClick={scrollRight}
            >
              <PiArrowRight />
            </span>
          </div>
        </div>
      </div>
      <div
        id="scrollNewListingCards"
        className="flex items-center gap-2 overflow-x-auto w-full scroll-smooth md:gap-4"
      >
        {properties.slice(0, visible).map((property, index) => {
          return (
            <SpecificCard
              key={index}
              property={property}
              specificVal={category.name}
            />
          );
        })}
        <div className="flex justify-center items-center">
          {showButton && (
            <button
              onClick={handleShowMore}
              className="text-bodyColor bg-ctaColor px-[1.5rem] py-[0.75rem] w-full"
            >
              More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewListings;
