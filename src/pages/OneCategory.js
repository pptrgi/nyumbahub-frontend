import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { PiTextColumns, PiTextAlignJustify } from "react-icons/pi";
import { IoOptionsOutline } from "react-icons/io5";
import Breadcrumb from "../components/Breadcrumb";
import SortOptions from "../components/SortOptions";
import { getOneCategory } from "../reduxFeatures/categories/categorySlice";
import Pagination from "../components/Pagination";
import FilterPanelMobile from "../components/FilterPanelMobile";
import PreLoader from "../components/PreLoader";
import PageTitler from "../components/PageTitler";

const OneCategory = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const category = useSelector((state) => state.category.category);
  console.log(category);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(5e8);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);
  let properties = [];

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      getOneCategoryNow();
      setLoading(false);
    }, 1000);
  }, [dispatch, id]);

  const getOneCategoryNow = () => {
    dispatch(getOneCategory(id));
  };

  category?.properties?.map((property) => {
    const propertyDetails = property.propertyId;
    properties.push(propertyDetails);
  });

  // Filter and modify the properties array
  properties = properties?.filter(
    (property) => property?.price >= minPrice && property?.price <= maxPrice
  );

  // Sort still pending

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <div className="page container">
          <Breadcrumb pageTitle={`${category?.name} Category`} />
          <PageTitler title={`${category?.name} Category`} />
          <h2 className="font-poppinsSemibold text-darkThemeColor text-h3 mt-[1.5rem] mb-[2rem]">
            {`${category?.name} Properties`}
          </h2>
          <div className="flex justify-between gap-[1rem] items-start w-full">
            <div className="w-2/12 sm:w-3/12">
              <div className="hidden flex-col items-start bg-white border-[1.5px] border-gray-200 pt-[1.5rem] pb-[1rem] px-[0.75rem] rounded-lg sm:flex">
                <span className="font-poppinsRegular text-darkThemeColor mb-[0.5rem] font-semibolded">
                  Filter By
                </span>
                <form className="px-[0.25rem] w-full">
                  <div className="flex flex-col space-y-[0.5rem] font-poppinsLight text-small">
                    <span>Price</span>
                    <div className="flex flex-col space-y-[3px] px-[0.25rem] w-full">
                      <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        placeholder="min price"
                        className="hover:outline-none focus:outline-none px-[1rem] py-[0.25rem] border-[1px] border-gray-200 hover:border-lightThemeColor focus:border-lightThemeColor rounded-sm w-full"
                        min={1}
                        max={5e8}
                      />
                      <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        placeholder="max price"
                        className="hover:outline-none focus:outline-none px-[1rem] py-[0.25rem] border-[1px] border-gray-200 hover:border-lightThemeColor focus:border-lightThemeColor rounded-sm w-full"
                        min={1}
                        max={5e8}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="hidden flex-col items-start bg-white border-[1.5px] border-gray-200 my-[1rem] pt-[1.5rem] pb-[1rem] px-[0.75rem] rounded-lg sm:flex">
                <span className="font-poppinsRegular text-darkThemeColor mb-[0.5rem] font-semibolded">
                  Other Links
                </span>
                <div className="flex flex-col space-y-[0.5rem] font-poppinsRegular text-small px-[0.25rem]">
                  <Link to="/" className="hover:text-ctaColor">
                    Home
                  </Link>
                  <Link to="/contact" className="hover:text-ctaColor">
                    Contact
                  </Link>
                  <Link to="/wishlist" className="hover:text-ctaColor">
                    Wishlist
                  </Link>
                </div>
              </div>
              <div className="relative flex justify-start items-start pt-[0.75rem] sm:hidden">
                <span
                  onClick={(e) =>
                    setShowFilterPanel(showFilterPanel ? false : true)
                  }
                  className="px-[0.5rem] py-[0.25rem] bg-gray-100 rounded-sm text-[1.75rem] text-textColor"
                >
                  <IoOptionsOutline />
                </span>

                {showFilterPanel && (
                  <div className="absolute top-[3.125rem] left-0 z-30 sm:hidden">
                    <FilterPanelMobile
                      setPropertyType={null}
                      setMinPrice={setMinPrice}
                      setMaxPrice={setMaxPrice}
                      maxPrice={maxPrice}
                      minPrice={minPrice}
                      setShowFilterPanel={setShowFilterPanel}
                      setShowTypeOptions={false}
                      showTypeOptions={null}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="w-10/12 sm:w-9/12">
              <div className="flex flex-col space-y-[1rem] items-center">
                <div className="w-full py-[0.25rem] px-[0.5rem] bg-white flex justify-between items-center">
                  <div className="flex space-x-2 items-center">
                    <span className="">Sort By:</span>
                    <SortOptions setSort={setSort} />
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
                <div className="pb-[2rem]">
                  {properties.length > 0 ? (
                    <Pagination
                      properties={properties}
                      itemsPerPage={4}
                      wrapperStyling={
                        "grid grid-cols-1 items-center gap-4 md:grid-cols-2"
                      }
                      specificVal={category?.name}
                    />
                  ) : (
                    <div className="flex justify-center items-center w-full h-[20vh]">
                      <div className="flex justify-center items-center">
                        <h3 className="font-poppinsLight text-h3 sm:text-h2">
                          No Properties Yet
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OneCategory;
