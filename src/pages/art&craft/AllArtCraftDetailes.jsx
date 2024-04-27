import { useLoaderData, useLocation } from "react-router-dom";
import SlugBanner from "../../components/slug_banner/SlugBanner";

function AllArtCraftDetailes() {
  // find path
  const { pathname } = useLocation();

  // art craft detailes data get
  const artCraftDetailesData = useLoaderData();
  console.log(artCraftDetailesData);

  return (
    <>
      <SlugBanner path={pathname}></SlugBanner>
    </>
  );
}

export default AllArtCraftDetailes;
