import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

const InformationSection = () => {
  return (
    <div className="section container">
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col items-center space-y-[1rem] px-[0.75rem] py-[1rem] border-[1.5px] border-gray-200 rounded-md sm:flex-row sm:space-y-0 sm:space-x-[1rem] sm:py-[1.5rem]">
          <span className="text-large sm:text-[4rem] text-textColor">
            <IoInformationCircleOutline />
          </span>
          <div className="flex flex-col items-center space-y-[0.75rem] sm:items-start">
            <h4 className="text-lightThemeColor font-poppinsSemibold text-center">
              We tour NyumbaHub website for your first tour
            </h4>
            <p className="text-textColor font-poppinsLight text-smaller sm:text-small">
              NyumbaHub is a vacant houses finding service developed by Lifen
              Creatives in 2023. Our goal is to actually help our users rent,
              buy/sell properties, but as per now, be advised, the listed
              properties are non-existent. They have their pricings unvalued,
              images borrowed, and the provided locations do not exist on the
              Kenyan map or in any country for that matter. We'll let you know
              when the actual service is up, in the meantime, browse through our
              vast range of fantasy properties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
