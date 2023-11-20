import { useState, useRef } from "react";
import { PiCaretDown, PiCaretUp } from "react-icons/pi";

import useClickOutsideToClose from "../hooks/useClickOutsideToClose";

const SortOptions = ({ setSort }) => {
  const [selectedSort, setSelectedSort] = useState(0);
  const [showSortOptions, setShowSortOptions] = useState(false);
  const sortRef = useRef();

  // Define sort options to include in sort menu
  const sortArray = [
    { sortName: "Default", value: "" },
    { sortName: "High Price First", value: "-price" },
    { sortName: "Low Price First", value: "price" },
    { sortName: "Name (A-Z)", value: "nameSlug" },
    { sortName: "Name (Z-A)", value: "-nameSlug" },
    { sortName: "Oldest First", value: "createdAt" },
  ];

  // Close the sortOptions menu on clicking outside it
  useClickOutsideToClose(sortRef, () => setShowSortOptions(false));

  return (
    <div ref={sortRef} className="relative w-[60%] flex flex-col">
      <div
        onClick={(e) => setShowSortOptions(showSortOptions ? false : true)}
        className="flex justify-between items-center w-full rounded-md bg-white border-[1px] border-gray-200 px-[0.5rem]"
      >
        <input
          value={sortArray[selectedSort].sortName}
          className="bg-inherit w-full py-[0.5rem] hover:outline-none focus:outline-none"
          readOnly
        />
        <span className="py-[0.5rem] text-default">
          {showSortOptions ? <PiCaretUp /> : <PiCaretDown />}
        </span>
      </div>
      {showSortOptions && (
        <div className="absolute top-[2.125rem] right-0 z-30 flex flex-col items-start bg-white rounded-md shadow-md mt-[0.5rem] w-[150px] md480:w-full">
          {sortArray.map((sort, index) => {
            return (
              <span
                key={index}
                className={`px-[0.5rem] py-[0.5rem] w-full cursor-pointer hover:bg-ctaColor hover:text-bodyColor ${
                  index == sortArray.length - 1 && "hover:rounded-b-md"
                } ${index == 0 && "hover:rounded-t-md"}`}
                onClick={(e) =>
                  setSelectedSort(index) &
                  setShowSortOptions(false) &
                  setSort(sort.value)
                }
              >
                {sort.sortName}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SortOptions;
