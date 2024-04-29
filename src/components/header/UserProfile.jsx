import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { toast } from "react-toastify";
import userIcon from "../../assets/userIcon.png";
import { AuthContext } from "../../auth/AuthProvider";
import Button from "../button/Button";

function UserProfile({ handleMobileMenu, showMenu }) {
  // theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // user data
  const { userData, logoutUser } = useContext(AuthContext);

  // user logout
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success("Logout Success.");
      })
      .catch(() => {
        toast.error("An error occurred!");
      });
  };

  // handle theme
  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
      <div className="flex justify-center items-center gap-4">
        {userData ? (
          <div className="flex justify-between items-center gap-4 md:gap-6 ">
            <div className="w-full h-auto relative group">
              {/* user photo */}
              <img
                className="object-contain w-12 h-12 rounded-full cursor-pointer p-1 shadow ring ring-orange-700"
                src={userData ? userData?.photoURL : userIcon}
                alt="userProfile"
              />

              <div className="group-hover:top-0 group-hover:opacity-100 absolute top-[-150px] opacity-0 right-[50px] z-[999] bg-orange-900 w-[200px] flex flex-col space-y-2 rounded-md h-auto p-4">
                {/* username */}
                <h4 className="font-poppins text-sm capitalize font-semibold text-white">
                  {userData?.displayName}
                </h4>
                {/* logout button */}
                <div
                  onClick={handleLogout}
                  className="flex justify-between items-center gap-2"
                >
                  <img
                    className="group object-cover w-[60px] h-[60px] rounded-full cursor-pointer "
                    src={userData ? userData?.photoURL : userIcon}
                    alt="userProfile"
                  />
                  <Button
                    type={"button"}
                    name={"Logout"}
                    cls={
                      "!text-base !bg-orange-500/50 hover:!text-white hover:!bg-orange-500"
                    }
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* website theme controler */}
        <label className="cursor-pointer grid place-items-center">
          <input
            onChange={(e) => {
              handleTheme(e);
            }}
            type="checkbox"
            checked={theme === "light" ? false : true}
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        {/* hamburget menu */}
        <div
          onClick={handleMobileMenu}
          className={`${
            showMenu && "!bg-orange-500 !text-white"
          } lg:hidden font-space-grotesk font-semibold bg-orange-900/50 rounded-lg p-2 transition-all duration-300 ease-linear hover:bg-orange-900 hover:shadow-md hover:text-orange-500`}
        >
          <IoMenu className="text-2xl"></IoMenu>
        </div>
      </div>
    </>
  );
}
UserProfile.propTypes = {
  handleMobileMenu: PropTypes.func,
  showMenu: PropTypes.bool,
};
export default UserProfile;
