import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import errorImage from "../../assets/error-img.jpg";

function ArtCraftCategoryCart({ artCraftData }) {
  const { image, main_category } = artCraftData;
  return (
    <Link to={`/all-art-craft-category/${main_category}`}>
      <div className="shadow-lg  hover:ring-1 hover:ring-orange-500/50 flex justify-center items-center space-y-3 flex-col text-center p-6 rounded-md hover:shadow-md group cursor-pointer  transition-all duration-300 ease-linear">
        <img
          className="w-full h-auto md:h-[300px] object-cover"
          src={image.startsWith("http") ? image : errorImage}
          alt=""
        />
        <h2 className="font-poppins text-2xl font-bold group-hover:text-orange-500 transition-all duration-300 ease-linear">
          {main_category}
        </h2>
      </div>
    </Link>
  );
}
ArtCraftCategoryCart.propTypes = {
  artCraftData: PropTypes.object.isRequired,
};
export default ArtCraftCategoryCart;
