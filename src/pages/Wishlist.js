import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";
import LimitedCard from "../components/propertyCards/LimitedCard";
import { getUserWishlistAC } from "../reduxFeatures/users/userSlice";
import PageTitler from "../components/PageTitler";
import PreLoader from "../components/PreLoader";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistPropertiesState = useSelector((state) => state.user);
  const wishlistProperties = wishlistPropertiesState?.userWishlist;
  const properties = [];

  // Fetch all properties in the user's wishlist
  useEffect(() => {
    getUserWishlistNow();
  }, []);

  const getUserWishlistNow = () => {
    dispatch(getUserWishlistAC());
  };

  // Extract individual properties and append them to the properties array
  wishlistProperties?.map((property) => {
    const propertyDetails = property?.propertyId;
    properties.push(propertyDetails);
  });
  return (
    <>
      {wishlistPropertiesState?.isLoading == true ? (
        <PreLoader />
      ) : (
        <div className="custom_container page mb-[5rem]">
          <Breadcrumb pageTitle={"Wishlist"} />
          <PageTitler title={"Wishlist"} />
          <h3 className="font-poppinsSemibold text-darkThemeColor text-h3 mt-[2rem] mb-[2rem]">
            Properties in your wishlist
          </h3>
          {properties?.length > 0 ? (
            // <div className="grid grid-cols-1 items-center gap-2 md480:grid-cols-2 md800:grid-cols-2 md800:gap-4 lg1023:grid-cols-3">
            <div className="flex flex-wrap items-center gap-2 md800:gap-4">
              {properties?.map((property, index) => {
                return <LimitedCard key={index} property={property} />;
              })}
            </div>
          ) : (
            <div className="flex justify-center items-center w-full h-[30vh]">
              <div className="flex flex-col justify-center items-center space-y-[1.5rem] md800:space-y-[2rem]">
                <h3 className="font-poppinsLight text-h3 md480:text-h2">
                  Your wishlist is empty
                </h3>
                <Link
                  to="/all-properties"
                  className="px-[1.75rem] py-[1rem] rounded-md bg-ctaColor text-bodyColor w-fit tracking-wide hover:bg-darkThemeColor"
                >
                  Add items
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Wishlist;
