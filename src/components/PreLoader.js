import React from "react";
import { PuffLoader } from "react-spinners";

const PreLoader = () => {
  return (
    <div className="w-full min-h-screen bg-bodyColor flex justify-center items-center">
      <PuffLoader color="#00aeff" />
    </div>
  );
};

export default PreLoader;
