import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import {
  PiTextColumns,
  PiTextAlignJustify,
  PiSortAscending,
} from "react-icons/pi";
import { IoOptionsOutline } from "react-icons/io5";
import image from "../static/images/testImage.jpg";
import test2 from "../static/images/test2.jpg";
import test3 from "../static/images/test3.jpg";
import GeneralCard from "../components/propertyCards/GeneralCard";
import SortOptions from "../components/SortOptions";
import { getOneType } from "../reduxFeatures/types/typeSlice";

const OneType = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const type = useSelector((state) => state.type.type);
  const properties = [];

  useEffect(() => {
    getOneTypeNow();
  }, [dispatch, id]);

  const getOneTypeNow = () => {
    dispatch(getOneType(id));
  };

  type?.properties?.map((property) => {
    const propertyDetails = property.propertyId;
    properties.push(propertyDetails);
  });

  return (
    <div className="page container">
      <Breadcrumb pageTitle={"Type"} />
      <h2 className="font-poppinsSemibold text-darkThemeColor text-h3 mt-[1.5rem] mb-[2rem]">
        {`${type?.name} Properties`}
      </h2>
      <div className="flex justify-between gap-[1rem] items-start w-full">
        <div className="w-2/12 sm:w-3/12">
          <div className="hidden flex-col items-start bg-white border-[1.5px] border-gray-200 pt-[1.5rem] pb-[1rem] px-[0.75rem] rounded-lg sm:flex">
            <span className="font-poppinsRegular text-darkThemeColor mb-[0.5rem] font-semibolded">
              Filter By
            </span>
            <form className="px-[0.25rem]">
              <div className="flex flex-col space-y-[0.5rem] font-poppinsLight text-small">
                <span>Price</span>
                <div className="flex flex-col space-y-[3px] px-[0.25rem] w-full">
                  <input
                    type="number"
                    placeholder="min price"
                    className="hover:outline-nonefocus:outline-none px-[1rem] py-[0.25rem] border-[1px] border-gray-200 hover:border-thirtyColor focus:border-thirtyColor rounded-sm w-full"
                  />
                  <input
                    type="number"
                    placeholder="max price"
                    className="hover:outline-nonefocus:outline-none px-[1rem] py-[0.25rem] border-[1px] border-gray-200 hover:border-thirtyColor focus:border-thirtyColor rounded-sm w-full"
                  />
                </div>
              </div>
              <div className="flex justify-end items-end w-full mt-[0.75rem]">
                <button
                  type="submit"
                  className="font-poppinsRegular text-small font-semibolded text-ctaColor tracking-wider"
                >
                  Filter
                </button>
              </div>
            </form>
          </div>
          <div className="hidden flex-col items-start bg-white border-[1.5px] border-gray-200 my-[1rem] pt-[1.5rem] pb-[1rem] px-[0.75rem] rounded-lg sm:flex">
            <span className="font-poppinsRegular text-darkThemeColor mb-[0.5rem] font-semibolded">
              Other Links
            </span>
            <div className="flex flex-col space-y-[0.5rem] font-poppinsLight text-small px-[0.25rem]">
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/wishlist">Wishlist</Link>
            </div>
          </div>
          <div className="flex justify-start items-start pt-[0.75rem] sm:hidden">
            <span className="px-[0.5rem] py-[0.25rem] bg-gray-100 rounded-sm text-[1.75rem] text-textColor">
              <IoOptionsOutline />
            </span>
          </div>
        </div>
        <div className="w-10/12 sm:w-9/12">
          <div className="flex flex-col space-y-[1rem] items-center">
            <div className="w-full py-[0.25rem] px-[0.5rem] bg-white flex justify-between items-center">
              <div className="flex space-x-2 items-center">
                <span className="">Sort By:</span>
                {/* <select className="bg-white border-[1px] border-gray-200 text-textColor px-[0.5rem] py-[0.25rem] rounded-md w-1/2 text-smaller focus:outline-none hover:outline-none focus:border-[1px] hover:border-[1px] focus:border-thirtyColor sm:text-small sm:w-fit">
                  <option>Default</option>
                  <option>High price first</option>
                  <option>Low price first</option>
                  <option>Name (A-Z)</option>
                  <option>Name (Z-A)</option>
                </select> */}
                <SortOptions />
              </div>
              <div className="hidden space-x-2 items-center sm:flex">
                <span>Arrange:</span>
                <div className="flex items-center space-x-2">
                  <span className="px-[0.125rem] bg-gray-100 rounded-md text-h3">
                    <PiTextColumns />
                  </span>
                  <span className="px-[0.125rem] bg-gray-100 rounded-md text-h3">
                    <PiTextAlignJustify />
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
              {properties?.map((property, index) => {
                return <GeneralCard key={index} property={property} />;
              })}
            </div>
            <div className="pt-[3rem] pb-[2rem]">
              <span className="text-ctaColor font-poppinsRegular text-default">
                Paginate
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneType;
