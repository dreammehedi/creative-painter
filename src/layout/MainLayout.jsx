import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
function MainLayout() {
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
    </>
  );
}

export default MainLayout;
