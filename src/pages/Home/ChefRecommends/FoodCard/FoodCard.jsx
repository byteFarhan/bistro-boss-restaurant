import cardImg from "../../../../assets/home/slide1.jpg";

const FoodCard = () => {
  return (
    <>
      <div className="w-full overflow-hidden bg-[#F3F3F3] rounded-sm">
        <img
          className="object-cover w-full h-[300px] cursor-pointer transition-transform duration-200 delay-100 ease-in hover:scale-105"
          src={cardImg}
          alt="avatar"
        />

        <div className="px-10 py-8 text-center">
          <h3 className="text-2xl font-semibold text-title">Caeser Salad</h3>
          <p className="text-title">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <button className="btn-base hover:bg-[#1F2937] border-[#BB8506] bg-[#E8E8E8] text-dark-orange">
            add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
