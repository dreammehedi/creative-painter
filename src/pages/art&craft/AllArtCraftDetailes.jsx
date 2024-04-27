import { useLoaderData } from "react-router-dom";

function AllArtCraftDetailes() {
  // art craft detailes data get
  const artCraftDetailesData = useLoaderData();
  console.log(artCraftDetailesData);
  return <div>AllArtCraftDetailes</div>;
}

export default AllArtCraftDetailes;
