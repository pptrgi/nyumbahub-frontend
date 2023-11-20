import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";

import GeneralCard from "../propertyCards/GeneralCard";
import { getAllProperties } from "../../reduxFeatures/properties/propertySlice";
import FetchingSpinners from "../FetchingSpinners";
import FadeInAnimation from "../FadeInAnimation";

const RandomProperties = () => {
  const dispatch = useDispatch();
  const propertyState = useSelector((state) => state.property);
  const fetchedProperties = propertyState.properties;

  // Randomizes properties using the Fisher-Yates shuffle algorithm
  // Accepts the array to be shuffled, makes it's copy then returns a shuffled array(the copy)
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

  // Shuffle the fetched properties, if any
  const shuffledProperties =
    fetchedProperties?.length > 0 ? shuffleArray(fetchedProperties) : [];

  // Fetch all properties on page mount/refresh
  useEffect(() => {
    getAllPropertiesNow();
  }, [dispatch]);

  const getAllPropertiesNow = () => {
    dispatch(getAllProperties());
  };

  // Define step when using the scroll buttons to scroll horizontally
  const scrollRight = () => {
    document.getElementById("scrollRandomCards").scrollLeft += 320;
  };
  const scrollLeft = () => {
    document.getElementById("scrollRandomCards").scrollLeft -= 320;
  };

  return (
    <FadeInAnimation>
      <section className="custom_container section">
        <div className="flex flex-col justify-between md480:flex-row md480:mb-[1.5rem]">
          <h3 className="font-poppinsSemibold text-h3 mb-[1.5rem] text-darkThemeColor md480:mb-0">
            Randomly Selected Properties
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
        {propertyState.isLoading ? (
          <FetchingSpinners />
        ) : (
          <>
            {shuffledProperties?.length > 0 ? (
              <div
                id="scrollRandomCards"
                className="flex items-center gap-2 overflow-x-auto w-full scroll-smooth md800:gap-4"
              >
                {shuffledProperties?.slice(0, 5).map((property, index) => {
                  return <GeneralCard key={index} property={property} />;
                })}
              </div>
            ) : (
              <div className="flex justify-center items-center w-full h-[20vh]">
                <div className="flex justify-center items-center">
                  <h3 className="font-poppinsLight text-h3 md480:text-h2">
                    No Selected Properties Yet
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

export default RandomProperties;
