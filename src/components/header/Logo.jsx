import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Logo({ mainCls, secCls }) {
  return (
    <Link
      to={"/"}
      className={`${mainCls} text-2xl md:text-3xl lg:text-4xl font-bold capitalize`}
    >
      3<span className={`${secCls} text-orange-900`}>P</span> Art
    </Link>
  );
}
Logo.propTypes = {
  mainCls: PropTypes.string,
  secCls: PropTypes.string,
};
export default Logo;
