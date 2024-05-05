import PropTypes from "prop-types";
import { Typewriter } from "react-simple-typewriter";
function SliderItem({ bg, title, des, children }) {
  const titleArr = title.split(":");

  return (
    <div
      style={{
        background: `linear-gradient(to right, rgb(17 17 17 / 40%), rgb(86 71 4 / 30%)), url(${bg})`,
      }}
      className="w-full h-full !bg-no-repeat !bg-cover !bg-right-top flex flex-col items-center justify-center"
    >
      <div className="container space-y-3 md:space-y-6 w-full md:max-w-3xl text-center">
        <h1 className="text-white dark:text-slate-300 text-2xl md:text-3xl lg:text-4xl font-bold capitalize font-poppins leading-normal md:!leading-[60px]">
          <Typewriter
            cursor
            cursorBlinking
            cursorColor="#7C2D12"
            delaySpeed={900}
            deleteSpeed={30}
            loop={0}
            typeSpeed={70}
            words={titleArr}
          />
        </h1>
        <p className="text-slate-300 dark:text-slate-200">{des}</p>
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
