import { useLoaderData, useLocation } from "react-router-dom";
import SectionTitle from "../../components/section/SectionTitle";
import SlugBanner from "../../components/slug_banner/SlugBanner";
import AllArtCraftCategoryCart from "./AllArtCraftCategoryCart";
function AllArtCraftCategory() {
  // find path
  const { pathname } = useLocation();

  // art craft category data
  const artCraftCategoryData = useLoaderData();
  return (
    <>
      <SlugBanner path={pathname}></SlugBanner>
      <div className="my-4 md:my-6 lg:my-8">
        <SectionTitle title={`All SubCategory Data`}></SectionTitle>
      </div>
      <section className="my-4 md:my-6 lg:my-8">
        <div className="container grid grid-cols-3 justify-between gap-4 md:gap-6">
          {artCraftCategoryData.map((artCraftCategoryItem) => {
            return (
              <AllArtCraftCategoryCart
                key={artCraftCategoryItem._id}
                artCraftCategoryItem={artCraftCategoryItem}
              ></AllArtCraftCategoryCart>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default AllArtCraftCategory;
