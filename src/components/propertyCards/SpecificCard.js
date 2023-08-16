import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToWishlistAC } from "../../reduxFeatures/properties/propertySlice";
import {
  addToCompare,
  removeFromCompare,
} from "../../reduxFeatures/properties/propertySlice";
import {
  PiWhatsappLogo,
  PiArrowsClockwise,
  PiArrowLeft,
  PiArrowRight,
  PiHeart,
  PiHeartDuotone,
  PiBedLight,
  PiBathtubLight,
  PiMapPinLight,
  PiPhone,
  PiCaretLeft,
  PiCaretRight,
} from "react-icons/pi";
import { toast } from "react-toastify";
import imagePlaceholder from "../../static/images/no-image.png";

const SpecificCard = ({ property, specificVal }) => {
  const compareArray = useSelector((state) => state.property.compareProperties);
  console.log(compareArray);

  const dispatch = useDispatch();
  const [imageSlide, setImageSlide] = useState(0);

  const nextImage = () => {
    setImageSlide(
      imageSlide === property?.images?.length - 1 ? 0 : imageSlide + 1
    );
  };
  const prevImage = () => {
    setImageSlide(
      imageSlide === 0 ? property?.images?.length - 1 : imageSlide - 1
    );
  };

  return (
    <div className="flex flex-col gap-[1rem] flex-shrink-0 bg-white w-full h-[400px] max-w-[310px]">
      <div className="relative w-full h-3/5 overflow-hidden bg-lightGrayCTA">
        <Link to={`property/${property?._id}`} className="flex w-full h-full">
          {property?.images?.length > 0 ? (
            property?.images?.map((file, index) => {
              return (
                <img
                  key={index}
                  src={file}
                  className={`${
                    imageSlide === index
                      ? "object-cover h-full w-full"
                      : "hidden"
                  }`}
                ></img>
              );
            })
          ) : (
            <img
              src="/images/no-image.png"
              className="object-cover h-full w-full"
            />
          )}
        </Link>
        <span
          onClick={(e) => dispatch(addToWishlistAC(property?._id))}
          className="absolute top-0 right-0 p-4 text-[1.75rem] text-bodyColor z-20"
        >
          <PiHeartDuotone />
        </span>
        <div className="absolute top-0 left-0 p-4 z-10">
          <span className="uppercase font-poppinsLight text-tiny bg-lightGrayCTA text-black px-[0.125rem] rounded-sm">
            {specificVal}
          </span>
        </div>
        {property?.images?.length > 0 && (
          <div className="absolute top-1/2 px-4 w-full">
            <div className="flex justify-between items-center w-full">
              <span
                onClick={prevImage}
                className="p-2 bg-lightGrayCTA text-darkThemeColor rounded-full"
              >
                <PiCaretLeft />
              </span>
              <span
                onClick={nextImage}
                className="p-2 bg-lightGrayCTA text-darkThemeColor rounded-full"
              >
                <PiCaretRight />
              </span>
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 pl-4 pb-2">
          <span className="font-poppinsBold text-bodyColor font-semibolded">
            {`KES ${property?.price}`}
          </span>
        </div>
      </div>
      <div className="w-full h-2/5 px-4">
        <h3 className="truncate font-poppinsSemibold mb-[0.125rem] text-lightThemeColor">
          {property?.name}
        </h3>
        <div className="flex items-center space-x-1 ">
          <span className="text-h3">
            <PiMapPinLight />
          </span>
          <p className="truncate capitalize font-poppinsLight text-smaller text-textColor sm:text-small">
            {`${property?.location?.place}, ${property?.location?.town}, ${property?.location?.county} County`}
          </p>
        </div>
        <div className="flex items-center gap-3 mt-[2rem]">
          <div className="flex flex-col gap-[1px] items-center">
            <div className="flex items-center gap-[4px]">
              <span className="font-poppinsRegular text-lightThemeColor">
                {property?.bedrooms}
              </span>
              <span className="text-default text-textColor">
                <PiBedLight />
              </span>
            </div>
            <span className="text-tiny font-poppinsLight text-textColor sm:text-smaller md:text-smaller lg:text-smaller xl:text-smaller">
              Bedrooms
            </span>
          </div>
          <div className="flex flex-col gap-[1px] items-center">
            <div className="flex items-center gap-[4px]">
              <span className="font-poppinsRegular text-lightThemeColor">
                {property?.bathrooms}
              </span>
              <span className="text-default text-textColor">
                <PiBathtubLight />
              </span>
            </div>
            <span className="text-tiny font-poppinsLight text-textColor sm:text-smaller md:text-smaller lg:text-smaller xl:text-smaller">
              Bathrooms
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-[2rem]">
          <Link
            to={`property/${property?._id}`}
            className="font-poppinsLight text-ctaColor text-smaller sm:text-small md:text-small lg:text-small xl:text-small"
          >
            View Property
          </Link>
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

export default SpecificCard;
