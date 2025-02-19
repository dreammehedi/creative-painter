import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import Button from "../button/Button";
import SectionTitle from "../section/SectionTitle";
import CraftCart from "./CraftCart";
function Craft() {
  // loading state
  const [loading, setLoading] = useState(true);
  // craft data get
  const [craftData, setCraftData] = useState([]);
  //   craft data slice
  const [sliceData, setSliceData] = useState(6);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://server-sand-two.vercel.app/crafts"
        );
        const data = await response.json();
        setCraftData(data);
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
    <section className="dark:bg-black dark:text-white">
      {/* craft title */}
      <SectionTitle title="Our Art Craft Items"></SectionTitle>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4 md:gap-6 ">
        {craftData.slice(0, `${sliceData}`).map((craft, ind) => {
          return <CraftCart key={ind} craft={craft}></CraftCart>;
        })}
      </div>
      {/* view all crafts */}
      {craftData.length > sliceData && (
        <div
          onClick={() => {
            setSliceData(sliceData + 3);
          }}
          className="py-4 md:py-6 lg:py-8 col-span-3 flex justify-center items-center"
        >
          <Button
            name={"All Craft"}
            cls={"!bg-orange-500 !text-white hover:!bg-orange-900 !px-6"}
          ></Button>
        </div>
      )}
    </section>
  );
}

export default Craft;
