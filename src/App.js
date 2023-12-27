import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import { PrivateRoute } from "./components/routeTypes/PrivateRoute";
import { OpenRoute } from "./components/routeTypes/OpenRoute";
import { lazyLoading } from "./utils/lazyLoading";
const Home = lazy(() => import("./pages/Home.js"));
const Wishlist = lazy(() => import("./pages/Wishlist.js"));
const SearchResults = lazy(() => import("./pages/SearchResults.js"));
const SignIn = lazy(() => import("./pages/SignIn.js"));
const Register = lazy(() => import("./pages/Register.js"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword.js"));
const ResetPassword = lazy(() => import("./pages/ResetPassword.js"));
const AllProperties = lazy(() => import("./pages/AllProperties.js"));
const OneType = lazy(() => import("./pages/OneType.js"));
const OneCategory = lazy(() => import("./pages/OneCategory.js"));
const PropertyDetailPage = lazy(() => import("./pages/PropertyDetailPage.js"));
const Contact = lazy(() => import("./pages/Contact.js"));
const CompareProperties = lazy(() => import("./pages/CompareProperties.js"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.js"));
const TermsOfService = lazy(() => import("./pages/TermsOfService.js"));
const EditProfile = lazy(() => import("./pages/EditProfile.js"));
const ChangePassword = lazy(() => import("./pages/ChangePassword.js"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.js"));

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
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
