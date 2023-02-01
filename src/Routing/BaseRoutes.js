import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import Sidebar from "../Components/Sidebar/Sidebar";

import ClientManagement from "../Pages/ClientManagement";
import Dashboard from "../Pages/Dashboard";
import PackageManagement from "../Pages/PackageManagement";
import Orders from "../Pages/Orders";
import Transactions from "../Pages/Transactions";
import UserDashboard from "../Pages/UserPages/UserDashboard";
import ReportManagement from "../Pages/UserPages/ReportManagement";
import UserTransactions from "../Pages/UserPages/UserTransactions";
import Profile from "../Pages/UserPages/Profile";
import Payments from "../Pages/UserPages/Payments";
import Subscriptions from "../Pages/UserPages/Subscriptions";
import EmailSettings from "../Pages/UserPages/EmailSettings";

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
      // {
      //   path: "/",
      //   element: <Dashboard />,
      // },
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
      {
        path: "/",
        element: <UserDashboard />,
      },
      {
        path: "/user/reportManagement",
        element: <ReportManagement />,
      },
      {
        path: "/user/emailSettings",
        element: <EmailSettings />,
      },
      {
        path: "/user/subscriptions",
        element: <Subscriptions />,
      },
      {
        path: "/user/payments",
        element: <Payments />,
      },
      {
        path: "/user/profile",
        element: <Profile />,
      },
      {
        path: "/user/transactions",
        element: <UserTransactions />,
      },
    ],
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={router} />;
}
