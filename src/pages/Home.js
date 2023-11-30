import LandPage from "../components/LandPage";
import Featured from "../components/homePageSections/Featured";
import NewListings from "../components/homePageSections/NewListings";
import CTASection from "../components/homePageSections/CTASection";
import RandomProperties from "../components/homePageSections/RandomProperties";
import InformationSection from "../components/homePageSections/InformationSection";
import PageTitler from "../components/PageTitler";
import Hook from "../components/homePageSections/Hook";

const Home = () => {
  return (
    <>
      <PageTitler title={""} />
      <div>
        <LandPage />
        <InformationSection />
        <Hook />
        <RandomProperties />
        <Featured />
        <NewListings />
        <CTASection />
      </div>
    </>
  );
};

export default Home;
