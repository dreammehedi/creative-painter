import { Helmet } from "react-helmet-async";
import { useLoaderData, useLocation } from "react-router-dom";
import errorImage from "../../assets/error-img.jpg";
import SectionTitle from "../../components/section/SectionTitle";
import SlugBanner from "../../components/slug_banner/SlugBanner";

function AllArtCraftCategoryCartDetailes() {
  // path find
  const { pathname } = useLocation();
  const artCraftCategoryDetailes = useLoaderData();

  const {
    image,
    item_name,
    main_category,
    subcategory_name,
    rating,
    price,
    short_description,
    key_elements,
    processing_time,
    origin,
  } = artCraftCategoryDetailes;
  console.log(artCraftCategoryDetailes);
  return (
    <>
      <Helmet>
        <title>Creative Painter | All Art Craft Category Detailes</title>
      </Helmet>
      <SlugBanner path={pathname}></SlugBanner>

      {/* craft detailes infomation */}
      <div className="container my-4 md:my-6 lg:my-8 ">
        <SectionTitle title="Art & Craft Sub Category Detailes"></SectionTitle>

        <div className="w-full transition-all duration-300 ease-linear hover:ring-1 hover:ring-orange-500/50 rounded-md md:max-w-3xl mx-auto mt-4 md:mt-6 lg:mt-8">
          <div className="flex flex-col justify-center items-center text-center shadow-md p-4 rounded-md">
            {/* craft image */}
            <img
              className="w-full h-[450px] object-cover rounded-md mb-4"
              src={image.startsWith("http") ? image : errorImage}
              alt=""
            />

            {/* craft information */}
            <div className="flex flex-col justify-between items-start text-left space-y-3">
              <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500">
                {item_name}
              </h1>
              <p className=" text-gray-400">{short_description}</p>
              <div className="w-full h-px border-b border-orange-500/50"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full  items-center">
                <h2 className="text-orange-500 font-semibold text-xl md:text-2xl">
                  Title:
                </h2>
                <h2 className="col-span-3 text-orange-900 font-medium text-left text-base">
                  {item_name}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full  items-center">
                <h2 className="text-orange-500 font-semibold text-xl md:text-2xl">
                  Category:
                </h2>
                <h2 className="col-span-3 text-orange-900 font-medium text-left text-base">
                  {main_category}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full  items-center">
                <h2 className="text-orange-500 font-semibold text-2xl">
                  SubCategory:
                </h2>
                <h2 className="col-span-3 text-orange-900 font-medium text-left text-base">
                  {subcategory_name}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full items-center">
                <h2 className="text-orange-500 font-semibold text-2xl">
                  Processing Time:
                </h2>
                <h2 className="col-span-3 text-orange-900 font-medium text-left text-base">
                  {processing_time}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full items-center">
                <h2 className="text-orange-500 font-semibold text-2xl">
                  Price:
                </h2>
                <h2 className="col-span-3 text-orange-900 font-medium text-left text-base">
                  {price}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full items-center">
                <h2 className="text-orange-500 font-semibold text-2xl">
                  Rating:
                </h2>
                <h2 className="col-span-3 text-orange-900 font-medium text-left text-base">
                  {rating}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <h2 className="text-orange-500 font-semibold text-2xl">
                  Key Element:
                </h2>
                <div className="md:col-span-3 mt-2 md:mt-0 flex flex-wrap justify-start gap-4 ">
                  {key_elements.map((keyItem, ind) => {
                    return (
                      <div
                        key={ind}
                        className="group ring-1 ring-orange-500/50 p-2 md:p-3 shadow-md flex flex-col justify-center items-center text-center rounded-md"
                      >
                        <h2 className="transition-all duration-300 ease-linear group-hover:text-orange-500 uppercase text-sm text-orange-900">
                          {keyItem}
                        </h2>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <h2 className="text-orange-500 font-semibold text-2xl">
                  Origin:
                </h2>
                <h2 className="col-span-3 text-orange-900 font-medium text-left text-base">
                  {origin}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <h2 className="text-orange-500 font-semibold text-2xl">
                  Description:
                </h2>
                <h2 className="col-span-3 text-orange-900 font-medium text-left text-base">
                  {short_description}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllArtCraftCategoryCartDetailes;
