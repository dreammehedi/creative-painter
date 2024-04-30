import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import errorImage from "../../assets/error-img.jpg";
import noDataFound from "../../assets/no-data-found.png";
import { AuthContext } from "../../auth/AuthProvider";
import Button from "../../components/button/Button";
import Loader from "../../components/loader/Loader";
import SectionTitle from "../../components/section/SectionTitle";
import SlugBanner from "../../components/slug_banner/SlugBanner";

function MyArtCraft() {
  // loading
  const [loading, setLoading] = useState(true);
  // find path
  const { pathname } = useLocation();
  // find user email
  const { userData } = useContext(AuthContext);

  // my art craft data get
  const [myArtCraftData, setMyArtCraftData] = useState([]);

  // State to manage the selected option
  const [selectedFilter, setSelectedFilter] = useState("Filter");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://server-sand-two.vercel.app/crafts/users/${userData?.email}`
        );
        const data = await response.json();
        setMyArtCraftData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [userData?.email]);

  // art craft data delete handler
  const handleArtCraftDelete = (itemId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#F97316",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-sand-two.vercel.app/crafts/${itemId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingArtCraftData = myArtCraftData.filter(
                (data) => data._id !== itemId
              );
              setMyArtCraftData(remainingArtCraftData);
              Swal.fire({
                title: "Deleted!",
                text: "Your data has been deleted.",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Error",
                text: "An error occurred!",
                icon: "error",
              });
            }
          });
      }
    });
  };

  // handle filter with customization
  const handleCustomizationFilter = (event) => {
    const selectedFilter = event.target.value;
    setSelectedFilter(selectedFilter);
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://server-sand-two.vercel.app/crafts/users/customization/${userData?.email}/${selectedFilter}`
        );
        const data = await response.json();
        setMyArtCraftData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  };

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <Helmet>
        <title>Creative Painter | My Art Craft</title>
      </Helmet>
      <SlugBanner path={pathname}></SlugBanner>

      {/* my art & craft */}
      <div className="container">
        <div className="mt-4 md:mt-6 lg:mt-8">
          <SectionTitle title="My Art & Craft"></SectionTitle>
        </div>

        {/* filter data by customization */}

        <div className="my-4 md:my-6 lg:my-8 max-w-sm mx-auto">
          <label
            htmlFor="customization"
            className="block mb-2 text-base uppercase font-medium text-orange-500 "
          >
            Select Customization
          </label>
          <select
            value={selectedFilter}
            name="customization"
            onChange={handleCustomizationFilter}
            className="border  text-white text-base rounded-lg  block w-full p-2.5 bg-orange-900/50 border-orange-900 placeholder-gray-400  focus:ring-orange-500 outline-none focus:border-orange-500"
          >
            <option disabled>Filter</option>
            <option value="All">All</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {myArtCraftData.length > 0 ? (
          <div className="my-4 md:my-6 lg:my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4 md:gap-6 ">
            {myArtCraftData.map((artCraftData) => {
              const {
                _id,
                itemName,
                itemImage,
                price,
                stockStatus,
                customization,
                rating,
              } = artCraftData;
              return (
                <div
                  key={artCraftData._id}
                  className="group hover:ring-1 hover:scale-[1.01] hover:ring-orange-500 transition-all duration-300 ease-linear relative w-full overflow-hidden rounded-md bg-white shadow-md"
                >
                  <img
                    className="group-hover:scale-[1.02] transition-all duration-300 ease-linear border-b p-2 border-orange-900/50 h-60 w-full rounded-t-lg object-contain"
                    src={itemImage?.startsWith("http") ? itemImage : errorImage}
                  />

                  <span className="group-hover:rotate-0 group-hover:bg-orange-500 group-hover:translate-x-0 absolute top-0 left-0 w-40 translate-y-8 -translate-x-8 -rotate-45 bg-orange-900/50 text-center text-sm text-white transition-all duration-300 ease-linear">
                    {stockStatus}
                  </span>
                  <div className="mt-4 px-5 pb-5 space-y-4">
                    <h5 className="text-xl font-semibold tracking-tight text-orange-900">
                      {itemName}
                    </h5>

                    <div>
                      <p>
                        <span className="text-3xl font-bold text-slate-900">
                          ${price}
                        </span>
                      </p>
                    </div>
                    <p className="text-orange-900 font-bold">
                      Rating:{" "}
                      <span className="text-white rounded-md p-1 px-2 bg-orange-900 cursor-pointer font-medium">
                        {rating}
                      </span>
                    </p>
                    <p className="text-orange-900 font-bold">
                      Customization:{" "}
                      <span className="text-white rounded-md p-1 px-2 bg-orange-900 cursor-pointer font-medium">
                        {customization}
                      </span>
                    </p>
                    <div className="flex justify-between items-center gap-3">
                      <Link to={`/my-art-craft/${_id}`}>
                        <Button
                          name="Update"
                          cls={"!text-white group-hover:!bg-orange-500"}
                        ></Button>
                      </Link>
                      <div
                        onClick={() => {
                          handleArtCraftDelete(_id);
                        }}
                      >
                        <Button
                          name="Delete"
                          cls={"!text-white  group-hover:!bg-red-500"}
                        ></Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1  md:grid-cols-2 justify-center gap-6 items-center text-center my-6 md:my-8 lg:my-12">
            <div className="flex flex-col space-y-3">
              <h1 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-orange-500">
                No Data Found!
              </h1>
              <h3 className="text-xl md:text-2xl text-orange-900">
                Please Add Some Data.
              </h3>
              <div>
                <Link to={"/add-craft"}>
                  <Button
                    name={"Add Data"}
                    cls={"!bg-orange-500 !text-white hover:!bg-orange-900"}
                  ></Button>
                </Link>
              </div>
            </div>
            <img
              className="h-[300px] object-contain w-auto mx-auto"
              src={noDataFound}
              alt="No Data Found!"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default MyArtCraft;
