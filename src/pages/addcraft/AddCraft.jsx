import { useContext, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../auth/AuthProvider";
import SlugBanner from "../../components/slug_banner/SlugBanner";
function AddCraft() {
  // find path
  const { pathname } = useLocation();

  // user email get
  const { userData } = useContext(AuthContext);

  // sub category
  const [subCategory, setSubCategory] = useState("");

  // stock status
  const [statusStock, setStatusStock] = useState("");

  // customizaion status
  const [statusCustomization, setStatusCustomization] = useState("");

  // time status
  const [statusTime, setStatusTime] = useState("");

  // handle add item
  const handleAddItem = (e) => {
    e.preventDefault();
    const currentField = e.target;
    const itemName = currentField.itemName.value;
    const subCategoryName = subCategory;
    const shortDescription = currentField.shortDescription.value;
    const itemImage = currentField.itemImage.value;
    const price = currentField.price.value && `$${currentField.price.value}.00`;
    const time = currentField.time.value;
    const stockStatus = statusStock;
    const customization = statusCustomization;
    const email = currentField.email.value;
    const name = currentField.name.value;
    const rating = currentField["rating-2"].value;
    const newCraft = {
      itemName,
      subCategoryName,
      shortDescription,
      itemImage,
      price,
      time,
      stockStatus,
      customization,
      rating,
      email,
      name,
    };
    if (
      !itemName ||
      !subCategoryName ||
      !shortDescription ||
      !itemImage ||
      !price ||
      !time ||
      !stockStatus ||
      !customization
    ) {
      toast.error("All Field Value Must Be Required!");
      return;
    }

    fetch("https://server-sand-two.vercel.app/crafts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Craft data Added successfully.",
            icon: "success",
          });
          currentField.reset();
          setSubCategory("Sub Category");
          setStatusStock("Status");
          setStatusCustomization("Yes/No");
          setStatusTime("How Many Days");
        } else {
          Swal.fire({
            title: "Error",
            text: "An error occurred!",
            icon: "error",
          });
        }
      });
  };
  return (
    <>
      <Helmet>
        <title>Creative Painter | Add Art Craft</title>
      </Helmet>
      <SlugBanner path={pathname}></SlugBanner>
      <div className="container  my-4 md:my-6 lg:my-8 rounded-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-orange-900">
          Add New Craft
        </h1>
        <form
          onSubmit={handleAddItem}
          className="w-full lg:max-w-4xl lg:mx-auto ring-1 ring-orange-500/50 p-4 md:p-6 lg:p-8 my-4 md:my-6 lg:my-8  rounded-lg grid grid-cols-6 justify-between gap-4 md:gap-6"
        >
          <div className="col-span-6 lg:col-span-3 space-y-1 text-base font-medium">
            <label htmlFor="itemName" className="block text-orange-500">
              Item Name:
            </label>
            <input
              type="text"
              name="itemName"
              id="itemName"
              placeholder="Enter Item Name..."
              className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
            />
          </div>

          <div className="col-span-6 lg:col-span-3 space-y-1 text-base font-medium">
            <label htmlFor="subCategoryName" className="block text-orange-500">
              Sub Category Name:
            </label>
            <select
              placeholder="df"
              onChange={(e) => {
                setSubCategory(e.target.value);
              }}
              name="subCategoryName"
              className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 !text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
            >
              <option className="text-gray-800"></option>
              <option value="Landscape Painting">Landscape Painting</option>
              <option value="Portrait Drawing">Portrait Drawing</option>
              <option value="Watercolour Painting">Watercolour Painting</option>
              <option value="Oil Painting">Oil Painting</option>
              <option value="Charcoal Sketching">Charcoal Sketching</option>
              <option value="Cartoon Drawing">Cartoon Drawing</option>
            </select>
          </div>

          <div className="col-span-6 space-y-1 text-base font-medium">
            <label htmlFor="shortDescription" className="block text-orange-500">
              Description:
            </label>
            <textarea
              className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
              name="shortDescription"
              id="shortDescription"
              rows="3"
              placeholder="Enter Short Description..."
            ></textarea>
          </div>

          <div className="col-span-6 space-y-1 text-base font-medium">
            <label htmlFor="itemImage" className="block text-orange-500">
              Image:
            </label>
            <input
              type="text"
              name="itemImage"
              id="itemImage"
              placeholder="Enter Item Image Link..."
              className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
            />
          </div>

          <div className="col-span-6 space-y-1 text-base font-medium">
            <label htmlFor="price" className="block text-orange-500">
              Price:
            </label>
            {/* price */}
            <CurrencyInput
              className="col-span-6 lg:col-span-1  w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
              id="price"
              name="price"
              placeholder="$ Price..."
              decimalsLimit={2}
            ></CurrencyInput>
          </div>

          <div className="col-span-6  space-y-1 text-base font-medium grid grid-cols-3 gap-4 md:gap-6 items-center justify-between">
            {/* customization */}
            <div className="col-span-6 lg:col-span-1  space-y-1 flex flex-col items-start text-base font-medium">
              <label htmlFor="customization" className="block text-orange-500">
                Customization:
              </label>
              <select
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
            <div className="col-span-6 lg:col-span-1  space-y-1 flex flex-col items-start text-base font-medium">
              <label htmlFor="rating-2" className="block text-orange-500">
                Rating:
              </label>

              <div className="rating w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow">
                {/* Radio buttons for rating */}
                <input
                  type="radio"
                  name="rating-2"
                  value="1"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  value="2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  value="3"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  value="4"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  value="5"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            {/* processing time */}
            <div className="col-span-6 lg:col-span-1  space-y-1 flex flex-col items-start text-base font-medium">
              <label htmlFor="time" className="block text-orange-500">
                Processing Time:
              </label>
              <select
                onChange={(e) => {
                  setStatusTime(e.target.value);
                }}
                value={statusTime}
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
          </div>

          <div className="col-span-6 space-y-1 text-base font-medium focus:ring-orange-500">
            <label htmlFor="stockStatus" className="block text-orange-500">
              Stock Status:
            </label>
            <select
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

          <div className="col-span-6 lg:col-span-3 space-y-1 text-base font-medium">
            <label htmlFor="email" className="block text-orange-500">
              Email:
            </label>
            <input
              defaultValue={userData?.email}
              readOnly
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email..."
              className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
            />
          </div>
          <div className="col-span-6 lg:col-span-3  space-y-1 text-base font-medium">
            <label htmlFor="name" className="block text-orange-500">
              UserName:
            </label>
            <input
              defaultValue={userData?.displayName}
              readOnly
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name..."
              className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
            />
          </div>

          <button className="col-span-6 w-full p-3 text-center rounded-md text-gray-50 bg-orange-500 font-poppins font-medium hover:bg-orange-500/50">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default AddCraft;
