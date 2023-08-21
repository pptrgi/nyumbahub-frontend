import React from "react";
import image from "../../static/images/testImage.jpg";
import { toast } from "react-toastify";
import { addToCompare } from "../../reduxFeatures/properties/propertySlice";
import { useDispatch, useSelector } from "react-redux";
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
import { Link } from "react-router-dom";

const LimitedCard = ({ property }) => {
  const dispatch = useDispatch();
  const compareArray = useSelector((state) => state.property.compareProperties);
  return (
    <div className="flex flex-col gap-[1rem] bg-white w-full h-[400px] max-w-[320px]">
      <div className="relative w-full h-3/5 overflow-hidden bg-lightThemeColor">
        <img
          src={
            property?.images?.length > 0
              ? property?.images[0]
              : "/images/no-image.png"
          }
          className="object-cover h-full w-full"
        ></img>
        <span className="absolute top-0 right-0 p-4 text-h3 text-bodyColor z-20">
          <PiX />
        </span>

        <div className="flex items-center gap-1 absolute bottom-0 left-0 p-4 z-10 flex-wrap">
          {property?.category?.map((item, idx) => {
            return (
              <Link
                key={idx}
                to={`category/${item.categoryId}`}
                className="uppercase font-poppinsLight text-tiny bg-lightGrayCTA text-black px-[0.125rem] rounded-sm"
              >
                {item.categoryName}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full h-2/5 px-4">
        <h3 className="font-poppinsBold text-darkThemeColor font-semibolded mb-[1rem]">
          {`KES ${property?.price.toLocaleString("en-US")}`}
        </h3>
        <h3 className="truncate font-poppinsSemibold mb-[0.125rem] text-lightThemeColor">
          {property?.name}
        </h3>
        <p className="truncate capitalize font-poppinsLight text-smaller text-textColor sm:text-small">
          {`${property?.location?.place}, ${property?.location?.town}, ${property?.location?.county} County`}
        </p>

        <div className="flex justify-between items-center mt-[2rem]">
          <div className="flex items-center space-x-[0.75rem]">
            <div className="flex items-center gap-[4px]">
              <span className="font-poppinsRegular text-lightThemeColor">
                {property?.bedrooms}
              </span>
              <span className="text-h3 text-textColor">
                <PiBedLight />
              </span>
            </div>
            <div className="flex items-center gap-[4px]">
              <span className="font-poppinsRegular text-lightThemeColor">
                {property?.bathrooms}
              </span>
              <span className="text-h3 text-textColor">
                <PiBathtubLight />
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-[1rem] text-h3 text-textColor">
            <span
              onClick={(e) =>
                dispatch(addToCompare({ ...property })) &
                toast.success("Property added to compare")
              }
            >
              <PiArrowsClockwise />
            </span>
            <span>
              <a href="tel:254700119134">
                <PiPhone />
              </a>
            </span>
            <span>
              <a href="https://wa.me/254700119134">
                <PiWhatsappLogo />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedCard;
