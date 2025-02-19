import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../auth/AuthProvider";
import SlugBanner from "../../components/slug_banner/SlugBanner";
import SocialLogin from "../../components/social_login/SocialLogin";
function Login() {
  // after login navigate
  const navigate = useNavigate();

  // find path
  const { pathname } = useLocation();

  // password toggle
  const [showPass, setShowPass] = useState(false);

  // auth data
  const { loginUser } = useContext(AuthContext);
  // handle user login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    const currentField = e.target;
    const email = currentField.email.value;
    const password = currentField.password.value;

    loginUser(email, password)
      .then(() => {
        toast.success("Login successful.");
        currentField.reset();
        navigate("/");
      })
      .catch(() => {
        toast.error("Invalid Creadentials!");
      });
  };

  return (
    <>
      <Helmet>
        <title>Creative Painter | Login</title>
      </Helmet>
      <section className="dark:bg-black dark:text-white">
        <SlugBanner path={pathname}></SlugBanner>
        <div className="container py-4 md:py-6 lg:py-8">
          <div className=" w-full max-w-md mx-auto h-auto p-4  md:p-8 space-y-3 rounded-lg bg-gray-50 dark:bg-black dark:text-white text-gray-800 ring ring-orange-500">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-orange-900 dark:text-orange-500">
              Login
            </h1>
            <form onSubmit={handleLogin} className="space-y-6 my-4">
              <div className="space-y-1 text-base font-medium">
                <label htmlFor="email" className="block text-gray-600">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email..."
                  className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 dark:bg-transparent dark:text-white text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
                />
              </div>
              <div className="space-y-1 text-base font-medium">
                <label htmlFor="password" className="block text-gray-600 ">
                  Password
                </label>
                <div className="relative">
                  <input
                    required
                    type={showPass ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter Your Password..."
                    className="w-full px-4 py-3 rounded-md ring-1 ring-orange-900 bg-gray-50 dark:bg-transparent dark:text-white text-gray-800 focus:ring-orange-500 outline-none  focus:shadow"
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
              <button className="block w-full p-3 text-center rounded-md text-gray-50 bg-orange-500 dark:bg-orange-900 dark:hover:bg-orange-500 font-poppins font-medium hover:bg-orange-500/50">
                Login
              </button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
              <p className="px-3 text-sm dark:text-white">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div>

            {/* social login */}
            <SocialLogin></SocialLogin>

            {/* register redirect link */}
            <p className="text-base text-center sm:px-6 dark:text-white text-gray-600">
              {` Don't have an account? `}
              <Link
                to={"/register"}
                className="capitalize font-semibold text-orange-500 hover:text-orange-900"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
