import { useEffect, useState } from "react";
import SectionTitle from "../section/SectionTitle";
import ArtCraftCategoryCart from "./ArtCraftCategoryCart";

function ArtCraftCategory() {
  // art craft category data get in database new collection
  const [artCraftCategory, setArtCraftCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/art-craft/category")
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
        <div className="my-4 md:my-6 lg:my-8 grid grid-cols-3 justify-between gap-4 md:gap-6">
          {artCraftCategory.slice(0, 6).map((artCraftData) => {
            return (
              <ArtCraftCategoryCart
                key={artCraftData._id}
                artCraftData={artCraftData}
              ></ArtCraftCategoryCart>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ArtCraftCategory;
