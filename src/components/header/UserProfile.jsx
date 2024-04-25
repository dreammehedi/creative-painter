import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import userIcon from "../../assets/userIcon.png";
import Button from "../button/Button";

function UserProfile() {
  return (
    <div className="flex justify-between items-center gap-4 md:gap-6 ">
      <div className="relative group">
        {/* user photo */}
        <img
          className="object-contain w-12 h-12 rounded-full cursor-pointer p-1 shadow-md ring-2 ring-orange-900"
          src={userIcon}
          alt="userProfile"
        />
        {/* username */}
        <h4 className="hidden group-hover:!inline-block absolute top-1/2 right-0 min-w-[300px] -translate-y-1/2 text-right mr-14 font-poppins text-sm capitalize font-semibold text-white">
          Mehedi Hassan Miraj
        </h4>
      </div>
      <Link to={"/login"}>
        <Button type={"button"} name={"Login"}></Button>
      </Link>

      {/* hamburget menu */}
      <div className="font-space-grotesk font-semibold bg-orange-900/50 rounded-lg p-2 transition-all duration-300 ease-linear hover:bg-orange-900 hover:shadow-md hover:text-orange-500">
        <IoMenu className="text-2xl"></IoMenu>
      </div>
    </div>
  );
}

export default UserProfile;
