import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import LimitedCard from "../components/propertyCards/LimitedCard";
import { getUserWishlistAC } from "../reduxFeatures/users/userSlice";
import PageTitler from "../components/PageTitler";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistProperties = useSelector((state) => state.user.userWishlist);
  console.log("wp", wishlistProperties);

  const properties = [];

  useEffect(() => {
    getUserWishlistNow();
  }, []);

  const getUserWishlistNow = () => {
    dispatch(getUserWishlistAC());
  };

  wishlistProperties?.map((property, index) => {
    const propertyDetails = property?.propertyId;
    properties.push(propertyDetails);
  });
  return (
    <div className="page container mb-[5rem]">
      <Breadcrumb pageTitle={"Wishlist"} />
      <PageTitler title={"Wishlist"} />
      <h3 className="font-poppinsSemibold text-darkThemeColor text-h3 mt-[2rem] mb-[2rem]">
        Properties in your wishlist
      </h3>
      {properties?.length > 0 ? (
        <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-3">
          {properties?.map((property, index) => {
            return <LimitedCard key={index} property={property} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-[30vh]">
          <div className="flex flex-col justify-center items-center space-y-[1.5rem] md:space-y-[2rem]">
            <h3 className="font-poppinsLight text-h3 sm:text-h2">
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
  );
};

export default Wishlist;
