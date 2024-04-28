import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ClickToTop() {
  // show click to top button
  const [showTop, setShowTop] = useState(false);

  // handle show click to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // handle click to top
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTop && (
        <div
          onClick={handleTop}
          className="animate-bounce fixed bottom-10 right-[50px] text-white rounded-md  bg-orange-500/50 p-4 cursor-pointer transition-all duration-300 ease-linear hover:bg-orange-500 z-[99999]"
        >
          <FaArrowUp className="text-xl"></FaArrowUp>
        </div>
      )}
    </>
  );
}

export default ClickToTop;
