import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import errorImage from "../../assets/error-img.jpg";
import Button from "../../components/button/Button";

function AllArtCraftCategoryCart({ artCraftCategoryItem }) {
  const { _id, image, subcategory, category, short_description } =
    artCraftCategoryItem;

  return (
    <>
      <div className="shadow-lg  hover:ring-1 hover:ring-orange-500/50 flex justify-center items-center space-y-3 flex-col text-center p-6 rounded-md hover:shadow-md group cursor-pointer transition-all duration-300 ease-linear">
        <img
          className="w-full h-[300px]"
          src={image.startsWith("http") ? image : errorImage}
          alt=""
        />
        <div className="w-full text-left flex flex-col items-start space-y-3">
          <h2 className="font-dancing-script text-3xl font-bold group-hover:text-orange-500 transition-all duration-300 ease-linear">
            {subcategory}
          </h2>
          <h1 className="text-2xl md:text-3xl font-poppins text-orange-900">
            {category}
          </h1>
          <p className="text-gray-400">{short_description.slice(0, 100)}...</p>
          <Link to={`/art-craft-subcategory-detailes/${_id}`}>
            <Button name={"View Detailes"} cls={"hover:!text-white"}></Button>
          </Link>
        </div>
      </div>
    </>
  );
}
AllArtCraftCategoryCart.propTypes = {
  artCraftCategoryItem: PropTypes.object.isRequired,
};

export default AllArtCraftCategoryCart;
