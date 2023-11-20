import { Link } from "react-router-dom";

import PageTitler from "../components/PageTitler";
import FadeInAnimation from "../components/FadeInAnimation";

const NotFoundPage = () => {
  return (
    <FadeInAnimation>
      <>
        <PageTitler title={"404 Page"} />
        <div className="flex justify-center items-center w-full min-h-[80vh] py-[4.5rem] md800:pt-[12rem] md800:pb-[4rem]">
          <div className="flex flex-col space-y-[2rem] md480:space-y-[3rem]">
            <div className="flex flex-col space-y-[0.75rem] md480:space-y-[1rem]">
              <h2 className="text-lightThemeColor text-[1.65rem] font-poppinsBold md480:text-[2rem]">
                404 Page Not Found
              </h2>
              <p className="text-textColor font-poppinsRegular">
                Seems like you got lost in the woods
              </p>
            </div>
            <div>
              <Link
                to="/"
                className="px-[1.5rem] py-[0.6rem] rounded-md bg-ctaColor font-mediumWeight text-bodyColor hover:bg-darkThemeColor font-poppinsRegular md480:px-[1.75rem] md480:py-[0.75rem]"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </>
    </FadeInAnimation>
  );
};

export default NotFoundPage;
