import PropTypes from "prop-types";
function SlugBanner({ path }) {
  return (
    <section className="bg-orange-50">
      <div className="container flex justify-center items-center w-full h-[200px]  text-orange-900 font-bold font-poppins text-3xl">
        {`Home ${path}`}
      </div>
    </section>
  );
}
SlugBanner.propTypes = {
  path: PropTypes.string.isRequired,
};
export default SlugBanner;
