import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";
import GeneralCard from "./propertyCards/GeneralCard";
import SpecificCard from "./propertyCards/SpecificCard";

const Pagination = ({
  properties,
  itemsPerPage,
  wrapperStyling,
  specificVal = null,
}) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const { pathname } = useLocation();
  const fromCategory = pathname.includes("category"); // enables use specificCard property cards for categories properties. Others will have generalCard property cards

  // Paginate
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(properties?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(properties?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, properties]);

  // Update offset
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % properties?.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className={wrapperStyling}>
        {currentItems?.map((property, index) => {
          return fromCategory ? (
            <SpecificCard
              key={index}
              property={property}
              specificVal={specificVal}
            />
          ) : (
            <GeneralCard key={index} property={property} />
          );
        })}
      </div>

      <div className="flex justify-center items-center w-full">
        <ReactPaginate
          breakLabel=".."
          nextLabel="next"
          previousLabel="prev"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="flex items-center space-x-[1rem] my-[4rem]"
          previousLinkClassName="font-poppinsSemibold text-lightThemeColor tracking-wide group-hover:text-ctaColor"
          activeLinkClassName="font-poppinsRegular text-ctaColor font-semibolded text-default sm:text-h3"
          nextLinkClassName="font-poppinsRegular text-bodyColor tracking-wide"
          nextClassName="px-[0.8rem] py-[0.3rem] bg-lightThemeColor rounded-sm border-[1.5px] border-lightThemeColor hover:border-ctaColor hover:bg-ctaColor"
          previousClassName="group px-[0.8rem] py-[0.3rem] bg-bodyColor border-[1.5px] border-lightThemeColor rounded-sm hover:border-ctaColor"
        />
      </div>
    </div>
  );
};

export default Pagination;
