import PropTypes from "prop-types";
function SectionTitle({ title }) {
  return (
    <div className="text-center">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold font-dancing-script text-orange-500">
        {title}
      </h2>
    </div>
  );
}
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SectionTitle;