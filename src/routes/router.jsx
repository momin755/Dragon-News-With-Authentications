import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/career/Career";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import Loading from "../components/Loading/Loading";
import NewsCardDetails from "../pages/NewsCardDetails/NewsCardDetails";
import AuthPage from "../pages/AuthPage/AuthPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../provider/PrivateRoute/PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";

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
      {path: '/dashboard', Component: Dashboard}
    ],
  },
  {
    path:'/news/:id',
    element: <PrivateRoute><NewsCardDetails></NewsCardDetails></PrivateRoute>,
    hydrateFallbackElement: <Loading></Loading>,
    loader: ()=>fetch('../news.json')
  },
  {
    path: '/auth',
    Component: AuthPage,
    children:[
      {
        path: '/auth/login',
        Component: Login
      },
      {
        path: '/auth/register',
        Component: Register
      }
    ]
  }
]);
