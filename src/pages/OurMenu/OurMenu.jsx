import Cover from "../Shared/Cover/Cover";
import bannerBg from "../../assets/menu/banner3.jpg";
import useMenus from "../../hooks/useMenus";
import SectionIntro from "../Shared/SectionIntro/SectionIntro";
import MenuItem from "../Shared/MenuItem/MenuItem";
import offeredBg from "../../assets/home/chef-service.jpg";
import MenuCategory from "./MenuCategory/MenuCategory";

const OurMenu = () => {
  const offered = useMenus("offered");

  console.log("offered", offered);

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
      <MenuCategory
        menus={offered[0]}
        isLoading={offered[1]}
        showSectionIntro={true}
        sectionIntroTitle={"TODAY'S OFFER"}
        sectionIntroSubtitle={"Don't miss"}
        categoryTitle={"DESSERTS"}
        categoryDescription={`Lorem Ipsum has been the industry’s standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`}
      />
    </section>
  );
};

export default OurMenu;
