import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";

import ClientManagement from "../Pages/ClientManagement";
import Dashboard from "../Pages/Dashboard";
import PackageManagement from "../Pages/PackageManagement";
import Orders from "../Pages/Orders";
import Transactions from "../Pages/Transactions";
import Sidebar from "../Components/Sidebar/Sidebar";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/clientManagement",
        element: <ClientManagement />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/packageManagement",
        element: <PackageManagement />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
    ],
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={router} />;
}
