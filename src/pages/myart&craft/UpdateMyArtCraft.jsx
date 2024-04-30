import { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import errorImage from "../../assets/error-img.jpg";
import SectionTitle from "../../components/section/SectionTitle";
import SlugBanner from "../../components/slug_banner/SlugBanner";

function UpdateMyArtCraft() {
  // path find
  const { pathname } = useLocation();

  // get updated data

  const artCraftDataGet = useLoaderData();
  const {
    _id,
    itemImage,
    itemName,
    subCategoryName,
    time,
    price,
    shortDescription,
    customization,
    stockStatus,
    rating,
  } = artCraftDataGet;

  // sub category
  const [subCategory, setSubCategory] = useState(subCategoryName);

  // stock status
  const [statusStock, setStatusStock] = useState(stockStatus);

  // customizaion status
  const [statusCustomization, setStatusCustomization] = useState(customization);

  // time status
  const [statusTime, setStatusTime] = useState(time);

  const priceSplit = price.split("");
  const slicePrice = priceSplit.slice(1, priceSplit.length);
  const numberPrice = Number(slicePrice.join(""));

  // handle my art & craft data update
  const handleMyArtCraftUpdate = (e, id) => {
    e.preventDefault();
    const currentField = e.target;
    const itemName = currentField.itemName.value;
    const subCategoryName = currentField.subCategoryName.value;
    const shortDescription = currentField.shortDescription.value;
    const itemImage = currentField.itemImage.value;
    const price = currentField.price.value;
    const stockStatus = currentField.stockStatus.value;
    const customization = currentField.customization.value;
    const rating = currentField.rating.value;
    const time = currentField.time.value;

    const updatedArtCraftData = {
      itemName,
      subCategoryName,
      shortDescription,
      itemImage,
      price,
      time,
      stockStatus,
      customization,
      rating,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-sand-two.vercel.app/crafts/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedArtCraftData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Updated!",
                text: "Your data has been updated.",
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
      <Helmet>
        <title>Creative Painter | Update Art Craft</title>
      </Helmet>
      <SlugBanner path={pathname}></SlugBanner>

      <div className="container mb-4 md:mb-6 lg:mb-8">
        <div className="my-4 md:my-6 lg:my-8">
          <SectionTitle title="Update Art & Craft"></SectionTitle>
        </div>
        {/* update art & craft */}
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-4 md:gap-6">
          <img
            className="ring-1 ring-orange-500 p-3 rounded-md shadow-lg transition-all duration-300 ease-linear hover:scale-[1.02] cursor-pointer object-contain w-full h-auto"
            src={itemImage.startsWith("http") ? itemImage : errorImage}
            alt=""
          />
          <form
            onSubmit={(e) => {
              handleMyArtCraftUpdate(e, _id);
            }}
            className="ring-1 shadow-lg ring-orange-500 p-4 rounded-md col-span-2 grid grid-cols-6 justify-between gap-4 md:gap-6"
          >
            <div className="col-span-6 space-y-1 text-base font-medium">
              <label
                htmlFor="itemImage"
                className="inline-block text-orange-500 text-sm font-medium font-poppins uppercase"
              >
                Image Link:
              </label>
              <input
                defaultValue={artCraftDataGet.itemImage}
                type="text"
                name="itemImage"
                id="itemImage"
                placeholder="Enter Image Link..."
                className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
              />
            </div>
            <div className="col-span-6 lg:col-span-3 space-y-1 text-base font-medium">
              <label
                htmlFor="itemName"
                className="inline-block text-orange-500 text-sm font-medium font-poppins uppercase"
              >
                Item Name:
              </label>
              <input
                defaultValue={itemName}
                type="text"
                name="itemName"
                id="itemName"
                placeholder="Enter Item Name..."
                className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
              />
            </div>

            <div className="col-span-6 lg:col-span-3 space-y-1 text-base font-medium">
              <label
                htmlFor="subCategoryName"
                className="inline-block text-orange-500 text-sm font-medium font-poppins uppercase"
              >
                Sub Category Name:
              </label>
              <select
                defaultValue={subCategory}
                onChange={(e) => {
                  setSubCategory(e.target.value);
                }}
                name="subCategoryName"
                className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 !text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
              >
                <option className="text-gray-800"></option>
                <option value="Landscape Painting">Landscape Painting</option>
                <option value="Portrait Drawing">Portrait Drawing</option>
                <option value="Watercolour Painting">
                  Watercolour Painting
                </option>
                <option value="Oil Painting">Oil Painting</option>
                <option value="Charcoal Sketching">Charcoal Sketching</option>
                <option value="Cartoon Drawing">Cartoon Drawing</option>
              </select>
            </div>

            <div className="col-span-6 space-y-1 text-base font-medium">
              <label
                htmlFor="shortDescription"
                className="inline-block text-orange-500 text-sm font-medium font-poppins uppercase"
              >
                Short Description:
              </label>
              <textarea
                defaultValue={shortDescription}
                className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
                name="shortDescription"
                id="shortDescription"
                rows="3"
                placeholder="Enter Short Description..."
              ></textarea>
            </div>

            <div className="col-span-6 space-y-1 text-base font-medium grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 items-center justify-between text-center">
              <div className="flex flex-col items-start gap-1">
                {/* price */}
                <label
                  htmlFor="price"
                  className="inline-block text-orange-500 text-sm font-medium font-poppins uppercase"
                >
                  Price:
                </label>
                <CurrencyInput
                  defaultValue={numberPrice}
                  className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
                  id="price"
                  name="price"
                  placeholder="$ Price..."
                  decimalsLimit={2}
                ></CurrencyInput>
              </div>

              {/* customization */}
              <div className="col-span-2 flex flex-col items-start gap-1 ">
                <label
                  htmlFor="customization"
                  className="inline-block text-orange-500 text-sm font-medium font-poppins uppercase"
                >
                  Customization:
                </label>
                <select
                  defaultValue={statusCustomization}
                  onChange={(e) => {
                    setStatusCustomization(e.target.value);
                  }}
                  name="customization"
                  className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 !text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
                >
                  <option className="text-gray-800"></option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              {/* rating */}
              <div className="space-y-1 flex flex-col items-start text-base font-medium">
                <label
                  htmlFor="rating"
                  className="inline-block text-orange-500 text-sm font-medium font-poppins uppercase"
                >
                  Rating:
                </label>
                <input
                  min={1}
                  max={5}
                  defaultValue={rating}
                  type="number"
                  name="rating"
                  id="rating"
                  placeholder="Enter Your Rating..."
                  className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
                />
              </div>
            </div>

            <div className="col-span-6 space-y-1 text-base font-medium">
              <label
                htmlFor="time"
                className="inline-block text-orange-500 text-sm font-medium font-poppins uppercase"
              >
                Date:
              </label>
              <select
                defaultValue={statusTime}
                onChange={(e) => {
                  setStatusTime(e.target.value);
                }}
                name="time"
                className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 !text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
              >
                <option className="text-gray-800"></option>
                <option value="1 Days">1 Days</option>
                <option value="2 Days">2 Days</option>
                <option value="3 Days">3 Days</option>
                <option value="4 Days">4 Days</option>
                <option value="5 Days">5 Days</option>
              </select>
            </div>

            <div className="col-span-6 flex flex-col items-start gap-1">
              <label
                htmlFor="stockStatus"
                className="inline-block text-orange-500 text-sm font-medium font-poppins uppercase"
              >
                Stock Status:
              </label>
              <select
                defaultValue={statusStock}
                onChange={(e) => {
                  setStatusStock(e.target.value);
                }}
                name="stockStatus"
                className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 !text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
              >
                <option className="text-gray-800"></option>
                <option className="text-green-500" value="In Stock">
                  In Stock
                </option>
                <option className="text-red-500" value="Made To Order">
                  Made To Order
                </option>
              </select>
            </div>

            <button className="col-span-6 w-full p-3 text-center rounded-md text-gray-50 bg-orange-500 font-poppins font-medium hover:bg-orange-500/50">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateMyArtCraft;
