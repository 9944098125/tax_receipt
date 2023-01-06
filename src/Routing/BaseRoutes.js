import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../Components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={router} />;
}
