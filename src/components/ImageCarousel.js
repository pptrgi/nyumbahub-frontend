import { useState } from "react";

const ImageCarousel = ({ imageArray }) => {
  const [imageSlide, setImageSlide] = useState(0);
  return (
    <div className="flex w-full h-full">
      {imageArray.map((image, index) => {
        return (
          <img
            key={index}
            src={image}
            className={`${
              imageSlide === index ? "object-cover h-full w-full" : "hidden"
            }`}
          ></img>
        );
      })}
    </div>
  );
};

export default ImageCarousel;
