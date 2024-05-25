const MenuItem = ({ menu }) => {
  const { name, price, image, recipe } = menu;
  return (
    <div className="flex flex-col items-center gap-6 md:flex-row">
      <div>
        <img
          src={image}
          alt=""
          className="bg-natural w-[118px] h-[104px] object-cover cursor-pointer rounded-[200px] rounded-tl-none"
        />
      </div>
      <div className="text-center md:text-left">
        <span className="flex flex-col items-center justify-center md:justify-between md:flex-row">
          <h4 className="flex items-center gap-2 text-xl font-medium font-cinzel text-title">
            {name} <span className="hidden md:block">------------------</span>
          </h4>
          <p className="text-xl text-dark-orange">${price}</p>
        </span>
        <p className="mt-2 text-natural">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
