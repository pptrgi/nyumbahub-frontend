import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import PageTitler from "../components/PageTitler";
import WishlistCard from "../components/wishlist/WishlistCard";
import LimitedCard from "../components/propertyCards/LimitedCard";
import { getUserWishlistAC } from "../reduxFeatures/users/userSlice";

import image from "../static/images/testImage.jpg";
import test2 from "../static/images/test2.jpg";
import test3 from "../static/images/test3.jpg";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.user);
  console.log("wishlist", wishlist);

  useEffect(() => {
    getUserWishlistNow();
  }, []);

  const getUserWishlistNow = () => {
    dispatch(getUserWishlistAC());
  };

  const [properties, setProperties] = useState([
    {
      image: [image, test2, test3],
      title: "3 Bedroom Apartment Ruiru",
      category: ["new listing", "featured", "for rent"],
      price: "KES 8,000,000",
      bathrooms: 4,
      bedrooms: 3,
      location: "Ruiru Police Station, Thika Road",
    },
    {
      image: [test2, image, test3],
      title: "Villa Beach Mombasa Next to Beach",
      category: ["reduced price", "top seller", "for sale"],
      price: "KES 12,000,000",
      bathrooms: 3,
      bedrooms: 3,
      location: "Nyali Beach, Nyali, Mombasa County, Kenya",
    },
    {
      image: [test3, image, test2],
      title: "Very Beautiful Mansion for the Rich Kenya",
      category: ["featured", "for rent", "reduced price", "top seller"],
      price: "KES 48,500,000",
      bathrooms: 5,
      bedrooms: 5,
      location: "Kiambu Next to Thika Next Around",
    },
    {
      image: [test3, test2, image],
      title: "Very Beautiful Mansion for the Rich Kenya",
      category: ["for sale", "new listing", "featured", "top seller"],
      price: "KES 48,500,000",
      bathrooms: 5,
      bedrooms: 5,
      location: "Kiambu Next to Thika Next Around",
    },
    {
      image: [test2, test3, image],
      title: "Villa Beach Mombasa Next to Beach",
      category: [
        "new listing",
        "featured",
        "reduced price",
        "top seller",
        "for sale",
      ],
      price: "KES 12,000,000",
      bathrooms: 3,
      bedrooms: 3,
      location: "Nyali Beach, Nyali, Mombasa County, Kenya",
    },
    {
      image: [image, test2, test3],
      title: "3 Bedroom Apartment Ruiru",
      category: [
        "new listing",
        "featured",
        "for rent",
        "reduced price",
        "top seller",
      ],
      price: "KES 8,000,000",
      bathrooms: 4,
      bedrooms: 3,
      location: "Ruiru Police Station, Thika Road",
    },
  ]);
  return (
    <div className="page container mb-[5rem]">
      <Breadcrumb pageTitle={"Wishlist"} />
      <h3 className="font-poppinsSemibold text-darkThemeColor text-h3 mt-[2rem] mb-[2rem]">
        Properties in your wishlist
      </h3>
      {properties.length > 0 ? (
        <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-3">
          {properties.map((property, index) => {
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
              className="px-[1.75rem] py-[1rem] rounded-md bg-ctaColor text-bodyColor w-fit tracking-wide"
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
