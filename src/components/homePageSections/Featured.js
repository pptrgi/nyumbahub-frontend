import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";
import SpecificCard from "../propertyCards/SpecificCard";
import { getFeaturedCategory } from "../../reduxFeatures/categories/categorySlice";

const Featured = () => {
  const [visible, setVisible] = useState(3);
  const [showButton, setShowButton] = useState(true);
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.featuredCategory);
  const properties = [];

  // Extract individual featured properties and append them to the properties array
  category?.properties?.map((property) => {
    const propertyDetails = property.propertyId;
    properties.push(propertyDetails);
  });

  // Fetch the properties in Featured category on page mount/refresh
  useEffect(() => {
    getFeaturedCategoryNow();
  }, [dispatch]);

  const getFeaturedCategoryNow = () => {
    dispatch(getFeaturedCategory());
  };

  // Display 3 additional properties and remove the "More" button if there no more properties
  // Hide the 'More' button if the properties in the array are 3 or less
  const handleShowMore = () => {
    if (properties?.length > 3) {
      setShowButton(true);
      setVisible((prevVisible) => prevVisible + 3);
    }
    setShowButton(false);
  };

  // Define step when using the scroll buttons to scroll horizontally
  const scrollRight = () => {
    document.getElementById("scrollFeaturedCards").scrollLeft += 320;
  };
  const scrollLeft = () => {
    document.getElementById("scrollFeaturedCards").scrollLeft -= 320;
  };

  return (
    <section className="section container">
      <div className="flex flex-col justify-between sm:flex-row sm:mb-[1.5rem]">
        <h3 className="font-poppinsSemibold text-h3 text-darkThemeColor mb-[1.5rem] sm:mb-0">
          Our Featured Properties
        </h3>
        <div className="flex justify-end items-end mb-[0.75rem] sm:mb-0">
          <div className="flex items-center space-x-3">
            <span
              className="px-[0.5rem] py-[0.25rem] bg-lightThemeColor text-bodyColor text-default rounded-md font-semibolded cursor-pointer group"
              onClick={scrollLeft}
            >
              <PiArrowLeft className="group-hover:-translate-x-1" />
            </span>
            <span
              className="px-[0.5rem] py-[0.25rem] bg-lightThemeColor text-bodyColor text-default rounded-md font-semibolded cursor-pointer group"
              onClick={scrollRight}
            >
              <PiArrowRight className="group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
      {properties?.length > 0 ? (
        <div
          id="scrollFeaturedCards"
          className="flex items-center gap-2 overflow-x-auto w-full scroll-smooth md:gap-4"
        >
          {properties?.slice(0, visible).map((property, index) => {
            return (
              <SpecificCard
                key={index}
                property={property}
                specificVal={category?.name}
              />
            );
          })}
          <div className="flex justify-center items-center">
            {showButton && (
              <button
                onClick={handleShowMore}
                className="text-bodyColor bg-ctaColor px-[1.5rem] py-[0.75rem] w-full hover:bg-darkThemeColor"
              >
                More
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-[20vh]">
          <div className="flex justify-center items-center">
            <h3 className="font-poppinsLight text-h3 sm:text-h2">
              No Featured Properties Yet
            </h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Featured;
