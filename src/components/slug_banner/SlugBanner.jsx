import PropTypes from "prop-types";
function SlugBanner({ path }) {
  return (
    <section className="bg-orange-50 w-full h-[200px] flex items-center">
      <h1 className="container lg:text-center text-orange-900 font-bold font-poppins text-2xl md:text-3xl break-words text-wrap overflow-hidden">
        {`Home ${path}`}
      </h1>
    </section>
  );
}
SlugBanner.propTypes = {
  path: PropTypes.string.isRequired,
};
export default SlugBanner;
