import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../auth/AuthProvider";
import SlugBanner from "../../components/slug_banner/SlugBanner";
import SocialLogin from "../../components/social_login/SocialLogin";

function Register() {
  // after login navigate
  const navigate = useNavigate();
  // find path
  const { pathname } = useLocation();

  // password toggle
  const [showPass, setShowPass] = useState(false);
  const [cShowPass, setCShowPass] = useState(false);

  // auth context data
  const { registerUser, updateUserProfile } = useContext(AuthContext);

  // password stronge check
  const strongPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  // handle user registration
  const handleRegister = (e) => {
    e.preventDefault();
    const currentField = e.target;
    const firstName = currentField.firstName.value;
    const lastName = currentField.lastName.value;
    const email = currentField.email.value;
    const photoURL = currentField.photoURL.value;
    const password = currentField.password.value;
    const confirmPassword = currentField.confirmPassword.value;

    const userName = firstName + " " + lastName;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !photoURL ||
      !password ||
      !confirmPassword
    ) {
      toast.error("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters!");
      return;
    }
    if (!strongPass.test(password)) {
      toast.error(
        "Password must contain at least 1 uppercase and 1 lowercase letter!"
      );
      return;
    }
    registerUser(email, password).then(() => {
      updateUserProfile(userName, photoURL)
        .then(() => {
          toast.success("Register Complete.");
          currentField.reset();
          navigate("/");
        })
        .catch((err) => {
          if (err.message === "Firebase: Error (auth/email-already-in-use).") {
            toast.error("Email already in use!");
          } else {
            toast.error("An error occurred!");
          }
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>Creative Painter | Register</title>
      </Helmet>
      <SlugBanner path={pathname}></SlugBanner>
      <section className="dark:bg-black dark:text-white py-4 md:py-6 lg:py-8">
        <div className="container">
          <div className="w-full lg:max-w-3xl lg:mx-auto p-4  md:p-8 space-y-3 rounded-lg bg-gray-50 dark:bg-black dark:text-white text-gray-800 ring ring-orange-500 ">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-orange-900 dark:text-orange-500">
              Registration
            </h1>
            <form
              onSubmit={handleRegister}
              className=" grid grid-cols-2 justify-between gap-4"
            >
              <div className="col-span-2 lg:col-span-1 space-y-1 text-base font-medium">
                <label
                  htmlFor="firstName"
                  className="block text-gray-600 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter Your FirstName..."
                  className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow dark:bg-transparent dark:text-white"
                />
              </div>
              <div className="col-span-2 lg:col-span-1 space-y-1 text-base font-medium">
                <label
                  htmlFor="lastName"
                  className="block text-gray-600 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Your LastName..."
                  className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow dark:bg-transparent dark:text-white"
                />
              </div>
              <div className="col-span-2 space-y-1 text-base font-medium">
                <label
                  htmlFor="email"
                  className="block text-gray-600 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email..."
                  className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow dark:bg-transparent dark:text-white"
                />
              </div>
              <div className="col-span-2 space-y-1 text-base font-medium">
                <label
                  htmlFor="photoURL"
                  className="block text-gray-600 dark:text-white"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  id="photoURL"
                  placeholder="Enter Your Photo URL..."
                  className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow dark:bg-transparent dark:text-white"
                />
              </div>
              <div className="col-span-2 lg:col-span-1 space-y-1 text-base font-medium">
                <label
                  htmlFor="password"
                  className="block text-gray-600 dark:text-white"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter Your Password..."
                    className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow dark:bg-transparent dark:text-white"
                  />
                  <span
                    onClick={() => {
                      setShowPass(!showPass);
                    }}
                    className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer text-xl text-orange-900 dark:text-white"
                  >
                    {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1 space-y-1 text-base font-medium">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-600 dark:text-white"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={cShowPass ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Enter Your Confirm Password..."
                    className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 text-gray-800 focus:ring-orange-500 outline-none  focus:shadow dark:bg-transparent dark:text-white"
                  />

                  <span
                    onClick={() => {
                      setCShowPass(!cShowPass);
                    }}
                    className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer text-xl text-orange-900 dark:text-white"
                  >
                    {cShowPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
              </div>
              <button className="col-span-2 block w-full p-3 text-center rounded-md text-gray-50 bg-orange-500 font-poppins font-medium hover:bg-orange-500/50 dark:bg-orange-900 dark:hover:bg-orange-500">
                Register
              </button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
              <p className="px-3 text-sm text-gray-600 dark:text-white">
                Register with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            </div>

            {/* social login */}
            <SocialLogin></SocialLogin>

            {/* register redirect link */}
            <p className="text-base text-center sm:px-6 text-gray-600 dark:text-white">
              {` Already have an account? `}
              <Link
                to={"/login"}
                className="capitalize font-semibold text-orange-500 hover:text-orange-900"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
