import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOnePropertyAC } from "../reduxFeatures/properties/propertySlice";
import Breadcrumb from "../components/Breadcrumb";
import WishlistCard from "../components/wishlist/WishlistCard";
import {
  PiHeart,
  PiMapPin,
  PiCheckCircle,
  PiPhone,
  PiWhatsappLogo,
  PiEnvelope,
} from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import test2 from "../static/images/test2.jpg";
import test3 from "../static/images/test3.jpg";
import city from "../static/images/testImage.jpg";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const property = useSelector((state) => state.property.property);

  useEffect(() => {
    getOnePropertyNow();
  }, [dispatch]);

  const getOnePropertyNow = () => {
    dispatch(getOnePropertyAC(id));
  };
  // const [property, setProperties] = useState([
  //   {
  //     name: "Airbnb Lamu KES 7000 Best Experience",
  //     description:
  //       "Like your pastor always says, you need a tranquil serene environment a day before or after travels and tours or when you just wanna stay and chill. They mean at our place.\nNow let's talk convenience\nEach and every one of your 7 girlfriends brought their own cars? You  drove them by bus? Our ample parking knows no bounds.\nHow would cinema experience feel like when brought to your room, from the tv screen size to the seating sets... and free popcorns. You'll tell us.\nBath tub or shower? Hot or cold? Inside or outside?\nTumbo kwanza. Putting that into consideration, we'll serve you what want, when you want it and wherever you want it. Also try our new recipes.\nYou know how long it'll take you to get to the beach? 3mins, for Kipchoge that'll be 1min:59sec.\nLet's take a tour\nThe interior is well lit, and the walls wallmastered/ Has a 6 by 6 bed, dining area, coffee table inside and outside. The rooms second door opens to a balcony that gives access to a panoramic view of Indian Ocean while still enjoying the breeze that comes from it. There's a lift in the establishment and telephone service.\nOn top of all these, you'll enjoy a remarkable service. You're welcome",
  //     price: 7000,
  //     type: {
  //       typeName: "Airbnb",
  //       typeId: "64b23e093567c004de3bf4a1",
  //     },
  //     category: [
  //       {
  //         categoryName: "For Rent",
  //         categoryId: "64b23f6f3567c004de3bf4c3",
  //       },
  //       {
  //         categoryName: "Reduced Price",
  //         categoryId: "64b23f983567c004de3bf4cf",
  //       },
  //       {
  //         categoryName: "Featured",
  //         categoryId: "64b23f843567c004de3bf4c9",
  //       },
  //       {
  //         categoryName: "Top Seller",
  //         categoryId: "64b23fa93567c004de3bf4d2",
  //       },
  //     ],
  //     location: {
  //       place: "antana beach",
  //       town: "lamu",
  //       county: "lamu",
  //       country: "Kenya",
  //       postalCode: 2003,
  //     },
  //     bedrooms: 1,
  //     bathrooms: 2,
  //     features: [
  //       "Bathtub",
  //       "Parking space",
  //       "24hr manned security",
  //       "Lift",
  //       "Telephone service",
  //       "Balcony",
  //       "Dining area",
  //       "Controlled access",
  //     ],
  //     reviews: [
  //       {
  //         reviewerName: "Anita Mluyha",
  //         reviewBody: "Damn this is good, buying soon",
  //       },
  //       {
  //         reviewerName: "Bob Mkanaj",
  //         reviewBody:
  //           "Damn this is good, buying soon. Damn this is good, buying soon. Damn this is good, buying soon",
  //       },
  //       {
  //         reviewerName: "Janita Worker",
  //         reviewBody:
  //           "Damn this is good, buying soon. Damn this is good, buying soon",
  //       },
  //       {
  //         reviewerName: "Olover Admin",
  //         reviewBody:
  //           "Damn this is good, buying soon. Damn this is good, buying soon. Damn this is good, buying soon. Damn this is good, buying soon",
  //       },
  //       {
  //         reviewerName: "Jackline Greens",
  //         reviewBody: "Damn this is good, buying soon. Damn this is good.",
  //       },
  //       {
  //         reviewerName: "Janita Worker",
  //         reviewBody:
  //           "Damn this is good, buying soon. Damn this is good, buying soon",
  //       },
  //     ],
  //   },
  // ]);

  // const [reviews, setReviews] = useState([
  //   {
  //     reviewerName: "Anita Mluyha",
  //     reviewBody: "Damn this is good, buying soon",
  //   },
  //   {
  //     reviewerName: "Bob Mkanaj",
  //     reviewBody:
  //       "Damn this is good, buying soon. Damn this is good, buying soon. Damn this is good, buying soon",
  //   },
  //   {
  //     reviewerName: "Olover Admin",
  //     reviewBody:
  //       "Damn this is good, buying soon. Damn this is good, buying soon. Damn this is good, buying soon. Damn this is good, buying soon",
  //   },
  //   {
  //     reviewerName: "Jackline Greens",
  //     reviewBody: "Damn this is good, buying soon. Damn this is good.",
  //   },
  // ]);

  return (
    <div className="page container mb-[10rem]">
      <span className="text-tiny truncate sm:text-default">
        <Breadcrumb pageTitle={`${property?.name}`} />
      </span>
      <div className="flex justify-center items-center w-[100%] sm:mt-[1rem]">
        <div className="w-full py-[1rem] px-[0.5rem] sm:px-[1rem]">
          {/* whole page container here */}

          <div className="flex flex-col-reverse gap-[3rem] items-start w-full sm:flex-col">
            {/* titles and images container */}
            <div className="flex flex-col space-y-[1.5rem] w-full">
              {/* titles */}
              <div className="flex flex-col space-y-[0.5rem]">
                <h3 className="text-darkThemeColor font-poppinsSemibold text-default truncate sm:text-h3">
                  {property?.name}
                </h3>
                <div className="flex space-x-1 items-center">
                  <span className="text-textColor text-h3">
                    <PiMapPin />
                  </span>
                  <div className="flex items-center truncate">
                    <p className="capitalize font-poppinsLight text-textColor">
                      {`${property?.location?.place}, ${property?.location?.town}, ${property?.location?.county} County`}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {property?.category?.map((categ, index) => {
                  return (
                    <span
                      key={index}
                      className="font-poppinsLight text-tiny px-[0.125rem] bg-textColor text-white rounded-sm tracking-wide"
                    >
                      {categ?.categoryName}
                    </span>
                  );
                })}
              </div>

              <div className="flex justify-between w-full items-center">
                <h3 className="text-darkThemeColor font-poppinsBold text-default font-semibolded sm:text-h3">{`KES ${property?.price},000`}</h3>
                <span className="text-darkThemeColor text-h2 font-semibolded">
                  <PiHeart />
                </span>
              </div>
              <div className="flex space-x-[1.25rem]">
                <span className="font-poppinsRegular">Date Added:</span>
                <span className="font-poppinsLight">March 2nd, 2023</span>
              </div>
            </div>

            {property?.images?.length > 0 ? (
              <div className="relative flex flex-col gap-[2px] w-full max-h-[45vh] items-center overflow-hidden">
                {/* images */}
                <div className="flex items-center gap-[2px] w-full h-11/12">
                  <img
                    src={test3}
                    className="w-full h-full object-cover sm:w-1/2"
                  />
                  <img
                    src={city}
                    className="hidden w-1/2 h-full object-cover sm:block"
                  />
                </div>
                <div className="flex gap-[2px] items-center w-full h-1/12">
                  <img src={test3} className="w-1/3 h-full object-cover" />
                  <img src={city} className="w-1/3 h-full object-cover" />
                  <img src={test2} className="w-1/3 h-full object-cover" />
                </div>
              </div>
            ) : (
              <div className="w-full h-[30vh] overflow-hidden lg:h-[40vh]">
                <img
                  src="/images/no-image.png"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col gap-[2rem] mt-[3rem]">
            {/* all other property details */}
            <div>
              <h3 className="font-poppinsSemibold text-lightThemeColor font-semibolded border-b-[1px] border-gray-200 mb-[1rem] pb-[0.25rem]">
                Basic Info
              </h3>
              <div className="grid grid-cols-2 items-start gap-3 w-full truncate">
                <div className="flex w-1/2 items-start gap-[6px]">
                  <span className="text-textColor font-poppinsRegular">
                    Type:
                  </span>
                  <span className="text-textColor font-poppinsLight">
                    {property?.type?.typeName}
                  </span>
                </div>
                <div className="flex w-1/2 items-start gap-[6px]">
                  <span className="text-textColor font-poppinsRegular">
                    Price:
                  </span>
                  <span className="text-textColor font-poppinsLight">
                    {property?.price}
                  </span>
                </div>
                <div className="flex w-1/2 items-start gap-[6px]">
                  <span className="text-textColor font-poppinsRegular">
                    Bedrooms:
                  </span>
                  <span className="text-textColor font-poppinsLight">
                    {property?.bedrooms}
                  </span>
                </div>
                <div className="flex w-1/2 items-start gap-[6px]">
                  <span className="text-textColor font-poppinsRegular">
                    Bathrooms:
                  </span>
                  <span className="text-textColor font-poppinsLight">
                    {property?.bathrooms}
                  </span>
                </div>
                <div className="flex w-1/2 items-start gap-[6px]">
                  <span className="text-textColor font-poppinsRegular">
                    Location:
                  </span>
                  <span className="text-textColor font-poppinsLight capitalize">
                    {`${property?.location?.county} county`}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-poppinsSemibold text-lightThemeColor font-semibolded border-b-[1px] border-gray-200 mb-[1rem] pb-[0.25rem]">
                Description
              </h3>
              <div>
                {/* split the decription into an array paragraphs */}
                {property?.description?.split("\n").map((paragraph, index) => {
                  return (
                    <p
                      key={index}
                      className="mb-[0.5rem] text-textColor font-poppinsLight"
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="font-poppinsSemibold text-lightThemeColor font-semibolded border-b-[1px] border-gray-200 mb-[1rem] pb-[0.25rem]">
                Features
              </h3>
              <div className="grid grid-cols-2 items-start gap-3 w-full truncate">
                {property?.features?.map((feature, index) => {
                  return (
                    <div
                      key={index}
                      className="flex w-1/2 items-center gap-[6px]"
                    >
                      <span className="text-textColor font-poppinsRegular">
                        <IoMdCheckmarkCircleOutline />
                      </span>
                      <span className="text-textColor font-poppinsLight">
                        {feature}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="">
              <h3 className="font-poppinsSemibold text-lightThemeColor font-semibolded border-b-[1px] border-gray-200 mb-[1rem] pb-[0.25rem]">
                Location
              </h3>
              <div className="flex flex-col justify-between w-full gap-[2rem] sm:gap-0 sm:items-start sm:flex-row pb-[0.25rem]">
                <div className="sm:w-1/2">
                  <div className="grid grid-cols-1 items-start gap-3 w-full truncate">
                    <div className="flex items-start gap-[1rem]">
                      <span className="text-textColor font-poppinsRegular">
                        Place:
                      </span>
                      <span className="text-textColor font-poppinsLight capitalize">
                        {property?.location?.place}
                      </span>
                    </div>
                    <div className="flex items-start gap-[1rem]">
                      <span className="text-textColor font-poppinsRegular">
                        Postal Code:
                      </span>
                      <span className="text-textColor font-poppinsLight">
                        {property?.location?.postalCode}
                      </span>
                    </div>
                    <div className="flex items-start gap-[1rem]">
                      <span className="text-textColor font-poppinsRegular">
                        Town:
                      </span>
                      <span className="text-textColor font-poppinsLight capitalize">
                        {property?.location?.town}
                      </span>
                    </div>
                    <div className="flex items-start gap-[1rem]">
                      <span className="text-textColor font-poppinsRegular">
                        County:
                      </span>
                      <span className="text-textColor font-poppinsLight capitalize">
                        {property?.location?.county}
                      </span>
                    </div>
                    <div className="flex items-start gap-[1rem]">
                      <span className="text-textColor font-poppinsRegular">
                        Country:
                      </span>
                      <span className="text-textColor font-poppinsLight capitalize">
                        {property?.location?.country}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="sm:w-1/2 flex justify-center items-center mx-[0.5rem] h-[20vh] sm:mx-[1rem]">
                  <div className="bg-orange-300 w-full h-full">Map</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-poppinsSemibold text-lightThemeColor font-semibolded border-b-[1px] border-gray-200 mb-[1rem] pb-[0.25rem]">
                Reviews
              </h3>
              <div className="flex flex-col justify-between w-full gap-[2rem] sm:px-[0.25rem] md:px-[0.5rem] sm:gap-[1rem] sm:items-start sm:flex-row pb-[0.25rem]">
                <div className="sm:w-1/2">
                  <h4 className="font-poppinsLight text-default mb-[1rem] sm:text-h3">
                    {property?.reviews?.length >= 1
                      ? `${property?.reviews?.length} reviews`
                      : "No reviews yet"}
                  </h4>
                  <div className="flex flex-col space-y-[0.75rem] justify-center items-start w-full">
                    {property?.reviews?.map((review, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col items-start w-full text-gray-200 font-poppinsLight"
                        >
                          <span className="w-full bg-lightThemeColor py-[0.125rem] px-[0.5rem] rounded-tr-lg">
                            {review?.reviewerName}
                          </span>
                          <span className="w-full bg-lightGrayCTA py-[1rem] px-[0.5rem] rounded-bl-lg text-lightThemeColor">
                            {review?.reviewBody}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="sm:w-1/2">
                  <h4 className="font-poppinsLight text-default mb-[1rem] sm:text-h3">
                    Write a Review
                  </h4>
                  <form className="max-w-[80vw] flex flex-col gap-[1.25rem] bg-white px-[1rem] pt-[2rem] pb-[1.75rem] rounded-lg sm:max-w-[40vw] sm:px-[1.5rem]">
                    <div className="flex flex-col space-y-[0.5rem] w-full">
                      <input
                        type="text"
                        placeholder="full name"
                        className="hover:outline-none   focus:outline-none px-[1rem] py-[0.6rem] border-[1px] border-gray-200     hover:border-thirtyColor focus:border-thirtyColor rounded-md"
                        required
                      />
                      <textarea
                        rows={5}
                        className="hover:outline-none focus:outline-none px-[1rem] py-[0.6rem] border-[1px] border-gray-200 hover:border-thirtyColor focus:border-thirtyColor rounded-md resize-none"
                        placeholder="hi, this an example of a review"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-ctaColor text-bodyColor w-full py-[0.5rem] rounded-[10px]"
                    >
                      Send review
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[3rem]">
        <h2 className="text-lightThemeColor font-poppinsSemibold text-default truncate mb-[1rem] sm:text-h3">
          Related Properties
        </h2>
        <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-3">
          <WishlistCard />
          <WishlistCard />
          <WishlistCard />
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="fixed bottom-4 z-40 w-full ">
          <div className="container w-full text-lightGrayCTA">
            <div className="flex justify-between items-center py-[0.4rem] bg-ctaColor mx-[1rem] rounded-lg sm:py-[1rem]">
              <div className="flex flex-col justify-center items-center gap-[0.125rem] border-r-[1px] border-gray-200 w-1/3 sm:flex-row sm:gap-4">
                <span className="text-h3 sm:text-h2">
                  <PiPhone />
                </span>
                <span className="font-poppinsLight text-smaller sm:text-small">
                  Call
                </span>
              </div>
              <div className="flex flex-col justify-center items-center gap-[0.125rem] border-r-[1px] border-gray-200 w-1/3 sm:flex-row sm:gap-4">
                <span className="text-h3 sm:text-h2">
                  <PiWhatsappLogo />
                </span>
                <span className="font-poppinsLight text-smaller sm:text-small">
                  Whatsapp
                </span>
              </div>
              <div className="flex flex-col justify-center items-center gap-[0.125rem] w-1/3 sm:flex-row sm:gap-4">
                <span className="text-h3 sm:text-h2">
                  <PiEnvelope />
                </span>
                <span className="font-poppinsLight text-smaller sm:text-small">
                  Email
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
