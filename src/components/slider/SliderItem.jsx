import PropTypes from "prop-types";
function SliderItem({ bg, title, des, children }) {
  return (
    <div
      style={{
        background: `linear-gradient(to right, rgb(255 165 0 / 49%), rgb(51 51 51 / 99%)), url(${bg})`,
      }}
      className="w-full h-full !bg-no-repeat !bg-cover !bg-right-top flex flex-col items-center justify-center"
    >
      <div className="container space-y-3 md:space-y-6 w-full md:max-w-2xl !mr-auto !ml-0">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold capitalize font-poppins">
          {title}
        </h1>
        <p className="text-gray-300">{des}</p>
        {children}
      </div>
    </div>
  );
}
SliderItem.propTypes = {
  bg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default SliderItem;
