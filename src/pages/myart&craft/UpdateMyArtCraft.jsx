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
              <input
                defaultValue={subCategoryName}
                type="text"
                name="subCategoryName"
                id="subCategoryName"
                placeholder="Enter SubCategory Name..."
                className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
              />
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
                  defaultValue={price}
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
                <div className="flex gap-3 w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow">
                  <input
                    defaultChecked={customization === "Yes"}
                    type="radio"
                    id="yes"
                    name="customization"
                    value="Yes"
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    defaultChecked={customization === "No"}
                    type="radio"
                    id="no"
                    name="customization"
                    value="No"
                  />
                  <label htmlFor="madeToOrder">No</label>
                </div>
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
              <input
                defaultValue={time}
                type="date"
                name="time"
                id="time"
                placeholder="Enter Processing Time..."
                className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
              />
            </div>

            <div className="col-span-6 space-y-1 text-base font-medium flex items-center gap-2 w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow">
              <label
                htmlFor="stockStatus"
                className="inline-block text-orange-500 text-sm font-medium font-poppins uppercase"
              >
                Stock Status:
              </label>
              <input
                defaultChecked={stockStatus === "In stock"}
                type="radio"
                id="inStock"
                name="stockStatus"
                value="In stock"
              />
              <label htmlFor="inStock">In stock</label>
              <input
                defaultChecked={stockStatus === "Made to Order"}
                type="radio"
                id="madeToOrder"
                name="stockStatus"
                value="Made to Order"
              />
              <label htmlFor="madeToOrder">Made to Order</label>
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
