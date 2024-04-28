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
    fetch("http://localhost:5000/crafts")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCraftData(data);
      });
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <section>
      <div className="container my-4 md:my-6 lg:my-8">
        {/* craft title */}
        <SectionTitle title="Our Crafts Items"></SectionTitle>
        <div className=" my-4 md:my-6 lg:my-8 grid grid-cols-3 justify-between gap-6 md:gap-8">
          {craftData.slice(0, `${sliceData}`).map((craft, ind) => {
            return <CraftCart key={ind} craft={craft}></CraftCart>;
          })}

          {/* view all crafts */}
          {craftData.length > sliceData && (
            <div
              onClick={() => {
                setSliceData(sliceData + 3);
              }}
              className="col-span-3 flex justify-center items-center"
            >
              <Button
                name={"All Craft"}
                cls={"!bg-orange-500 !text-white hover:!bg-orange-900 !px-6"}
              ></Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Craft;
