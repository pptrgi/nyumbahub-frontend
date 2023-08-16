import { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCompare } from "../reduxFeatures/properties/propertySlice";
import imagePlaceholder from "../static/images/no-image.png";
import { PiTrash } from "react-icons/pi";

const CompareProperties = () => {
  const dispatch = useDispatch();
  const compareProperties = useSelector(
    (state) => state.property.compareProperties
  );

  console.log("CP", compareProperties);
  // const properties = [];
  // const properties = [
  //   {
  //     type: {
  //       typeName: "Apartment",
  //       typeId: "64d4a97b2ae9a7c96dba2674",
  //     },
  //     location: {
  //       place: "thika road",
  //       town: "roysambu",
  //       county: "kiambu",
  //       country: "Kenya",
  //       postalCode: 104,
  //     },
  //     _id: "64d4b15e2ae9a7c96dba2772",
  //     name: "Roysambu 2 Bedroom Apartment",
  //     nameSlug: "roysambu-2-bedroom-apartment",
  //     description:
  //       "If you need a house that enjoys a large living room with dining area, well-designed kitchen, lighting fixtures, free standing wardrobes, a secure neighborhood, constant water supply and has enough parking space, then this is your house.\nA few kilometres from the city, a serene environment, etc I'm telling you conveniency is written all over this house, talk to us now 0755667788",
  //     features: [
  //       "CCTV camera",
  //       "Parking space",
  //       "Gated community",
  //       "Window coverings",
  //       "Constant water supply",
  //       "Perimeter wall",
  //       "Balcony",
  //       "Free standing wardrobes",
  //       "Dining area",
  //       "WiFi",
  //     ],
  //     price: 34850,
  //     images: imagePlaceholder,
  //     bedrooms: 2,
  //     bathrooms: 1,
  //     category: [
  //       {
  //         categoryName: "For Rent",
  //         categoryId: "64d4a9d12ae9a7c96dba2684",
  //         _id: "64d4b15e2ae9a7c96dba2773",
  //       },
  //       {
  //         categoryName: "Featured",
  //         categoryId: "64d36c39632663f6a74fd5f8",
  //         _id: "64d4b15e2ae9a7c96dba2774",
  //       },
  //     ],
  //     reviews: [],
  //     createdAt: "2023-08-10T09:43:58.342Z",
  //     updatedAt: "2023-08-10T09:43:58.342Z",
  //   },
  //   {
  //     type: {
  //       typeName: "Apartment",
  //       typeId: "64d4a97b2ae9a7c96dba2674",
  //     },
  //     location: {
  //       place: "wembley",
  //       town: "kasarani",
  //       county: "nairobi",
  //       country: "Kenya",
  //       postalCode: 1211,
  //     },
  //     _id: "64d4b14e2ae9a7c96dba2758",
  //     name: "One Bedroom Apartment",
  //     nameSlug: "one-bedroom-apartment",
  //     description:
  //       "Situated in Kasarani, this apartment enjoys secure neighborhood, amenities like constant water supply and storage tank, electricity and a sewer system. Living room door opens to a balcony.\nCall 0766778899",
  //     features: [
  //       "Water storage tank",
  //       "Balcony",
  //       "CCTV camera",
  //       "Gated community",
  //       "Curtains",
  //       "WiFi",
  //       "Constant water supply",
  //       "Free standing wardrobes",
  //     ],
  //     price: 17000,
  //     images: imagePlaceholder,
  //     bedrooms: 1,
  //     bathrooms: 1,
  //     category: [
  //       {
  //         categoryName: "For Rent",
  //         categoryId: "64d4a9d12ae9a7c96dba2684",
  //         _id: "64d4b14e2ae9a7c96dba2759",
  //       },
  //       {
  //         categoryName: "Top Seller",
  //         categoryId: "64d4a9df2ae9a7c96dba2688",
  //         _id: "64d4b14e2ae9a7c96dba275a",
  //       },
  //     ],
  //     reviews: [],
  //     createdAt: "2023-08-10T09:43:42.902Z",
  //     updatedAt: "2023-08-10T09:43:42.902Z",
  //   },
  //   {
  //     type: {
  //       typeName: "Apartment",
  //       typeId: "64d4a97b2ae9a7c96dba2674",
  //     },
  //     location: {
  //       place: "water station",
  //       town: "thika",
  //       county: "kiambu",
  //       country: "Kenya",
  //       postalCode: 875,
  //     },
  //     _id: "64d4b13d2ae9a7c96dba2736",
  //     name: "Apartment Three Bedroom Thika",
  //     nameSlug: "apartment-three-bedroom-thika",
  //     description:
  //       "This apartment is perfect for someone who is looking for a house with large and spacious living area, large and well designed kitchen area with granite worktops, spacious dining area, large and well-lit ensuite master bedroom, 24hr manned security with CCTV cameras, play area for children, ample parking space, and a serene and vibrant neighborhood.\nThe house also enjoys natural lighting and panoramic view of the Mt. Kenya thanks to two balconies; one from the living room and the other from the master bedroom doors.\nTo view this house or for more information contact Wamuriati on 0777889900.\nThanks",
  //     features: [
  //       "Controlled access",
  //       "Ensuite master bedroom",
  //       "Children play area",
  //       "Gated community",
  //       "Constant water supply",
  //       "Water storage tanks",
  //       "Eletric fence",
  //       "Perimeter wall",
  //       "Lighting fixtures",
  //       "Air conditioning",
  //       "Solar water heating system",
  //       "CCTV camera",
  //       "Parking space",
  //       "Borehole",
  //       "Gym",
  //       "Laundry",
  //       "Microwave",
  //       "Inbuild wardrobes",
  //     ],
  //     price: 54675,
  //     images: imagePlaceholder,
  //     bedrooms: 3,
  //     bathrooms: 2,
  //     category: [
  //       {
  //         categoryName: "For Rent",
  //         categoryId: "64d4a9d12ae9a7c96dba2684",
  //         _id: "64d4b13d2ae9a7c96dba2737",
  //       },
  //       {
  //         categoryName: "Featured",
  //         categoryId: "64d36c39632663f6a74fd5f8",
  //         _id: "64d4b13d2ae9a7c96dba2738",
  //       },
  //       {
  //         categoryName: "New Listing",
  //         categoryId: "64d4a9e82ae9a7c96dba268c",
  //         _id: "64d4b13d2ae9a7c96dba2739",
  //       },
  //     ],
  //     reviews: [],
  //     createdAt: "2023-08-10T09:43:25.988Z",
  //     updatedAt: "2023-08-10T09:43:25.988Z",
  //   },
  //   {
  //     type: {
  //       typeName: "Apartment",
  //       typeId: "64d4a97b2ae9a7c96dba2674",
  //     },
  //     location: {
  //       place: "bridgi",
  //       town: "tudor",
  //       county: "mombasa",
  //       country: "Kenya",
  //       postalCode: 4040,
  //     },
  //     _id: "64d4b1242ae9a7c96dba271e",
  //     name: "1 Bedroom Apartment call 0788990011",
  //     nameSlug: "1-bedroom-apartment-call-0788990011",
  //     description:
  //       "A one bedroom apartment in Tudor, please call 0788990011 for more information",
  //     features: [
  //       "Water storage tank",
  //       "Balcony",
  //       "CCTV camera",
  //       "Gated community",
  //       "Curtains",
  //       "WiFi",
  //       "Fans",
  //       "Free standing wardrobes",
  //     ],
  //     price: 12000,
  //     images: imagePlaceholder,
  //     bedrooms: 1,
  //     bathrooms: 1,
  //     category: [
  //       {
  //         categoryName: "For Rent",
  //         categoryId: "64d4a9d12ae9a7c96dba2684",
  //         _id: "64d4b1242ae9a7c96dba271f",
  //       },
  //       {
  //         categoryName: "New Listing",
  //         categoryId: "64d4a9e82ae9a7c96dba268c",
  //         _id: "64d4b1242ae9a7c96dba2720",
  //       },
  //     ],
  //     reviews: [],
  //     createdAt: "2023-08-10T09:43:00.645Z",
  //     updatedAt: "2023-08-10T09:43:00.645Z",
  //   },
  // ];

  return (
    <div className="page container">
      <Breadcrumb pageTitle={"Compare"} />
      <h2 className="font-poppinsSemibold text-darkThemeColor mt-[1.5rem] mb-[2rem] text-h3">
        Compare up to 3 Properties
      </h2>
      {compareProperties?.length > 0 ? (
        <div className="">
          <table className="flex space-x-[1rem] items-start">
            <thead className="w-[40%] sm:w-[30%]">
              <tr className="flex flex-col gap-4 justify-end items-end w-full">
                <th className="w-full h-[15vh] flex justify-end items-center">
                  <span className="">Image</span>
                </th>
                <th className="h-[5vh]">Name</th>
                <th className="h-[5vh]">Price</th>
                <th className="h-[5vh]">Location</th>
                <th className="h-[5vh]">Date Added</th>
                <th className="h-[5vh]">Property Type</th>
                <th className="h-[5vh]">Bedrooms</th>
                <th className="h-[5vh]">Bathrooms</th>
                <th className="h-[10vh]">Features</th>
                <th className="h-[2vh]">Remove</th>
              </tr>
            </thead>
            <tbody className="flex space-x-8 items-start overflow-x-auto scroll-smooth">
              {compareProperties?.map((property, index) => {
                return (
                  <tr className="flex flex-col gap-4 justify-start items-start w-[60%] flex-shrink-0 sm:w-[40%] md:w-[30%]">
                    <td className="min-h-[15vh] max-h-[15vh] overflow-hidden">
                      <img
                        src={compareProperties[index]?.images}
                        className="w-full h-full object-cover"
                      />
                    </td>
                    <td className="min-h-[5vh] max-h-[5vh]">
                      {compareProperties[index]?.name}
                    </td>
                    <td className="min-h-[5vh] max-h-[5vh]">
                      KES {compareProperties[index]?.price}
                    </td>
                    <td className="min-h-[5vh] max-h-[5vh]">
                      {compareProperties[index]?.location.place}
                    </td>
                    <td className="min-h-[5vh] max-h-[5vh]">
                      {compareProperties[index]?.createdAt}
                    </td>
                    <td className="min-h-[5vh] max-h-[5vh]">
                      {compareProperties[index]?.type.typeName}
                    </td>
                    <td className="min-h-[5vh] max-h-[5vh]">
                      {compareProperties[index]?.bedrooms}
                    </td>
                    <td className="min-h-[5vh] max-h-[5vh]">
                      {compareProperties[index]?.bathrooms}
                    </td>
                    <td className="min-h-[10vh] max-h-[10vh] overflow-y-auto scroll-smooth">
                      {compareProperties[index]?.features}
                    </td>
                    <td className="w-full h-[2vh] flex justify-center items-center">
                      <span
                        onClick={(e) =>
                          dispatch(removeFromCompare(compareProperties[index]))
                        }
                        className="text-red-500 text-h3 sm:text-h2"
                      >
                        <PiTrash />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-[30vh]">
          <div className="flex flex-col justify-center items-center space-y-[1.5rem] md:space-y-[2rem]">
            <h3 className="font-poppinsLight text-h3 sm:text-h2">
              No Properties to Compare
            </h3>
            <Link
              to="/all-properties"
              className="px-[1.75rem] py-[1rem] rounded-md bg-ctaColor text-bodyColor w-fit tracking-wide"
            >
              Add properties
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompareProperties;

{
  /* <tr className="flex flex-col gap-4 justify-start items-start">
                <td>Image</td>
                <td>{properties[1].name}</td>
                <td>KES {properties[1].price}</td>
                <td>{properties[1].location.place}</td>
                <td>{properties[1].createdAt}</td>
                <td>{properties[1].type.typeName}</td>
                <td>{properties[1].bedrooms}</td>
                <td>{properties[1].bathrooms}</td>
                <td>{properties[1].features}</td>
              </tr>
              <tr className="flex flex-col gap-4 justify-start items-start">
                <td>Image</td>
                <td>{properties[2].name}</td>
                <td>KES {properties[2].price}</td>
                <td>{properties[2].location.place}</td>
                <td>{properties[2].createdAt}</td>
                <td>{properties[2].type.typeName}</td>
                <td>{properties[2].bedrooms}</td>
                <td>{properties[2].bathrooms}</td>
                <td>{properties[2].features}</td>
              </tr> */
}
