import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Logo({ mainCls, secCls }) {
  return (
    <Link
      to={"/"}
      className={`${mainCls} text-xl md:text-3xl lg:text-4xl font-bold capitalize`}
    >
      <span
        className={`${secCls} text-orange-500 hover:text-orange-900 transition-all duration-300 ease-linear`}
      >
        Creative Painter
      </span>
    </Link>
  );
}
Logo.propTypes = {
  mainCls: PropTypes.string,
  secCls: PropTypes.string,
};
export default Logo;
