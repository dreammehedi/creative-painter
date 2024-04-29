import { useEffect, useState } from "react";
import Button from "../button/Button";
import SectionTitle from "../section/SectionTitle";
import ArtCraftCategoryCart from "./ArtCraftCategoryCart";

function ArtCraftCategory() {
  // art craft category data get in database new collection
  const [artCraftCategory, setArtCraftCategory] = useState([]);

  //   craft data slice
  const [sliceData, setSliceData] = useState(6);

  useEffect(() => {
    fetch("https://server-sand-two.vercel.app/art-craft-category")
      .then((res) => res.json())
      .then((data) => {
        setArtCraftCategory(data);
      });
  }, []);

  return (
    <section className="my-4 md:my-6 lg:my-8">
      <div className="container">
        {/* service title */}
        <SectionTitle title="Art Craft Category"></SectionTitle>

        {/* service items */}
        <div className="my-4 md:my-6 lg:my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4 md:gap-6">
          {artCraftCategory.slice(0, `${sliceData}`).map((artCraftData) => {
            return (
              <ArtCraftCategoryCart
                key={artCraftData._id}
                artCraftData={artCraftData}
              ></ArtCraftCategoryCart>
            );
          })}
        </div>

        {/* view all art craft sub category */}
        {artCraftCategory.length > sliceData && (
          <div
            onClick={() => {
              setSliceData(sliceData + 3);
            }}
            className="col-span-3 flex justify-center items-center"
          >
            <Button
              name={"All Art Craft Category"}
              cls={"!bg-orange-500 !text-white hover:!bg-orange-900 !px-6"}
            ></Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ArtCraftCategory;
