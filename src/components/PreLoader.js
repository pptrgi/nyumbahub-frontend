import { PuffLoader } from "react-spinners";

const PreLoader = () => {
  return (
    <div className="w-full min-h-screen bg-bodyColor flex justify-center items-center">
      <PuffLoader color="#00aeff" speedMultiplier={1.2} />
    </div>
  );
};

export default PreLoader;
