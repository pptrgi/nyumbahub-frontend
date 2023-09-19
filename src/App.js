import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import SearchResults from "./pages/SearchResults";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AllProperties from "./pages/AllProperties";
import OneType from "./pages/OneType";
import OneCategory from "./pages/OneCategory";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import Contact from "./pages/Contact";
import CompareProperties from "./pages/CompareProperties";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";
import { PrivateRoute } from "./components/routeTypes/PrivateRoute";
import { OpenRoute } from "./components/routeTypes/OpenRoute";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  // Create the application's data router
  // This way the application can use ScrollRestoration component
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/wishlist",
          element: (
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          ),
        },
        {
          path: "/search-results",
          element: <SearchResults />,
        },
        {
          path: "/signin",
          element: (
            <OpenRoute>
              <SignIn />
            </OpenRoute>
          ),
        },
        {
          path: "/register",
          element: (
            <OpenRoute>
              <Register />
            </OpenRoute>
          ),
        },
        {
          path: "/forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "/reset-password",
          element: <ResetPassword />,
        },
        {
          path: "/all-properties",
          element: <AllProperties />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/compare",
          element: <CompareProperties />,
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/terms-of-service",
          element: <TermsOfService />,
        },
        {
          path: "/edit-profile",
          element: (
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          ),
        },
        {
          path: "/change-password",
          element: (
            <PrivateRoute>
              <ChangePassword />
            </PrivateRoute>
          ),
        },
        {
          path: "/type/:id",
          element: <OneType />,
        },
        {
          path: "/category/:id",
          element: <OneCategory />,
        },
        {
          path: "/property/:id",
          element: <PropertyDetailPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return (
    <div className="font-poppinsRegular text-sm sm:text-default">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
