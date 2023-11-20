import { PulseLoader } from "react-spinners";

const FetchingSpinners = () => {
  return (
    <div className="flex justify-center items-center w-full h-[20vh]">
      <div className="flex gap-[0.4rem] items-center">
        {/* <span className="text-default md480:text-h3">fetching properties</span> */}
        <span>
          <PulseLoader color="#777777" size={6} speedMultiplier={1.6} />
        </span>
      </div>
    </div>
  );
};

export default FetchingSpinners;
