import Cover from "../Shared/Cover/Cover";
import bannerBg from "../../assets/menu/banner3.jpg";

const OurMenu = () => {
  return (
    <section>
      <Cover bgImg={bannerBg}>
        <div className="mx-auto max-w-7xl space-y-2 mt-16  md:mt-20 lg:mt-28 bg-[#15151599] w-full py-20 md:py-24 lg:py-36 text-center">
          <h1 className="font-bold leading-normal text-white font-cinzel text-4xl md:text-6xl lg:text-[88px]">
            OUR MENU
          </h1>
          <h5 className="text-xl font-semibold leading-normal text-white lg:text-2xl font-cinzel">
            Would you like to try a dish?
          </h5>
        </div>
      </Cover>
    </section>
  );
};

export default OurMenu;
