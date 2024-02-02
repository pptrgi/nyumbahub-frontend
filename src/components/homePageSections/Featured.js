import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";

import SpecificCard from "../propertyCards/SpecificCard";
import { getFeaturedCategory } from "../../reduxFeatures/categories/categorySlice";
import FetchingSpinners from "../FetchingSpinners";
import FadeOutAnimation from "../FadeOutAnimation";

const Featured = () => {
  const [visible, setVisible] = useState(3);
  const [showButton, setShowButton] = useState(true);
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.category);
  const category = categoryState.featuredCategory;
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
    <FadeOutAnimation>
      <section className="custom_container section">
        <div className="properties_section-container">
          <h3 className="properties_section-heading">
            Our Featured Properties
          </h3>
          <div className="flex_end mb-[0.75rem] md480:mb-0">
            <div className="flex items-center space-x-3">
              <span
                className="group properties_section-arrow"
                onClick={scrollLeft}
              >
                <PiArrowLeft className="group-hover:-translate-x-1" />
              </span>
              <span
                className="group properties_section-arrow"
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
                id="scrollFeaturedCards"
                className="properties_section-slider"
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
                <div className="flex_center">
                  {showButton && (
                    <button
                      onClick={handleShowMore}
                      className="properties_section-morebtn"
                    >
                      More
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex_center w-full h-[20vh]">
                <div className="flex_center">
                  <h3 className="font-poppinsLight text-h3 md480:text-h2">
                    No Featured Properties Yet
                  </h3>
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </FadeOutAnimation>
  );
};

export default Featured;
