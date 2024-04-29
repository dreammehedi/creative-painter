import { useLoaderData, useLocation } from "react-router-dom";
import SectionTitle from "../../components/section/SectionTitle";
import SlugBanner from "../../components/slug_banner/SlugBanner";

function AllArtCraftDetailes() {
  // find path
  const { pathname } = useLocation();

  // art craft detailes data get
  const artCraftDetailesData = useLoaderData();

  const {
    itemImage,
    itemName,
    price,
    stockStatus,
    customization,
    time,
    shortDescription,
    subCategoryName,
    rating,
  } = artCraftDetailesData;

  return (
    <>
      <SlugBanner path={pathname}></SlugBanner>

      {/* craft detailes infomation */}
      <div className="container my-4 md:my-6 lg:my-8 ">
        <SectionTitle title="Arts & Craft Detailes"></SectionTitle>

        <div className=" w-full flex justify-center items-center flex-col text-center md:max-w-4xl md:mx-auto shadow-md p-4 rounded-l">
          {/* craft image */}
          <img
            className="w-full h-auto lg:h-[450px] object-cover rounded-md mb-4"
            src={itemImage}
            alt=""
          />

          {/* craft information */}
          <div className="flex flex-col items-center justify-center text-center space-y-3">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500">
              {itemName}
            </h1>
            <div className="flex flex-col items-center justify-center w-full  text-gray-600">
              <div className="flex flex-col justify-center items-center ">
                <p className="mb-2 text-base font-semibold text-orange-900 uppercase">
                  {subCategoryName}
                </p>
              </div>
              <p className="text-orange-500 font-medium">{time}</p>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <p className="text-xl font-poppins text-orange-500">
                Price:{" "}
                <span className="text-orange-900 text-[18px]">${price}</span>
              </p>
              <p className="text-xl font-poppins text-orange-500">
                Rating:{" "}
                <span className="text-orange-900 text-[18px]">{rating}</span>
              </p>
              <p className="text-xl font-poppins text-orange-500">
                Stock Status:{" "}
                <span className="text-orange-900 text-[18px]">
                  {stockStatus}
                </span>
              </p>
              <p className="text-xl font-poppins text-orange-500">
                Customization:{" "}
                <span className="text-orange-900 text-[18px]">
                  {customization}
                </span>
              </p>
            </div>
            <p className="text-gray-400">{shortDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllArtCraftDetailes;
