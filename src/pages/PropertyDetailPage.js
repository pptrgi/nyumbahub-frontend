import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { PiHeart, PiMapPin, PiHeartFill } from "react-icons/pi";
import {
  IoPaperPlaneSharp,
  IoCallSharp,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import Breadcrumb from "../components/Breadcrumb";
import GeneralCard from "../components/propertyCards/GeneralCard";
import {
  getOnePropertyAC,
  addAReviewAC,
} from "../reduxFeatures/properties/propertySlice";
import { addToWishlistAC } from "../reduxFeatures/properties/propertySlice";
import { formatDate } from "../utils/dateFormatter";
import PreLoader from "../components/PreLoader";
import PageTitler from "../components/PageTitler";

// Define the schema for the review form input fields
const reviewSchema = yup.object({
  name: yup.string().required("Please enter your name"),
  review: yup.string().required("You can't send an empty review body"),
});

const PropertyDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const propertyState = useSelector((state) => state.property);
  const property = propertyState?.property;
  const allProperties = useSelector((state) => state.property.properties);
  const similarProperties = allProperties?.filter(
    (propty) =>
      propty?.type?.typeName == property?.type?.typeName &&
      propty.nameSlug !== property.nameSlug
  );
  const propertiesInWishlist = useSelector((state) => state.user.userWishlist);
  const propertyReviews = useSelector((state) => state.property.reviews);

  // Fetch the property with the extracted id (from the URL params)
  useEffect(() => {
    dispatch(getOnePropertyAC(id));
  }, [dispatch, id, propertyReviews]);

  // Consume the defined schema
  // Define the initial values for the input fields
  // Handle form submit - Dispatch addAReviewAC() action creator only when the user is signed in
  const formik = useFormik({
    initialValues: {
      name: "",
      review: "",
    },
    validationSchema: reviewSchema,
    onSubmit: (values, { resetForm }) => {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Sign in to add a review to this property");
        setTimeout(() => {
          navigate("/signin");
        }, 1800);
      } else {
        dispatch(addAReviewAC({ propertyId: id, reviewInfo: values })) &&
          resetForm();
      }
    },
  });

  // Check if this property already exists in the wishlist array in state for conditional styling
  const alreadyInWishlist = propertiesInWishlist?.find(
    (house) => house?.propertyId?._id == property?._id
  );

  // Allow the user to dispatch the addToWishlistAC() action creator to make add-to-wishlist API request only if they are signed in
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

  // replace the spaces in the property's name with their encoded values
  let encodedPropertyName = property?.name?.split(" ").join("%20");

  return (
    <>
      {propertyState?.isLoading === true ? (
        <PreLoader />
      ) : (
        <div className="custom_container page mb-[3rem]">
          <span className="text-smaller truncate md480:text-default">
            <Breadcrumb pageTitle={`${property?.name}`} />
            <PageTitler title={"Property Detail Page"} />
          </span>
          <div className="flex justify-center items-center w-[100%] md480:mt-[1rem]">
            <div className="w-full py-[1rem] px-[0.5rem] md480:px-[1rem] lg1023:px-[3rem] lg1120:px-[4rem]">
              {/* whole page container here */}
              <div className="flex flex-col-reverse gap-[3rem] items-start w-full md480:flex-col">
                {/* titles and images container */}
                <section className="flex flex-col space-y-[1.5rem] w-full">
                  {/* titles */}
                  <div className="flex flex-col space-y-[0.5rem]">
                    <h3 className="text-darkThemeColor font-poppinsSemibold text-default truncate md480:text-h3">
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
                        <Link
                          key={index}
                          to={`/category/${categ.categoryId}`}
                          className="font-poppinsLight text-tiny px-[0.25rem] bg-textColor text-white rounded-sm tracking-wide hover:bg-transparent hover:text-ctaColor hover:font-poppinsSemibold"
                        >
                          {categ?.categoryName}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="flex justify-between w-full items-center">
                    <h3 className="text-darkThemeColor font-poppinsBold text-default font-semibolded md480:text-h3">{`KES ${property?.price?.toLocaleString(
                      "en-US"
                    )}`}</h3>
                    <span
                      onClick={(e) => handleAddToWishlist(property?._id)}
                      className={`${
                        alreadyInWishlist
                          ? "text-wishlistHeartColor hover:text-darkThemeColor"
                          : "text-darkThemeColor"
                      } text-h2 hover:text-wishlistHeartColor md480:text-[2rem]`}
                    >
                      {alreadyInWishlist ? <PiHeartFill /> : <PiHeart />}
                    </span>
                  </div>
                  <div className="flex space-x-[1.25rem]">
                    <span className="font-poppinsRegular">Date Updated:</span>
                    <span className="font-poppinsLight">
                      {formatDate(`${property?.updatedAt}`)}
                    </span>
                  </div>
                </section>

                {property?.images?.length > 0 ? (
                  <section className="relative flex flex-col gap-[2px] w-full items-center overflow-hidden h-[300px] md480:h-[280px] md800:h-[300px]">
                    {/* images */}
                    <div className="flex items-center gap-[2px] w-full h-[250px] md480:h-[230px] md800:h-[240px]">
                      <img
                        src={property?.images[0]?.imageUrl}
                        className="w-full h-full object-cover hover:scale-95 transition duration-300 md480:w-1/2"
                        alt="NyumbaHub House Image"
                      />
                      <img
                        src={property?.images[1]?.imageUrl}
                        className="hidden w-1/2 h-full object-cover hover:scale-95 transition duration-300 md480:block"
                        alt="NyumbaHub House Image"
                      />
                    </div>
                    <div className="flex gap-[2px] items-center w-full h-[50px] overflow-x-auto scroll-smooth md480:h-[70px] md800:h-[100px]">
                      {property?.images?.map((image, index) => {
                        return (
                          <>
                            {/* Don't show the already shown first image */}
                            {image?.imageUrl !==
                              property?.images[0]?.imageUrl && (
                              <img
                                key={index}
                                src={image?.imageUrl}
                                className="h-full object-cover min-w-[100px] hover:scale-95 transition duration-300 md480:min-w-[120px] md800:min-w-[130px] lg1023:min-w-[150px]"
                                alt="NyumbaHub House Image"
                              />
                            )}
                          </>
                        );
                      })}
                    </div>
                  </section>
                ) : (
                  <section className="w-full h-[200px] overflow-hidden md480:h-[250px] lg1023:h-[300px]">
                    <img
                      src="/images/larger_no_image.jpg"
                      className="w-full h-full object-cover"
                      alt="No-image Placeholder"
                    />
                  </section>
                )}
              </div>

              <div className="flex flex-col gap-[2rem] mt-[3rem]">
                {/* all other property details */}
                <section>
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
                        {property?.price?.toLocaleString("en-US")}
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
                </section>

                <section>
                  <h3 className="font-poppinsSemibold text-lightThemeColor font-semibolded border-b-[1px] border-gray-200 mb-[1rem] pb-[0.25rem]">
                    Description
                  </h3>
                  <div>
                    {/* split the decription into an array of paragraphs */}
                    {property?.description
                      ?.split("\n")
                      .map((paragraph, index) => {
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
                </section>

                <section>
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
                </section>

                <section className="">
                  <h3 className="font-poppinsSemibold text-lightThemeColor font-semibolded border-b-[1px] border-gray-200 mb-[1rem] pb-[0.25rem]">
                    Location
                  </h3>
                  <div className="flex flex-col justify-between w-full gap-[2rem] pb-[0.25rem] md480:gap-0 md480:items-start md480:flex-row">
                    <div className="md480:w-1/2">
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
                    <div className="flex justify-center items-center mx-[0.5rem] h-[20vh] md480:mx-[1rem] md480:w-1/2">
                      <div className="bg-lightGrayCTA w-full h-full">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3586888474!2d36.68258738725812!3d-1.302860296634477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1692618133459!5m2!1sen!2ske"
                          className="border-0 w-full h-full rounded-sm"
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <h3 className="font-poppinsSemibold text-lightThemeColor font-semibolded border-b-[1px] border-gray-200 mb-[1rem] pb-[0.25rem]">
                    Reviews
                  </h3>
                  <div className="flex flex-col justify-between w-full gap-[2rem] pb-[0.25rem] md480:px-[0.25rem] md800:px-[0.5rem] md480:gap-[1rem] md480:items-start md480:flex-row">
                    <div className="md480:w-1/2">
                      <h4 className="font-poppinsLight text-default mb-[1rem] md480:text-h3">
                        {property?.reviews?.length >= 1
                          ? `${property?.reviews?.length} reviews`
                          : "No reviews yet"}
                      </h4>
                      <div className="flex flex-col space-y-[0.75rem] justify-center items-start w-full">
                        {property?.reviews?.map((review, index) => {
                          return (
                            <div
                              key={index}
                              className="flex flex-col items-start w-full text-gray-200 font-poppinsLight border-l-[5px] rounded-bl-lg border-lightThemeColor"
                            >
                              <span className="w-full bg-lightThemeColor py-[0.125rem] px-[0.5rem] rounded-tr-lg">
                                {review?.name}
                              </span>
                              <span className="w-full bg-lightGrayCTA py-[1rem] px-[0.5rem] rounded-bl-lg text-lightThemeColor">
                                {review?.review}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="md480:w-1/2">
                      <h4 className="font-poppinsLight text-default mb-[1rem] md480:text-h3">
                        Write a Review
                      </h4>
                      <form
                        onSubmit={formik.handleSubmit}
                        className="max-w-[80vw] flex flex-col gap-[1.25rem] bg-white px-[1rem] pt-[2rem] pb-[1.75rem] rounded-lg md480:max-w-[40vw] md480:px-[1.5rem]"
                      >
                        <div className="flex flex-col space-y-[0.5rem] w-full">
                          <input
                            type="text"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange("name")}
                            onBlur={formik.handleBlur("name")}
                            placeholder="full name"
                            className="font-poppinsLight px-[1rem] py-[0.6rem] border-[1px] border-gray-200 hover:border-lightThemeColor focus:border-lightThemeColor rounded-md"
                            maxLength={40}
                          />
                          <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] md480:text-small">
                            {formik.touched.name && formik.errors.name}
                          </span>

                          <textarea
                            rows={5}
                            name="review"
                            value={formik.values.review}
                            onChange={formik.handleChange("review")}
                            onBlur={formik.handleBlur("review")}
                            className="font-poppinsLight px-[1rem] py-[0.6rem] border-[1px] border-gray-200 hover:border-lightThemeColor focus:lightThemeColor rounded-md resize-none"
                            placeholder="Hi, this an example of a review"
                          />
                          <span className="text-smaller font-poppinsLight text-red-300 px-[0.5rem] md480:text-small">
                            {formik.touched.review && formik.errors.review}
                          </span>
                        </div>
                        <button
                          type="submit"
                          className="bg-ctaColor text-bodyColor w-full py-[0.5rem] rounded-[10px] hover:bg-darkThemeColor"
                        >
                          Send review
                        </button>
                      </form>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <div className="mt-[3rem] lg1023:px-[3rem] lg1120:px-[4rem]">
            <h2 className="text-lightThemeColor font-poppinsSemibold text-default truncate mb-[1rem] md480:text-h3">
              Related Properties
            </h2>
            {similarProperties?.length !== 0 ? (
              <div className="grid grid-cols-1 items-center gap-2 md480:grid-cols-2 md800:grid-cols-2 md800:gap-4 lg1023:grid-cols-3">
                {similarProperties?.slice(0, 3).map((property, index) => {
                  return <GeneralCard key={index} property={property} />;
                })}
              </div>
            ) : (
              <div className="flex justify-start items-start">
                <h3 className="font-poppinsLight text-default">
                  There are no other properties of this kind
                </h3>
              </div>
            )}
          </div>

          <div className="flex justify-center items-center w-full">
            <div className="fixed bottom-4 z-40 w-full">
              <div className="custom_container text-bodyColor lg1023:px-[3rem] lg1120:px-[4rem]">
                <div className="flex justify-between items-center bg-transparent  p-[0.25rem] border-[1px] border-solid border-ctaColor/20 rounded-[1.25rem] gap-[0.35rem] md480:gap-2 md480:p-[0.35rem] md480:border-ctaColor/25">
                  <div className="group w-1/3 cursor-pointer">
                    <a
                      href="tel:254700119134"
                      className="flex flex-col justify-center items-center gap-[0.125rem] w-full bg-ctaColor py-[0.5rem] rounded-[1rem]  group-hover:bg-darkThemeColor transition duration-300 md480:py-[1rem] md480:flex-row md480:gap-4 md480:rounded-[1.25rem]"
                    >
                      <span className="hidden text-h2 md480:block">
                        <IoCallSharp />
                      </span>
                      <span className="font-poppinsLight text-smaller md480:text-default">
                        Call
                      </span>
                    </a>
                  </div>

                  <div className="group w-1/3 cursor-pointer">
                    <a
                      href={`https://wa.me/254700119134?text=Hi%20NyumbaHub%2C%0A%0AI%27m%20interested%20in%20property%20${encodedPropertyName}`}
                      className="flex flex-col justify-center items-center gap-[0.125rem] w-full bg-ctaColor py-[0.5rem] rounded-[1rem]  group-hover:bg-darkThemeColor transition duration-300 md480:py-[1rem] md480:flex-row md480:gap-4 md480:rounded-[1.25rem]"
                    >
                      <span className="hidden text-h2 md480:block">
                        <IoLogoWhatsapp />
                      </span>
                      <span className="font-poppinsLight text-smaller md480:text-default">
                        Whatsapp
                      </span>
                    </a>
                  </div>

                  <div className="group w-1/3 cursor-pointer">
                    <a
                      href={`mailto:lifencreatives@gmail.com?subject=Enquiring%20About%20A%20Property&body=Hello%20NyumbaHub%2C%0A%0AI%20am%20enquiring%20about%20a%20property%20that%20I%27m%20interested%20in%2E%0A%0AYou%20call%20it%20${encodedPropertyName}%0A%0ARegards`}
                      className="flex flex-col justify-center items-center gap-[0.125rem] w-full bg-ctaColor py-[0.5rem] rounded-[1rem]  group-hover:bg-darkThemeColor transition duration-300 md480:py-[1rem] md480:flex-row md480:gap-4 md480:rounded-[1.25rem]"
                    >
                      <span className="hidden text-h2 md480:block">
                        <IoPaperPlaneSharp />
                      </span>
                      <span className="font-poppinsLight text-smaller md480:text-default">
                        Email
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyDetailPage;
