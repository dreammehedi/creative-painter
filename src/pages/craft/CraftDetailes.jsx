import { FaRegFaceGrinStars } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { useLoaderData, useLocation } from "react-router-dom";
import SectionTitle from "../../components/section/SectionTitle";
import SlugBanner from "../../components/slug_banner/SlugBanner";

function CraftDetailes() {
  const craftDetailesData = useLoaderData();
  console.log(craftDetailesData);
  const {
    itemName,
    itemImage,
    time,
    price,
    rating,
    stockStatus,
    customization,
    subCategoryName,
    shortDescription,
  } = craftDetailesData;

  // find path
  const { pathname } = useLocation();

  return (
    <>
      <SlugBanner path={pathname}></SlugBanner>

      {/* craft detailes infomation */}
      <div className="container my-4 md:my-6 lg:my-8 ">
        <SectionTitle title="Craft Detailes"></SectionTitle>

        <div className="mt-4 md:mt-6 lg:mt-8 grid grid-cols-3 justify-between items-center gap-4 md:gap-6">
          <div className="col-span-2 shadow-md p-4 rounded-l">
            {/* craft image */}
            <img
              className="w-full h-[450px] object-cover rounded-md mb-4"
              src={itemImage}
              alt=""
            />

            {/* craft information */}
            <div className="flex flex-col space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500">
                {itemName}
              </h1>
              <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                <div className="flex items-center md:space-x-2">
                  <p className="text-base font-semibold text-orange-900 uppercase">
                    {subCategoryName}
                  </p>
                </div>
                <p className="text-orange-500 font-medium">{time}</p>
              </div>

              <p className="text-gray-400">{shortDescription}</p>

              <div className="grid grid-cols-4 justify-between gap-4 md:gap-6">
                <div className="space-y-3 p-4 shadow-md flex flex-col justify-center items-center text-center">
                  <h2 className="text-2xl text-orange-900">Price</h2>
                  <RiMoneyDollarCircleLine className="text-5xl text-orange-500"></RiMoneyDollarCircleLine>
                  <span className="font-extrabold font-poppins text-2xl">
                    ${price}
                  </span>
                </div>
                <div className="space-y-3 p-4 shadow-md flex flex-col justify-center items-center text-center">
                  <h2 className="text-2xl text-orange-900">Rating</h2>
                  <FaRegFaceGrinStars className="text-5xl text-orange-500"></FaRegFaceGrinStars>
                  <span className="font-extrabold font-poppins text-2xl">
                    {rating}
                  </span>
                </div>
                <div className="space-y-3 p-4 shadow-md flex flex-col justify-center items-center text-center">
                  <h2 className="text-2xl text-orange-900">Status</h2>
                  <GrStatusGood className="text-5xl text-orange-500"></GrStatusGood>
                  <span className="font-extrabold font-poppins text-2xl">
                    {stockStatus}
                  </span>
                </div>
                <div className="space-y-3 p-4 shadow-md flex flex-col justify-center items-center text-center rounded-lg">
                  <h2 className="text-2xl text-orange-900">Customization</h2>
                  <RxUpdate className="text-5xl text-orange-500"></RxUpdate>
                  <span className="font-extrabold font-poppins text-2xl">
                    {customization}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* more craft */}
          <div>
    
          </div>
        </div>
      </div>
    </>
  );
}

export default CraftDetailes;
