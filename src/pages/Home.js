import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LandPage from "../components/LandPage";
import Featured from "../components/homePageSections/Featured";
import NewListings from "../components/homePageSections/NewListings";
import CTASection from "../components/homePageSections/CTASection";
import BannersSection from "../components/homePageSections/BannersSection";
import RandomProperties from "../components/homePageSections/RandomProperties";
import { getAllProperties } from "../reduxFeatures/properties/propertySlice";
import InformationSection from "../components/homePageSections/InformationSection";
import PageTitler from "../components/PageTitler";

const Home = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.property.property);

  useEffect(() => {
    getAllPropertiesNow();
  }, []);

  const getAllPropertiesNow = () => {
    dispatch(getAllProperties());
  };

  return (
    <>
      <PageTitler title={""} />
      <div>
        <LandPage />
        <InformationSection />
        <BannersSection />
        <RandomProperties properties={properties} />
        <Featured />
        <NewListings />
        <CTASection />
      </div>
    </>
  );
};

export default Home;
