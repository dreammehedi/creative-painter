import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import noDataFound from "../../assets/no-data-found.png";
import { AuthContext } from "../../auth/AuthProvider";
import Button from "../../components/button/Button";
import SectionTitle from "../../components/section/SectionTitle";
import SlugBanner from "../../components/slug_banner/SlugBanner";
function MyArtCraft() {
  // find path
  const { pathname } = useLocation();

  // find user email
  const { userData } = useContext(AuthContext);

  // my art craft data get
  const [myArtCraftData, setMyArtCraftData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/crafts")
      .then((res) => res.json())
      .then((data) => {
        // my art craft data find
        const myArtCraftData = data.filter(
          (item) => item.email === userData?.email
        );
        setMyArtCraftData(myArtCraftData);
      });
  }, [userData]);

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
        fetch(`http://localhost:5000/crafts/${itemId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
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
  return (
    <>
      <SlugBanner path={pathname}></SlugBanner>

      {/* my art & craft */}
      <div className="container">
        <div className="mt-4 md:mt-6 lg:mt-8">
          <SectionTitle title="My Art & Craft"></SectionTitle>
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
              } = artCraftData;
              return (
                <div
                  key={artCraftData._id}
                  className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md"
                >
                  <img
                    className="h-60 rounded-t-lg object-cover"
                    src={itemImage}
                  />

                  <span className="absolute top-0 left-0 w-40 translate-y-8 -translate-x-8 -rotate-45 bg-orange-900/50 text-center text-sm text-white">
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
                      Customization:{" "}
                      <span className="text-white rounded-md p-1 px-2 bg-orange-900 cursor-pointer font-medium">
                        {customization}
                      </span>
                    </p>
                    <div className="flex justify-between items-center gap-3">
                      <Link to={`/my-art-craft/${_id}`}>
                        <Button name="Update" cls={"!text-white"}></Button>
                      </Link>
                      <div
                        onClick={() => {
                          handleArtCraftDelete(_id);
                        }}
                      >
                        <Button name="Delete" cls={"!text-white"}></Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1  md:grid-cols-2 justify-center gap-6 items-center text-center my-4 md:my-6 lg:my-8">
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
