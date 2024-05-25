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
          <button className="text-dark-orange uppercase px-6 py-4 bg-[#E8E8E8] text-lg font-medium rounded-lg mt-6 border-b-2 hover:border-transparent hover:bg-[#1F2937] border-[#BB8506] transition-all delay-200">
            add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
