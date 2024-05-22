const Slide = ({ foodImg, foodName }) => {
  return (
    <div className="relative max-w-sm cursor-pointer">
      <img
        src={foodImg}
        alt={foodName}
        className="object-cover w-full h-auto"
      />
      <div className="absolute flex justify-center w-full h-full -mt-20 ">
        <h3 className="w-full text-3xl font-normal text-center text-white uppercase font-cinzel">
          {foodName}
        </h3>
      </div>
    </div>
  );
};

export default Slide;
