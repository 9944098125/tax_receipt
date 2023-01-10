import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={router} />;
}
