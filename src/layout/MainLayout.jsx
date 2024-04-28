import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClickToTop from "../components/clicktop/ClickToTop";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
function MainLayout() {
  // after location change page is scroll top
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      <ToastContainer
        autoClose={2000}
        closeOnClick
        position="top-right"
        pauseOnHover
        transition={Bounce}
      ></ToastContainer>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ClickToTop></ClickToTop>
    </>
  );
}

export default MainLayout;
