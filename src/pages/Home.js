import LandPage from "../components/LandPage";
import Featured from "../components/homePageSections/Featured";
import NewListings from "../components/homePageSections/NewListings";
import CTASection from "../components/homePageSections/CTASection";
import BannersSection from "../components/homePageSections/BannersSection";
import RandomProperties from "../components/homePageSections/RandomProperties";
import InformationSection from "../components/homePageSections/InformationSection";
import PageTitler from "../components/PageTitler";

const Home = () => {
  return (
    <>
      <PageTitler title={""} />
      <div>
        <LandPage />
        <InformationSection />
        <BannersSection />
        <RandomProperties />
        <Featured />
        <NewListings />
        <CTASection />
      </div>
    </>
  );
};

export default Home;
