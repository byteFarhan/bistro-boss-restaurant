import cardImg from "../../../../assets/home/slide1.jpg";

const FoodCard = ({ item, showPrice }) => {
  const { name, recipe, image, price } = item;
  return (
    <>
      <div className="w-full overflow-hidden bg-[#F3F3F3] rounded-sm">
        <div className={`${showPrice && "relative"}`}>
          <img
            className="object-cover w-full h-[300px] cursor-pointer transition-transform duration-200 delay-100 ease-in hover:scale-105"
            src={image}
            alt={name}
          />
          {showPrice && (
            <p className="absolute px-2.5 py-1.5 font-semibold text-white bg-title right-3 top-3">
              ${price}
            </p>
          )}
        </div>

        <div className="px-10 py-8 text-center">
          <div className="flex flex-col">
            <h3 className="mb-2 text-2xl font-semibold text-title lg:mb-3">
              {name}
            </h3>
            <div className="flex-grow">
              <p className="text-title">{recipe}</p>
            </div>
          </div>
          <button className="btn-base hover:bg-[#1F2937] border-[#BB8506] bg-[#E8E8E8] text-dark-orange">
            add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
