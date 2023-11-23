import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PiTrash } from "react-icons/pi";
import Breadcrumb from "../components/Breadcrumb";
import { removeFromCompare } from "../reduxFeatures/properties/propertySlice";
import { formatDate } from "../utils/dateFormatter";
import PageTitler from "../components/PageTitler";
import FadeInAnimation from "../components/FadeInAnimation";

const CompareProperties = () => {
  const dispatch = useDispatch();
  const compareProperties = useSelector(
    (state) => state.property.compareProperties
  );

  return (
    <FadeInAnimation delay={true}>
      <div className="custom_container page">
        <Breadcrumb pageTitle={"Compare"} />
        <PageTitler title={"Compare"} />
        <h2 className="font-poppinsSemibold text-darkThemeColor mt-[1.5rem] mb-[2rem] text-h3">
          Compare up to 3 Properties
        </h2>
        {compareProperties?.length > 0 ? (
          <table className="relative flex space-x-[0.5rem] items-start mb-[3rem] md480:space-x-[1rem]">
            <thead className="min-w-[120px] md480:min-w-[200px] md800:min-w-[250px]">
              <tr className="flex flex-col justify-end items-end w-full">
                <th className="w-full h-[15vh] min-h-[150px] flex justify-end items-center">
                  <span className="">Image</span>
                </th>
                {/* change them to px */}
                <th className="h-[7vh] min-h-[50px]">Name</th>
                <th className="h-[5vh] min-h-[40px]">Price</th>
                <th className="h-[5vh] min-h-[40px]">Location</th>
                <th className="h-[5vh] min-h-[40px]">Date Added</th>
                <th className="h-[5vh] min-h-[40px]">Property Type</th>
                <th className="h-[5vh] min-h-[40px]">Bedrooms</th>
                <th className="h-[5vh] min-h-[40px]">Bathrooms</th>
                <th className="h-[10vh] min-h-[120px] md800:h-[15vh]">
                  Features
                </th>
                <th className="h-[5vh] min-h-[40px]">Remove</th>
              </tr>
            </thead>
            <tbody className="flex space-x-[1rem] items-start overflow-x-auto scroll-smooth font-poppinsLight">
              {compareProperties?.map((property, index) => {
                return (
                  <tr className="flex flex-col justify-start items-start w-[200px] flex-shrink-0 md480:w-[300px]">
                    <td className="h-[15vh] min-h-[150px] w-full overflow-hidden ">
                      <img
                        src={
                          compareProperties[index]?.images?.length > 0
                            ? compareProperties[index]?.images[0]?.imageUrl
                            : "/images/no-image.png"
                        }
                        className="w-full h-full object-cover bg-lightGrayCTA"
                        alt="NyumbaHub House Image"
                      />
                    </td>
                    <td className="h-[7vh] min-h-[50px] max-h-[7vh] capitalize">
                      {compareProperties[index]?.name}
                    </td>
                    <td className="h-[5vh] min-h-[40px] max-h-[5vh]">
                      KES{" "}
                      {compareProperties[index]?.price.toLocaleString("en-US")}
                    </td>
                    <td className="h-[5vh] min-h-[40px] max-h-[5vh] capitalize">
                      {`${compareProperties[index]?.location.county} county`}
                    </td>
                    <td className="h-[5vh] min-h-[40px] max-h-[5vh]">
                      {formatDate(`${compareProperties[index]?.createdAt}`)}
                    </td>
                    <td className="h-[5vh] min-h-[40px] max-h-[5vh] capitalize">
                      {compareProperties[index]?.type.typeName}
                    </td>
                    <td className="h-[5vh] min-h-[40px] max-h-[5vh]">
                      {compareProperties[index]?.bedrooms}
                    </td>
                    <td className="h-[5vh] min-h-[40px] max-h-[5vh]">
                      {compareProperties[index]?.bathrooms}
                    </td>
                    <td className="h-[10vh] min-h-[120px] overflow-y-auto scroll-smooth border-[1px] border-gray-200 px-[0.25rem] md800:h-[15vh]">
                      {compareProperties[index]?.features?.map(
                        (feature, indx) => {
                          return (
                            <span key={indx} className="capitalize">{`${
                              indx ==
                              compareProperties[index]?.features?.length - 1
                                ? feature
                                : `${feature}, `
                            }`}</span>
                          );
                        }
                      )}
                    </td>
                    <td className="w-full h-[5vh] min-h-[40px] flex justify-center items-center">
                      <span
                        onClick={(e) =>
                          dispatch(
                            removeFromCompare(compareProperties[index])
                          ) && toast.info("Property removed from compare")
                        }
                        className="text-red-500 text-h3 cursor-pointer md480:text-h2"
                      >
                        <PiTrash />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="flex justify-center items-center w-full h-[30vh]">
            <div className="flex flex-col justify-center items-center space-y-[1.5rem] md800:space-y-[2rem]">
              <h3 className="font-poppinsLight text-h3 md480:text-h2">
                No Properties to Compare
              </h3>
              <Link
                to="/all-properties"
                className="px-[1.75rem] py-[1rem] rounded-md bg-ctaColor text-bodyColor w-fit tracking-wide hover:bg-darkThemeColor"
              >
                Add properties
              </Link>
            </div>
          </div>
        )}
      </div>
    </FadeInAnimation>
  );
};

export default CompareProperties;
