import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import UserProfile from "./UserProfile";

function Navbar() {
  const [showTop, setShowTop] = useState(false);
  console.log(showTop);
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
  return (
    <nav
      className={`${
        showTop &&
        "fixed top-0 left-0 z-[99999] shadow-lg border-b border-orange-500/50"
      } transition-all duration-300 ease-linear w-full bg-white text-black  py-3 flex items-center  h-[70px]`}
    >
      <div className="container flex justify-between items-center">
        {/* logo */}
        <Logo></Logo>
        {/* mobile menu */}
        <ul className="lg:hidden fixed top-[18px] right-[24px] w-[200px] z-[999] bg-orange-500 flex flex-col p-8 justify-center items-start rounded-md gap-4 md:gap-6  font-poppins">
          {/* menu items */}
          <div className="space-y-6">
            {/* hamburget menu */}
            <div className="absolute top-0 right-0 text-right font-space-grotesk font-semibold bg-orange-900/50 rounded-lg p-2 transition-all duration-300 ease-linear hover:bg-orange-900 hover:shadow-md hover:text-orange-500">
              <IoClose className="text-2xl"></IoClose>
            </div>
            <MenuItem></MenuItem>
          </div>
        </ul>

        {/* desktop menu */}
        <ul className="hidden lg:flex justify-center items-center gap-4 md:gap-6  font-poppins">
          <MenuItem></MenuItem>
        </ul>

        {/* user profile */}
        <div className="relative">
          <UserProfile></UserProfile>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
