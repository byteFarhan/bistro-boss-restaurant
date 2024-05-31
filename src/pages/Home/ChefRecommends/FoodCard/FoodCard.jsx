import cardImg from "../../../../assets/home/slide1.jpg";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <>
      <div className="w-full overflow-hidden bg-[#F3F3F3] rounded-sm">
        <img
          className="object-cover w-full h-[300px] cursor-pointer transition-transform duration-200 delay-100 ease-in hover:scale-105"
          src={image || cardImg}
          alt={name || "N/A"}
        />

        <div className="px-10 py-8 text-center">
          <div className="flex flex-col">
            <h3 className="mb-2 text-2xl font-semibold text-title lg:mb-3">
              {name || "Caeser Salad"}
            </h3>
            <div className="flex-grow">
              <p className="text-title">
                {recipe ||
                  "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."}
              </p>
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
