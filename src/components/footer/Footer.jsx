import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import Logo from "../../components/header/Logo";
import DesktopMenuItem from "../header/DesktopMenuItem";
function Footer() {
  return (
    <footer className="px-4 divide-y bg-gray-100 text-gray-800">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-3/4 text-center lg:text-left mr-0 md:mr-4 lg:mr-6">
          <Logo mainCls={"text-orange-500"}></Logo>

          <p className="mt-4 text-gray-500">
            {` At Creative Painter, we believe that art has the power to
            enrich lives, inspire souls, and forge connections that transcend
            time and space. Whether you're seeking a personalized portrait to
            adorn your walls or a bespoke pencil artwork to gift to a cherished
            friend, we're here to turn your visions into reality.`}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:items-start lg:text-left text-center gap-8 ">
          <div className="space-y-3">
            <h3 className="uppercase text-orange-500 font-medium">Pages</h3>
            <ul className="space-y-3">
              <DesktopMenuItem></DesktopMenuItem>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="uppercase text-orange-500 font-medium">
              Newsletter
            </h3>
            <div className="space-y-3">
              <p className="text-gray-500">
                Stay connected with the world of art and creativity by
                subscribing to the Creative Painter newsletter.
              </p>
              <form className="md:max-w-md md:mx-auto">
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
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-orange-500 font-medium">
              Contact Us
            </h3>
            <address>
              <div className="space-y-2 flex flex-col justify-center items-center lg:items-start lg:text-left text-center">
                <p
                  className="font-bold text-center
                   flex items-center font-poppins text-orange-900"
                >
                  Email:{" "}
                  <span className="font-medium ml-1 ">
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
          <div className="space-y-3">
            <div className="uppercase text-orange-500 font-medium">
              Social media
            </div>
            <div className="flex justify-center lg:justify-start space-x-3">
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
      <div className="py-6 text-sm text-center text-gray-600">
        &copy; {new Date().getFullYear()} Creative Painter. All rights reserved.{" "}
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
