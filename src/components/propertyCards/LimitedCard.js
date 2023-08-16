import React from "react";
import image from "../../static/images/testImage.jpg";
import {
  PiWhatsappLogo,
  PiArrowsClockwise,
  PiArrowLeft,
  PiArrowRight,
  PiHeart,
  PiBedLight,
  PiBathtubLight,
  PiMapPinLight,
  PiPhone,
  PiCaretLeft,
  PiCaretRight,
  PiX,
} from "react-icons/pi";

const LimitedCard = ({ property }) => {
  return (
    <div className="flex flex-col gap-[1rem] bg-white w-full h-[400px] max-w-[320px]">
      <div className="relative w-full h-3/5 overflow-hidden bg-red-200">
        <img
          src={property.image[0]}
          className="object-cover h-full w-full"
        ></img>
        <span className="absolute top-0 right-0 p-4 text-h3 text-bodyColor z-20">
          <PiX />
        </span>

        <div className="flex items-center gap-1 absolute bottom-0 left-0 p-4 z-10 flex-wrap">
          {property.category.map((tag, idx) => {
            return (
              <span
                key={idx}
                className="uppercase font-poppinsLight text-tiny bg-lightGrayCTA text-black px-[0.125rem] rounded-sm"
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
      <div className="w-full h-2/5 px-4">
        <h3 className="font-poppinsBold text-darkThemeColor font-semibolded mb-[1rem]">
          {property.price}
        </h3>
        <h3 className="truncate font-poppinsSemibold mb-[0.125rem] text-lightThemeColor">
          {property.title}
        </h3>
        <p className="truncate font-poppinsLight text-smaller text-textColor sm:text-small">
          {property.location}
        </p>

        <div className="flex justify-between items-center mt-[2rem]">
          <div className="flex items-center space-x-[0.75rem]">
            <div className="flex items-center gap-[4px]">
              <span className="font-poppinsRegular text-lightThemeColor">
                {property.bedrooms}
              </span>
              <span className="text-h3 text-textColor">
                <PiBedLight />
              </span>
            </div>
            <div className="flex items-center gap-[4px]">
              <span className="font-poppinsRegular text-lightThemeColor">
                {property.bathrooms}
              </span>
              <span className="text-h3 text-textColor">
                <PiBathtubLight />
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-[1rem] text-h3 text-textColor">
            <span>
              <PiArrowsClockwise />
            </span>
            <span>
              <PiPhone />
            </span>
            <span>
              <PiWhatsappLogo />
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LimitedCard;
