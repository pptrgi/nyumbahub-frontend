import React from "react";
import { PiCaretRight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Breadcrumb = ({ pageTitle }) => {
  return (
    <div className="w-full pt-[1rem] pb-[0.125rem] border-b-[1px] border-gray-100">
      <div className="flex justify-start items-start">
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-ctaColor font-poppinsLight">
            Home
          </Link>
          <span className="text-textColor">
            <PiCaretRight />
          </span>
          <span className="text-textColor font-poppinsLight">{pageTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
