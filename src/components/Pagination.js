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
          nextLabel={
            <PiCaretRightFill className="text-bodyColor text-default sm:text-h3" />
          }
          previousLabel={
            <PiCaretLeftFill className="text-ctaColor text-default sm:text-h3" />
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="flex items-center space-x-[1rem] my-[4rem]"
          //   pageLinkClassName="font-poppinsRegular text-textColor font-semibolded"
          previousLinkClassName="font-poppinsRegular text-textColor font-semibolded"
          activeLinkClassName="font-poppinsRegular text-ctaColor font-semibolded"
          nextLinkClassName="font-poppinsRegular text-textColor font-semibolded"
          nextClassName="px-[1rem] py-[0.5rem] bg-ctaColor text-white rounded-sm border-[1.5px] border-ctaColor"
          previousClassName="px-[1rem] py-[0.5rem] bg-bodyColor border-[1.5px] border-ctaColor rounded-sm"
        />
      </div>
    </div>
  );
};

export default Pagination;
