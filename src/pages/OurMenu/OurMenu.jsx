import Cover from "../Shared/Cover/Cover";
import bannerBg from "../../assets/menu/banner3.jpg";
import useMenus from "../../hooks/useMenus";
import SectionIntro from "../Shared/SectionIntro/SectionIntro";
import MenuItem from "../Shared/MenuItem/MenuItem";
import offeredBg from "../../assets/home/chef-service.jpg";

const OurMenu = () => {
  const offered = useMenus("offered");

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
      <section className="pt-20 mb-12 md:pt-24 lg:pt-32">
        <SectionIntro title={"TODAY'S OFFER"} subTitle={"Don't miss"} />
        <div className="menus-container">
          {offered[0]?.length > 0 &&
            offered[0]?.map((item) => <MenuItem key={item._id} menu={item} />)}
        </div>
        <div className="my-6 text-center md:my-8 lg:my-12">
          <button className="border-title btn-base hover:bg-title hover:text-white">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
        <Cover bgImg={offeredBg} effect={true}>
          <div className="p-10 text-center bg-[#15151599] max-w-7xl mx-auto md:p-16 lg:py-24 lg:px-36">
            <h3 className="mb-1 text-3xl font-normal leading-normal text-white uppercase md:text-4xl lg:text-5xl font-cinzel">
              DESSERTS
            </h3>
            <p className="w-full mx-auto text-white">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </Cover>
      </section>
    </section>
  );
};

export default OurMenu;
