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
  console.log(typeof wishlist);
  console.log(typeof wishlist.userWishlist);

  const properties = [];

  useEffect(() => {
    getUserWishlistNow();
  }, []);

  const getUserWishlistNow = () => {
    dispatch(getUserWishlistAC());
  };

  const propertiesTest = [
    {
      propertyName: "DOUBLE ROOM for Rent ELDORET",
      propertyId: {
        type: {
          typeName: "Double Room",
          typeId: "64d4ab8a2ae9a7c96dba2698",
        },
        location: {
          place: "kapsa primary school",
          town: "eldoret",
          county: "eldoret",
          country: "Kenya",
          postalCode: 3131,
        },
        _id: "64d4b0c12ae9a7c96dba26cd",
        name: "DOUBLE ROOM for Rent ELDORET",
        nameSlug: "double-room-for-rent-eldoret",
        description:
          "THIS PROPERTY IS COVENIENTLY POSITIONED TO ALLOW FOR ACCESS TO LOCAL SHOPS, SCHOOLS, AMENITIES AND THE MAIN ROAD. IT IS ALSO JUST 6km FROM ELDORET TOWN, A WALKING DISTANCE IF NEED BE.\nTHE HOUSE ENJOYS SECURE AND QUIET NEIGHBORHOOD, HAS ENOUGH WATER, AND A NICE BEAUTIFUL HOUSE.\nTALK TO ME STEVE KIPKORIR ON 0733445566",
        features: [
          "Token electricity",
          "constant water supply",
          "Tiled floor",
          "Ceiling",
          "Curtains",
          "Borehole",
        ],
        price: 7500,
        images: [],
        bedrooms: 0,
        bathrooms: 0,
        category: [
          {
            categoryName: "For Rent",
            categoryId: "64d4a9d12ae9a7c96dba2684",
            _id: "64d4b0c12ae9a7c96dba26ce",
          },
          {
            categoryName: "Featured",
            categoryId: "64d36c39632663f6a74fd5f8",
            _id: "64d4b0c12ae9a7c96dba26cf",
          },
          {
            categoryName: "New Listing",
            categoryId: "64d4a9e82ae9a7c96dba268c",
            _id: "64d4b0c12ae9a7c96dba26d0",
          },
        ],
        reviews: [],
        createdAt: "2023-08-10T09:41:21.193Z",
        updatedAt: "2023-08-10T09:41:21.193Z",
        __v: 0,
      },
      _id: "64dde9a71885ba75b66706a8",
    },
  ];

  propertiesTest?.map((property, index) => {
    const propertyDetails = property.propertyId;
    properties.push(propertyDetails);
  });
  return (
    <div className="page container mb-[5rem]">
      <Breadcrumb pageTitle={"Wishlist"} />
      <h3 className="font-poppinsSemibold text-darkThemeColor text-h3 mt-[2rem] mb-[2rem]">
        Properties in your wishlist
      </h3>
      {properties?.length > 0 ? (
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
