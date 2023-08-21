import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-[80vh]">
      <div className="flex flex-col space-y-[2rem] sm:space-y-[3rem]">
        <div className="flex flex-col space-y-[0.75rem] sm:space-y-[1rem]">
          <h2 className="text-lightThemeColor text-h3 font-poppinsBold sm:text-h2">
            404 Page Not Found
          </h2>
          <p className="text-textColor font-poppinsRegular">
            Seems like you got lost in the woods
          </p>
        </div>
        <div>
          <Link
            to="/"
            className="px-[1.5rem] py-[0.6rem] rounded-md bg-ctaColor font-mediumWeight text-bodyColor font-poppinsRegular sm:px-[1.75rem] sm:py-[0.75rem]"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
