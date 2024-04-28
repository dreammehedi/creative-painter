import { useLoaderData, useLocation } from "react-router-dom";
import SlugBanner from "../../components/slug_banner/SlugBanner";

function AllArtCraftCategoryCartDetailes() {
  // path find
  const { pathname } = useLocation();
  const artCraftCategoryDetailes = useLoaderData();
  console.log(artCraftCategoryDetailes);
  return (
    <>
      <SlugBanner path={pathname}></SlugBanner>
      <section></section>
    </>
  );
}

export default AllArtCraftCategoryCartDetailes;
