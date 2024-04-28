import PropTypes from "prop-types";
import errorImage from "../../assets/error-img.jpg";

function ArtCraftCategoryCart({ artCraftData }) {
  const { image } = artCraftData;
  console.log(artCraftData);
  return (
    <div className="shadow-lg  hover:ring-1 hover:ring-orange-500/50 flex justify-center items-center space-y-3 flex-col text-center p-6 rounded-md hover:shadow-md group cursor-pointer">
      <img
        className="w-full h-[300px]"
        src={image.startsWith("http") ? image : errorImage}
        alt=""
      />
      <h2 className="font-dancing-script text-3xl font-bold group-hover:text-orange-500 transition-all duration-300 ease-linear">
        Services Basic Painting
      </h2>
    </div>
  );
}
ArtCraftCategoryCart.propTypes = {
  artCraftData: PropTypes.object.isRequired,
};
export default ArtCraftCategoryCart;
