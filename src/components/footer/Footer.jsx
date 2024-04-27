import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../components/header/Logo";
function Footer() {
  return (
    <footer className="px-4 divide-y bg-gray-100 text-gray-800">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link to={"/"} className="flex flex-col space-y-3 ">
            <Logo mainCls={"text-orange-500"}></Logo>
            <span className="text-2xl font-semibold text-orange-500">
              Palette Portrait & Pencil
            </span>
          </Link>{" "}
          <p className="mt-4 text-gray-500">
            {` At Palette Portrait & Pencil, we believe that art has the power to
            enrich lives, inspire souls, and forge connections that transcend
            time and space. Whether you're seeking a personalized portrait to
            adorn your walls or a bespoke pencil artwork to gift to a cherished
            friend, we're here to turn your visions into reality.`}
          </p>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
          <div className="space-y-3">
            <h3 className="uppercase text-orange-500 font-medium">Shop</h3>
            <ul className="space-y-1">
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return isActive;
                  }}
                  to={"/all-art-craft"}
                >
                  Art & Craft
                </NavLink>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Integrations
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="uppercase text-orange-500 font-medium">
              Newsletter
            </h3>
            <div className="space-y-3">
              <p className="text-gray-500">
                Stay connected with the world of art and creativity by
                subscribing to the Palette Portrait & Pencil newsletter.
              </p>
              <form className="">
                <div className="relative">
                  <input
                    className="px-4 py-2 outline-none ring-1 ring-orange-900 focus:ring-orange-500 rounded-md bg-transparent w-full"
                    required
                    name="email"
                    type="email"
                    placeholder="Enter Email Address..."
                  />
                  <button
                    type="submit"
                    className="absolute top-1/2 -translate-y-1/2 right-0 bg-orange-500 rounded-md p-1.5"
                  >
                    <IoIosSend className="text-2xl text-white"></IoIosSend>
                  </button>
                </div>
              </form>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase text-orange-500 font-medium">
                Contact Us
              </h3>
              <address>
                <div className="space-y-2">
                  <p className="font-bold flex items-center font-poppins text-orange-900">
                    Email:{" "}
                    <span className="font-medium ml-1">
                      dreammehedihassan@gmail.com
                    </span>
                  </p>
                  <p className="font-bold flex items-center font-poppins text-orange-900">
                    Phone:{" "}
                    <span className="font-medium ml-1">(+880) 1783238465</span>
                  </p>
                </div>
              </address>
            </div>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-orange-500 font-medium">
              Social media
            </div>
            <div className="flex justify-start space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=61554869056271"
                title="Facebook"
                target="_blank"
                className="flex items-center p-1"
              >
                <FaFacebook className="text-xl transition-all duration-300 ease-linear hover:text-orange-500"></FaFacebook>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                title="Twitter"
                className="flex items-center p-1"
              >
                <FaTwitter className="text-xl transition-all duration-300 ease-linear hover:text-orange-500"></FaTwitter>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                title="Instagram"
                className="flex items-center p-1"
              >
                <FaInstagram className="text-xl transition-all duration-300 ease-linear hover:text-orange-500"></FaInstagram>
              </a>

              <a
                href="https://github.com/dreammehedi"
                target="_blank"
                title="Github"
                className="flex items-center p-1"
              >
                <FaGithub className="text-xl transition-all duration-300 ease-linear hover:text-orange-500"></FaGithub>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-600">
        &copy; {new Date().getFullYear()} 3p Art. All rights reserved.{" "}
        <a
          href="https://www.facebook.com/profile.php?id=61554869056271"
          target="_blank"
          className="text-orange-500"
        >
          Mehedi Hassan Miraj
        </a>
      </div>
    </footer>
  );
}

export default Footer;
