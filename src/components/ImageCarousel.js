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
            alt="House Property, NyumbaHub"
          />
        );
      })}
    </div>
  );
};

export default ImageCarousel;
