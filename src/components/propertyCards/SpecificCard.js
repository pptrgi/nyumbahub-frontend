import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addToWishlistAC } from "../../reduxFeatures/properties/propertySlice";
import { addToCompare } from "../../reduxFeatures/properties/propertySlice";
import {
  PiWhatsappLogo,
  PiArrowsClockwise,
  PiHeartDuotone,
  PiBedLight,
  PiBathtubLight,
  PiMapPinLight,
  PiPhone,
  PiCaretLeft,
  PiCaretRight,
  PiArrowsClockwiseDuotone,
} from "react-icons/pi";

const SpecificCard = ({ property, specificVal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageSlide, setImageSlide] = useState(0);
  const propertiesInCompare = useSelector(
    (state) => state.property.compareProperties
  );
  const propertiesInWishlist = useSelector((state) => state.user.userWishlist);
  const foundCategory = property?.category?.find(
    (categry) =>
      categry?.categoryName?.toLowerCase() == specificVal?.toLowerCase()
  );

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

  const alreadyInWishlist = propertiesInWishlist?.find(
    (house) => house?.propertyId?._id == property?._id
  );
  const alreadyInCompare = propertiesInCompare?.find(
    (house) => house?._id == property?._id
  );

  const handleAddToWishlist = (propertyId) => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(addToWishlistAC(propertyId));
    } else {
      toast.error("Sign in to add property to wishlist");
      setTimeout(() => {
        navigate("/signin");
      }, 1800);
    }
  };

  // replace spaces with their encoded values
  let encodedPropertyName = property?.name.split(" ").join("%20");
  return (
    <div className="flex flex-col gap-[1rem] flex-shrink-0 bg-white w-full h-[400px] max-w-[310px]">
      <div className="relative w-full h-6/12 overflow-hidden bg-lightThemeColor">
        <Link to={`/property/${property?._id}`} className="flex w-full h-full">
          {property?.images?.length > 0 ? (
            property?.images?.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image?.imageUrl}
                  className={`${
                    imageSlide === index
                      ? "object-cover h-full w-full"
                      : "hidden"
                  }`}
                  alt="house-property-image"
                />
              );
            })
          ) : (
            <img
              src="/images/no-image.png"
              className="object-cover h-full w-full"
              alt="no-image-placeholder"
            />
          )}
        </Link>
        <span
          onClick={(e) => handleAddToWishlist(property?._id)}
          className={`absolute top-0 right-0 p-4 text-[1.75rem] ${
            alreadyInWishlist ? "text-ctaColor" : "text-bodyColor"
          } z-20 cursor-pointer hover:text-ctaColor`}
        >
          <PiHeartDuotone />
        </span>
        <div className="absolute top-0 left-0 p-4 z-10">
          <Link
            to={`/category/${foundCategory?.categoryId}`}
            className="uppercase font-poppinsLight text-tiny bg-lightGrayCTA text-black px-[0.25rem] rounded-sm cursor-pointer hover:text-darkThemeColor hover:font-poppinsSemibold hover:bg-transparent"
          >
            {specificVal}
          </Link>
        </div>
        {property?.images?.length > 1 && (
          <div className="absolute top-1/2 px-4 w-full">
            <div className="flex justify-between items-center w-full">
              <span
                onClick={prevImage}
                className="p-2 bg-lightGrayCTA text-darkThemeColor rounded-full hover:bg-lightThemeColor hover:text-bodyColor"
              >
                <PiCaretLeft />
              </span>
              <span
                onClick={nextImage}
                className="p-2 bg-lightGrayCTA text-darkThemeColor rounded-full hover:bg-lightThemeColor hover:text-bodyColor"
              >
                <PiCaretRight />
              </span>
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 pl-4 pb-2">
          <span className="font-poppinsBold text-bodyColor font-semibolded">
            {`KES ${property?.price.toLocaleString("en-US")}`}
          </span>
        </div>
      </div>
      <div className="w-full h-6/12 px-4">
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
            <span className="font-poppinsLight text-textColor text-small">
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
            <span className="font-poppinsLight text-textColor text-small">
              Bathrooms
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-[2rem]">
          <Link
            to={`/property/${property?._id}`}
            className="font-poppinsLight text-ctaColor text-smaller hover:text-darkThemeColor sm:text-small"
          >
            View Property
          </Link>
          <div className="flex items-center space-x-[1rem] text-h3 text-textColor">
            <span
              onClick={(e) => dispatch(addToCompare({ ...property }))}
              className={`${
                alreadyInCompare ? "text-ctaColor" : "text-textColor"
              } hover:text-darkThemeColor`}
            >
              {alreadyInCompare ? (
                <PiArrowsClockwiseDuotone />
              ) : (
                <PiArrowsClockwise />
              )}
            </span>
            <span className="hover:text-darkThemeColor">
              <a href="tel:254700119134">
                <PiPhone />
              </a>
            </span>
            <span className="hover:text-darkThemeColor">
              <a
                href={`https://wa.me/254700119134?text=Hi%20NyumbaHub%2C%0A%0AI%27m%20interested%20in%20property%20${encodedPropertyName}`}
              >
                <PiWhatsappLogo />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SpecificCard;
