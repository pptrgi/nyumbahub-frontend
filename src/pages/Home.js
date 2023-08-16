import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LandPage from "../components/LandPage";
import Featured from "../components/featured/Featured";
import NewListings from "../components/newListings/NewListings";
import CTASection from "../components/CTASection";
import RandomProperties from "../components/RandomProperties";
import { getAllProperties } from "../reduxFeatures/properties/propertySlice";

const Home = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.property.property);
  console.log(properties);

  useEffect(() => {
    getAllPropertiesNow();
  }, []);

  const getAllPropertiesNow = () => {
    dispatch(getAllProperties());
  };
  return (
    <div>
      <LandPage />
      <RandomProperties properties={properties} />
      <Featured />
      <NewListings />
      <CTASection />
    </div>
  );
};

export default Home;
