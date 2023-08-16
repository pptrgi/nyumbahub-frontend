import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { PrivateRoute } from "./components/routeTypes/PrivateRoute";
import { OpenRoute } from "./components/routeTypes/OpenRoute";

import PreLoader from "./components/PreLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);
  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <div className="font-poppinsRegular text-sm sm:text-default md:text-default lg:text-default xl:text-default">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                  path="/wishlist"
                  element={
                    <PrivateRoute>
                      <Wishlist />
                    </PrivateRoute>
                  }
                />
                <Route path="/search-results" element={<SearchResults />} />
                <Route
                  path="/signin"
                  element={
                    <OpenRoute>
                      <SignIn />
                    </OpenRoute>
                  }
                />
                <Route
                  path="/register"
                  element={
                    <OpenRoute>
                      <Register />
                    </OpenRoute>
                  }
                />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/all-properties" element={<AllProperties />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/compare" element={<CompareProperties />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route
                  path="/edit-profile"
                  element={
                    <PrivateRoute>
                      <EditProfile />
                    </PrivateRoute>
                  }
                />
                <Route path="/type/:id" element={<OneType />} />
                <Route path="/category/:id" element={<OneCategory />} />
                <Route path="/property/:id" element={<PropertyDetailPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
