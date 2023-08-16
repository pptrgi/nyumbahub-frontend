import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import GeneralCard from "./propertyCards/GeneralCard";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";

import image from "../static/images/testImage.jpg";
import test2 from "../static/images/test2.jpg";
import test3 from "../static/images/test3.jpg";
import { getAllProperties } from "../reduxFeatures/properties/propertySlice";

const RandomProperties = () => {
  const dispatch = useDispatch();
  const fetchedProperties = useSelector((state) => state.property.properties);
  console.log(fetchedProperties);

  // randomize properties
  function shuffleArray(propertiesArray) {
    const propertiesArrayCopy = propertiesArray?.slice();
    for (let index = propertiesArrayCopy.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * index + 1);
      [propertiesArrayCopy[index], propertiesArrayCopy[randomIndex]] = [
        propertiesArrayCopy[randomIndex],
        propertiesArrayCopy[index],
      ];
    }
    return propertiesArrayCopy;
  }

  const shuffledProperties = shuffleArray(fetchedProperties);

  useEffect(() => {
    getAllPropertiesNow();
  }, [dispatch]);

  const getAllPropertiesNow = () => {
    dispatch(getAllProperties());
  };
  // const [properties, setProperties] = useState([
  //   {
  //     image: [image, test2, test3],
  //     name: "3 Bedroom Apartment Ruiru",
  //     category: ["new listing", "featured", "for rent"],
  //     price: "KES 8,000,000",
  //     bathrooms: 4,
  //     bedrooms: 3,
  //     location: "Ruiru Police Station, Thika Road",
  //   },
  //   {
  //     image: [test2, image, test3],
  //     name: "Villa Beach Mombasa Next to Beach",
  //     category: ["reduced price", "top seller", "for sale"],
  //     price: "KES 12,000,000",
  //     bathrooms: 3,
  //     bedrooms: 3,
  //     location: "Nyali Beach, Nyali, Mombasa County, Kenya",
  //   },
  //   {
  //     image: [test3, image, test2],
  //     name: "Very Beautiful Mansion for the Rich Kenya",
  //     category: ["featured", "for rent", "reduced price", "top seller"],
  //     price: "KES 48,500,000",
  //     bathrooms: 5,
  //     bedrooms: 5,
  //     location: "Kiambu Next to Thika Next Around",
  //   },
  //   {
  //     image: [test3, test2, image],
  //     name: "Very Beautiful Mansion for the Rich Kenya",
  //     category: ["for sale", "new listing", "featured", "top seller"],
  //     price: "KES 48,500,000",
  //     bathrooms: 5,
  //     bedrooms: 5,
  //     location: "Kiambu Next to Thika Next Around",
  //   },
  //   {
  //     image: [test2, test3, image],
  //     name: "Villa Beach Mombasa Next to Beach",
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
  //     name: "3 Bedroom Apartment Ruiru",
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

  const scrollRight = () => {
    document.getElementById("scrollRandomCards").scrollLeft += 320;
  };
  const scrollLeft = () => {
    document.getElementById("scrollRandomCards").scrollLeft -= 320;
  };
  return (
    <div className="section container">
      <div className="flex flex-col justify-between sm:flex-row sm:mb-[1.5rem]">
        <h3 className="font-poppinsSemibold text-h3 mb-[1.5rem] text-darkThemeColor sm:mb-0">
          Randomly Selected Properties
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
        id="scrollRandomCards"
        className="flex items-center gap-2 overflow-x-auto w-full scroll-smooth md:gap-4"
      >
        {shuffledProperties?.slice(0, 5).map((property, index) => {
          return <GeneralCard key={index} property={property} />;
        })}
      </div>
    </div>
  );
};

export default RandomProperties;
