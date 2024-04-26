import "@smastrom/react-rating/style.css";

import CurrencyInput from "react-currency-input-field";

import "react-datepicker/dist/react-datepicker.css";
import { useLocation } from "react-router-dom";
import SlugBanner from "../../components/slug_banner/SlugBanner";
function AddCraft() {
  // find path
  const { pathname } = useLocation();
  // handle add item
  const handleAddItem = (e) => {
    e.preventDefault();
    const currentField = e.target;
    const itemName = currentField.itemName.value;
    const subCategoryName = currentField.subCategoryName.value;
    const shortDescription = currentField.shortDescription.value;
    const itemImage = currentField.itemImage.value;
    const price = currentField.price.value;
    const time = currentField.time.value;
    const stockStatus = currentField.stockStatus.value;
    const customization = currentField.customization.value;
    const email = currentField.email.value;
    const name = currentField.name.value;
    // const customization = currentField.customization;

    console.log(
      itemName,
      subCategoryName,
      shortDescription,
      itemImage,
      price,
      time,
      stockStatus,
      email,
      name,
      customization
    );
  };
  return (
    <>
      <SlugBanner path={pathname}></SlugBanner>
      <div className="my-4 md:my-6 lg:my-8 w-full max-w-3xl mx-auto p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 ring ring-orange-500">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-orange-900">
          Add New Craft
        </h1>
        <form
          onSubmit={handleAddItem}
          className="grid grid-cols-6 justify-between gap-4 md:gap-6"
        >
          <div className="col-span-3 space-y-1 text-base font-medium">
            <input
              required
              type="text"
              name="itemName"
              id="itemName"
              placeholder="Enter Item Name..."
              className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
            />
          </div>

          <div className="col-span-3 space-y-1 text-base font-medium">
            <input
              required
              type="text"
              name="subCategoryName"
              id="subCategoryName"
              placeholder="Enter SubCategory Name..."
              className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
            />
          </div>

          <div className="col-span-6 space-y-1 text-base font-medium">
            <textarea
              required
              className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
              name="shortDescription"
              id="shortDescription"
              rows="3"
              placeholder="Enter Short Description..."
            ></textarea>
          </div>

          <div className="col-span-6 space-y-1 text-base font-medium">
            <input
              required
              type="text"
              name="itemImage"
              id="itemImage"
              placeholder="Enter Item Image..."
              className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
            />
          </div>

          <div className="col-span-6  space-y-1 text-base font-medium grid grid-cols-3 gap-4 md:gap-6 items-center justify-between text-center">
            {/* price */}
            <CurrencyInput
              className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
              id="price"
              name="price"
              placeholder="$ Price..."
              decimalsLimit={2}
              onValueChange={(value, name, values) =>
                console.log(value, name, values)
              }
            ></CurrencyInput>

            {/* customization */}
            <div className="col-span-2 space-y-1 text-base font-medium flex items-center gap-2 w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow">
              <label>Customization:</label>
              <input
                type="radio"
                id="yes"
                name="customization"
                value="Yes"
                required
              />
              <label htmlFor="yes">Yes</label>
              <input
                type="radio"
                id="no"
                name="customization"
                value="No"
                required
              />
              <label htmlFor="madeToOrder">No</label>
            </div>
            {/* rating */}
            {/* <div className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow flex justify-center items-center">
            <Rating
              emptySymbol={<FaRegStar className="text-xl"></FaRegStar>}
              fullSymbol={<FaStar className="text-xl"></FaStar>}
            />
          </div> */}
          </div>

          <div className="col-span-6 space-y-1 text-base font-medium">
            <input
              required
              type="date"
              name="time"
              id="time"
              placeholder="Enter Processing Time..."
              className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
            />
          </div>

          <div className="col-span-6 space-y-1 text-base font-medium flex items-center gap-2 w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow">
            <label>Stock Status:</label>
            <input
              type="radio"
              id="inStock"
              name="stockStatus"
              value="In stock"
              required
            />
            <label htmlFor="inStock">In stock</label>
            <input
              type="radio"
              id="madeToOrder"
              name="stockStatus"
              value="Made to Order"
              required
            />
            <label htmlFor="madeToOrder">Made to Order</label>
          </div>

          <div className="col-span-3 space-y-1 text-base font-medium">
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email..."
              className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
            />
          </div>
          <div className="col-span-3 space-y-1 text-base font-medium">
            <input
              required
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
