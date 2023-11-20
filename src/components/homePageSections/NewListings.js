import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";

import SpecificCard from "../propertyCards/SpecificCard";
import { getNewListingCategory } from "../../reduxFeatures/categories/categorySlice";
import FetchingSpinners from "../FetchingSpinners";
import FadeInAnimation from "../FadeInAnimation";

const NewListings = () => {
  const [visible, setVisible] = useState(3);
  const [showButton, setShowButton] = useState(true);
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.category);
  const category = categoryState.newListingCategory;
  const properties = [];

  // Extract individual newly-listed properties and append them to the properties array
  category?.properties?.map((property) => {
    const propertyDetails = property.propertyId;
    properties.push(propertyDetails);
  });

  // Fetch the properties in New Listing category on page mount/refresh
  useEffect(() => {
    getNewListingCategoryNow();
  }, [dispatch]);

  const getNewListingCategoryNow = () => {
    dispatch(getNewListingCategory());
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
    document.getElementById("scrollNewListingCards").scrollLeft += 320;
  };
  const scrollLeft = () => {
    document.getElementById("scrollNewListingCards").scrollLeft -= 320;
  };

  return (
    <FadeInAnimation>
      <section className="custom_container section">
        <div className="flex flex-col justify-between md480:flex-row md480:mb-[1.5rem]">
          <h3 className="font-poppinsSemibold text-h3 text-darkThemeColor mb-[1.5rem] md480:mb-0">
            The Most Recent Listings
          </h3>
          <div className="flex justify-end items-end mb-[0.75rem] md480:mb-0">
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
        {categoryState.isLoading ? (
          <FetchingSpinners />
        ) : (
          <>
            {properties?.length > 0 ? (
              <div
                id="scrollNewListingCards"
                className="flex items-center gap-2 overflow-x-auto w-full scroll-smooth md800:gap-4"
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
                  <h3 className="font-poppinsLight text-h3 md480:text-h2">
                    No Newly Listed Properties Yet
                  </h3>
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </FadeInAnimation>
  );
};

export default NewListings;
