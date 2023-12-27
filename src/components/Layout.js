import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./Header";
import Footer from "./Footer";
import PreLoader from "./PreLoader";

const Layout = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <ScrollRestoration />
      <Suspense fallback={<PreLoader />}>
        <Outlet />
      </Suspense>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Layout;
