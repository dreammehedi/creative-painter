import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import About from "../pages/about/About";
import AddCraft from "../pages/addcraft/AddCraft";
import AllArtCraftCategory from "../pages/all_art_craft_category/AllArtCraftCategory";
import AllArtCraftCategoryCartDetailes from "../pages/all_art_craft_category/AllArtCraftCategoryCartDetailes";
import AllArtCraft from "../pages/art&craft/AllArtCraft";
import AllArtCraftDetailes from "../pages/art&craft/AllArtCraftDetailes";
import Contact from "../pages/contact/Contact";
import CraftDetailes from "../pages/craft/CraftDetailes";
import Error from "../pages/error/Error";
import Faq from "../pages/faq/Faq";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MyArtCraft from "../pages/myart&craft/MyArtCraft";
import UpdateMyArtCraft from "../pages/myart&craft/UpdateMyArtCraft";
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
        path: "/my-art-craft/:id",
        element: (
          <ProtectRoute>
            <UpdateMyArtCraft></UpdateMyArtCraft>
          </ProtectRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/crafts/${params.id}`);
        },
      },
      {
        path: "/all-art-craft",
        element: <AllArtCraft></AllArtCraft>,
        loader: () => {
          return fetch("http://localhost:5000/crafts");
        },
      },
      {
        path: "/art-craft-detailes/:id",
        element: (
          <ProtectRoute>
            <AllArtCraftDetailes></AllArtCraftDetailes>
          </ProtectRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/crafts/${params.id}`);
        },
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
        path: "/all-art-craft-category/:subcategory",
        element: <AllArtCraftCategory></AllArtCraftCategory>,
        loader: ({ params }) => {
          return fetch(
            `http://localhost:5000/art-craft-category/${params.subcategory}`
          );
        },
      },
      {
        path: "/art-craft-subcategory-detailes/:id",
        element: (
          <AllArtCraftCategoryCartDetailes></AllArtCraftCategoryCartDetailes>
        ),
        loader: ({ params }) => {
          return fetch(
            `http://localhost:5000/art-craft-subcategory-detailes/${params.id}`
          );
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
