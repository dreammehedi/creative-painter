import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import About from "../pages/about/About";
import AddCraft from "../pages/addcraft/AddCraft";
import AllArtCraft from "../pages/art&craft/AllArtCraft";
import Contact from "../pages/contact/Contact";
import CraftDetailes from "../pages/craft/CraftDetailes";
import Error from "../pages/error/Error";
import Faq from "../pages/faq/Faq";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MyArtCraft from "../pages/myart&craft/MyArtCraft";
import Register from "../pages/register/Register";
import ProtectRoute from "../protect-route/ProtectRoute";
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
        element: (
          <ProtectRoute>
            <MyArtCraft></MyArtCraft>
          </ProtectRoute>
        ),
      },
      {
        path: "/all-art-craft",
        element: <AllArtCraft></AllArtCraft>,
      },
      {
        path: "/add-craft",
        element: (
          <ProtectRoute>
            <AddCraft></AddCraft>
          </ProtectRoute>
        ),
      },
      {
        path: "/craft-detailes/:id",
        element: <CraftDetailes></CraftDetailes>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/crafts/${params.id}`);
        },
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
