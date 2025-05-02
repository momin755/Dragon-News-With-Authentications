import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/career/Career";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import Loading from "../components/Loading/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { index: true, Component: Home },
      {
        path: "/newsDetails/:id",
        Component: NewsDetails,
        hydrateFallbackElement: <Loading></Loading> ,
        loader: () => fetch("../news.json"),
      },
      { path: "/about", Component: About },
      { path: "/career", Component: Career },
    ],
  },
]);
