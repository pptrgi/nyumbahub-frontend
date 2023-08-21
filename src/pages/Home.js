import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LandPage from "../components/LandPage";
import Featured from "../components/featured/Featured";
import NewListings from "../components/newListings/NewListings";
import CTASection from "../components/CTASection";
import BannersSection from "../components/BannersSection";
import RandomProperties from "../components/RandomProperties";
import { getAllProperties } from "../reduxFeatures/properties/propertySlice";
import PreLoader from "../components/PreLoader";
import InformationSection from "../components/InformationSection";

const Home = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.property.property);
  const propertyStatus = useSelector((state) => state.property.isLoading);
  const featuredStatus = useSelector((state) => state.category.isLoading);
  const newListingStatus = useSelector((state) => state.category.isLoading);
  const truthy =
    propertyStatus === true ||
    featuredStatus === true ||
    newListingStatus === true;
  console.log("truthy", truthy);
  // console.log(properties);

  useEffect(() => {
    getAllPropertiesNow();
  }, []);

  const getAllPropertiesNow = () => {
    dispatch(getAllProperties());
  };
  return (
    // <>
    //   {truthy == true ? (
    //     <PreLoader />
    //   ) : (
    <div>
      <LandPage />
      <InformationSection />
      <BannersSection />
      <RandomProperties properties={properties} />
      <Featured />
      <NewListings />
      <CTASection />
    </div>
    // )}
    // </>
  );
};

export default Home;
