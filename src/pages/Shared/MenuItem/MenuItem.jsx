import img from "../../../assets/home/slide2.jpg";
const MenuItem = () => {
  return (
    <div className="flex flex-col items-center gap-6 md:flex-row">
      <div>
        <img
          src={img}
          alt=""
          className="bg-natural w-[118px] h-[104px] object-cover cursor-pointer rounded-[200px] rounded-tl-none"
        />
      </div>
      <div className="text-center md:text-left">
        <span className="flex flex-col items-center justify-center md:justify-between md:flex-row">
          <h4 className="flex items-center gap-2 text-xl font-medium font-cinzel text-title">
            {`ROAST DUCK BREAST`}{" "}
            <span className="hidden md:block">------------------</span>
          </h4>
          <p className="text-xl text-dark-orange">${`14.5`}</p>
        </span>
        <p className="mt-2 text-natural">
          Roasted duck breast (served pink) with gratin potato and a griottine
          cherry sauce
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
