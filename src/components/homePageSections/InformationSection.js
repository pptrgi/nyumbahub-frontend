import { IoInformationCircleOutline } from "react-icons/io5";

import FadeInAnimation from "../FadeInAnimation";

const InformationSection = () => {
  return (
    <FadeInAnimation>
      <div className="custom_container section">
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col items-center space-y-[1rem] px-[0.75rem] py-[1rem] border-[1.5px] border-gray-200 rounded-md md480:flex-row md480:space-y-0 md480:space-x-[1rem] md480:py-[1.5rem]">
            <span className="text-large text-textColor md480:text-[4rem]">
              <IoInformationCircleOutline />
            </span>
            <div className="flex flex-col items-center space-y-[0.75rem] md480:items-start md800:space-y-[1rem]">
              <h4 className="text-lightThemeColor font-poppinsSemibold text-center md800:text-h3">
                We tour NyumbaHub website for your first tour
              </h4>
              <p className="text-textColor font-poppinsLight text-smaller md480:text-small md800:leading-5">
                NyumbaHub is a vacant houses finding service developed by Lifen
                Creatives in 2023. Our goal is to actually help our users rent,
                buy/sell properties, but as per now, be advised, the listed
                properties are non-existent. They have their pricings unvalued,
                images borrowed, and the provided locations do not exist on the
                Kenyan map or in any country for that matter. We'll let you know
                when the actual service is up, in the meantime, browse through
                our varieties of 'fantasy' properties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeInAnimation>
  );
};

export default InformationSection;
