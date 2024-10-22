import { useEffect, useState } from "react";
import Button from "../button/Button";
import Loader from "../loader/Loader";
import SectionTitle from "../section/SectionTitle";
import ArtCraftCategoryCart from "./ArtCraftCategoryCart";

function ArtCraftCategory() {
  // art craft category data get in database new collection
  const [artCraftCategory, setArtCraftCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  //   craft data slice
  const [sliceData, setSliceData] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://server-sand-two.vercel.app/art-craft-category"
        );
        const data = await response.json();
        setArtCraftCategory(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <section className="py-4 md:py-6 lg:py-8 dark:text-white dark:bg-black">
      {/* service title */}
      <SectionTitle title="Art Craft Category"></SectionTitle>
      <div className="container">
        {/* service items */}
        <div className="my-4 md:my-6 lg:my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4 md:gap-6">
          {artCraftCategory
            .slice(0, `${sliceData}`)
            .map((artCraftData, ind) => {
              return (
                <ArtCraftCategoryCart
                  key={artCraftData._id}
                  index={ind}
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
