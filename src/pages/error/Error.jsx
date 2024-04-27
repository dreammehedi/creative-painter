import { Link } from "react-router-dom";
import errorPage from "../../assets/error_404.png";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
function Error() {
  return (
    <>
      <Navbar></Navbar>
      <section>
        <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <img
                className="object-contain w-full h-auto"
                src={errorPage}
                alt="404"
              />
              <p className="text-2xl font-semibold md:text-3xl">
                {`Sorry, we couldn't find this page.`}
              </p>
              <p className="mt-4 mb-8 dark:text-gray-600">
                {`But don't worry, you can find plenty of other things on our
                homepage.`}
              </p>
              <Link to={"/"} className="px-8 py-3 font-semibold rounded-md  ">
                <Button
                  name="Back to homepage"
                  cls={"text-orange-900  hover:!text-white"}
                ></Button>
              </Link>
            </div>
          </div>
        </section>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Error;
