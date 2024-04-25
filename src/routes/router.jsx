import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import About from "../pages/about/About";
import AddCraft from "../pages/addcraft/AddCraft";
import AllArtCraft from "../pages/art&craft/AllArtCraft";
import Contact from "../pages/contact/Contact";
import Error from "../pages/error/Error";
import Faq from "../pages/faq/Faq";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MyArtCraft from "../pages/myart&craft/MyArtCraft";
import Register from "../pages/register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/my-art-craft",
        element: <MyArtCraft></MyArtCraft>,
      },
      {
        path: "/all-art-craft",
        element: <AllArtCraft></AllArtCraft>,
      },
      {
        path: "/add-craft",
        element: <AddCraft></AddCraft>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
