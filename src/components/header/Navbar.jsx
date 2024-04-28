import { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import UserProfile from "./UserProfile";

function Navbar() {
  const [showTop, setShowTop] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
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

  // handle mobile menu
  const handleMobileMenu = () => {
    setShowMenu(!showMenu);
  };
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
        <ul
          className={`${
            showMenu && "!left-0"
          } lg:hidden fixed top-0 -left-full w-1/2 md:w-1/3 z-[99999] bg-orange-50 flex flex-col h-screen px-8 justify-center items-start rounded-tr-lg rounded-br-lg gap-4 md:gap-6 font-poppins transition-all duration-300 ease-linear`}
        >
          {/* menu items */}
          <div className="space-y-6">
            {/* <div className="absolute top-0 right-0 text-right font-space-grotesk font-semibold bg-orange-900/50 rounded-lg p-2 transition-all duration-300 ease-linear hover:bg-orange-900 hover:shadow-md hover:text-orange-500">
              <IoClose className="text-2xl"></IoClose>
            </div> */}
            <MenuItem handleMobileMenu={handleMobileMenu}></MenuItem>
          </div>
        </ul>

        {/* desktop menu */}
        <ul className="hidden lg:flex justify-center items-center gap-4 md:gap-6  font-poppins">
          <MenuItem></MenuItem>
        </ul>

        {/* user profile */}
        <div className="relative">
          <UserProfile
            handleMobileMenu={handleMobileMenu}
            showMenu={showMenu}
          ></UserProfile>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
