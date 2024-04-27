import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import errorImg from "../../assets/error-img.jpg";
import Button from "../button/Button";
function CraftCart({ craft }) {
  const {
    _id,
    itemName,
    itemImage,
    stockStatus,
    price,
    shortDescription,
    subCategoryName,
  } = craft;
  return (
    <div className="space-y-3 cursor-pointer p-4 md:p-6 hover:shadow rounded-lg hover:shadow-orange-500/50 group transition-all duration-300 ease-linear ring-1 ring-orange-500/50">
      <h1 className="font-semibold text-3xl md:text-4xl text-orange-900 capitalize leading-normal md:!leading-[50px]">
        {itemName}
      </h1>
      <h1 className="font-semibold text-xl text-orange-500 capitalize ">
        {subCategoryName}
      </h1>
      <img
        className="group-hover:scale-[1.02] transition-all duration-300 ease-linear object-cover w-full h-[300px] rounded-md cursor-pointer"
        src={itemImage ? itemImage : errorImg}
        alt=""
      />
      <p className="text-gray-500">{shortDescription}</p>
      <div className="flex items-center gap-4">
        <Button
          name={price}
          cls={"!bg-orange-900 !rounded-full !px-6 !py-2 !text-white "}
        ></Button>
        <Button
          name={stockStatus}
          cls={"!bg-orange-900 !rounded-full !px-6 !py-2 !text-white "}
        ></Button>
      </div>
      <div className="mt-3">
        <Link to={`/craft-detailes/${_id}`}>
          <Button
            name={"View Detailes"}
            cls={"hover:text-white group-hover:bg-orange-500"}
          ></Button>
        </Link>
      </div>
    </div>
  );
}
CraftCart.propTypes = {
  craft: PropTypes.object.isRequired,
};
export default CraftCart;
