import { useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import userIcon from "../../assets/userIcon.png";
import { AuthContext } from "../../auth/AuthProvider";
import Button from "../button/Button";

function UserProfile() {
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
  return (
    <>
      {userData ? (
        <div className="flex justify-between items-center gap-4 md:gap-6 ">
          <div className="w-full h-auto">
            {/* user photo */}
            <img
              data-tooltip-id="userProfile"
              className="object-contain w-12 h-12 rounded-full cursor-pointer p-1 shadow ring ring-orange-700"
              src={userData ? userData?.photoURL : userIcon}
              alt="userProfile"
            />
            <Tooltip data-tooltip-place="left-start" id="userProfile">
              <div className="flex flex-col space-y-2 bg-orange-900 rounded-md w-auto h-auto p-4">
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
            </Tooltip>
          </div>

          {/* hamburget menu */}
          <div className="lg:hidden font-space-grotesk font-semibold bg-orange-900/50 rounded-lg p-2 transition-all duration-300 ease-linear hover:bg-orange-900 hover:shadow-md hover:text-orange-500">
            <IoMenu className="text-2xl"></IoMenu>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default UserProfile;
