import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import GeneralCard from "./propertyCards/GeneralCard";
import { PiCaretLeftFill, PiCaretRightFill } from "react-icons/pi";

const Pagination = ({ properties, itemsPerPage, wrapperStyling }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(properties?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(properties?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, properties]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % properties?.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className={wrapperStyling}>
        {currentItems?.map((property, index) => {
          return <GeneralCard key={index} property={property} />;
        })}
      </div>

      <div className="flex justify-center items-center w-full">
        <ReactPaginate
          breakLabel=".."
          nextLabel="next" // } //   <PiCaretRightFill className="text-white text-h3 sm:text-h2" /> // {
          previousLabel="prev" // {<PiCaretLeftFill className="text-h3 sm:text-h2" />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="flex items-center space-x-[1rem] my-[4rem]"
          //   pageLinkClassName="font-poppinsRegular text-textColor font-semibolded"
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
