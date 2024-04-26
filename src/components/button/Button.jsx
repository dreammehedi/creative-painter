import PropTypes from "prop-types";
function Button({ type, cls, name }) {
  return (
    <button
      type={type}
      className={`${cls} font-space-grotesk text-[18px] font-semibold bg-orange-900/50 rounded-lg px-4 py-3 transition-all duration-300 ease-linear hover:bg-orange-900 hover:shadow-md hover:text-orange-500`}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  cls: PropTypes.string,
  name: PropTypes.string,
};
export default Button;
