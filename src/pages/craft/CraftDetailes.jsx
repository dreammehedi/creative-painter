import { useLoaderData } from "react-router-dom";

function CraftDetailes() {
  const craftDetailesData = useLoaderData();
  console.log(craftDetailesData);

  return <div>CraftDetailes</div>;
}

export default CraftDetailes;
