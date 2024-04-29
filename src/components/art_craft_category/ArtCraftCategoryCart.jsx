import { Link } from "react-router-dom";
import errorImage from "../../assets/error-img.jpg";
// import tooltip styles
import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function ArtCraftCategoryCart({ artCraftData, index }) {
 
  const { image, main_category, subcategory_name, item_name, price, rating } =
    artCraftData;
  return (
    <Link to={`/all-art-craft-category/${main_category}`}>
      <div
        data-tooltip-id={`tooltip${index}`}
        className="shadow-lg  hover:ring-1 hover:ring-orange-500/50 flex justify-center items-center space-y-3 flex-col text-center p-6 rounded-md hover:shadow-md group cursor-pointer  transition-all duration-300 ease-linear"
      >
        <img
          className="w-full h-auto md:h-[300px] object-cover"
          src={image.startsWith("http") ? image : errorImage}
          alt=""
        />
        <h2 className="font-poppins text-2xl font-bold group-hover:text-orange-500 transition-all duration-300 ease-linear">
          {main_category}
        </h2>
      </div>
      <Tooltip id={`tooltip${index}`}>
        <div className="py-4">
          <p className="text-orange-500 text-xl font-semibold">
            Title: <span className="text-white text-[18px]">{item_name}</span>
          </p>
          <p className="text-orange-500 text-xl font-semibold">
            SubCategory:{" "}
            <span className="text-white text-[18px]">{subcategory_name}</span>
          </p>
          <p className="text-orange-500 text-xl font-semibold">
            Rating: <span className="text-white text-[18px]">{rating}</span>
          </p>
          <p className="text-orange-500 text-xl font-semibold">
            Price: <span className="text-white text-[18px]">{price}</span>
          </p>
        </div>
      </Tooltip>
    </Link>
  );
}
ArtCraftCategoryCart.propTypes = {
  artCraftData: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
export default ArtCraftCategoryCart;
