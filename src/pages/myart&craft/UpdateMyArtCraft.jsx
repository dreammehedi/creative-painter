import { useLoaderData, useLocation } from "react-router-dom";
import SlugBanner from "../../components/slug_banner/SlugBanner";

function UpdateMyArtCraft() {
  // path find
  const { pathname } = useLocation();

  // get updated data

  const artCraftDataGet = useLoaderData();
  console.log(artCraftDataGet);
  return (
    <>
      <SlugBanner path={pathname}></SlugBanner>
    </>
  );
}

export default UpdateMyArtCraft;
