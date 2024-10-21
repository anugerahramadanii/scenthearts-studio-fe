import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import LandingPage from "./pages/landingPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/products",
    element: <div>products</div>,
  },
  {
    path: "/about",
    element: <div>ABOUT</div>,
  },
  {
    path: "/contact",
    element: <div>CONTACT</div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default Router;
