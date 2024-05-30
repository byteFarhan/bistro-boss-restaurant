import Cover from "../Shared/Cover/Cover";
import bannerBg from "../../assets/menu/banner3.jpg";
import useMenus from "../../hooks/useMenus";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertBg from "../../assets/home/chef-service.jpg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladsBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";

const OurMenu = () => {
  const offered = useMenus("offered");
  const dessert = useMenus("dessert");
  const pizza = useMenus("pizza");
  const salads = useMenus("salad");
  const soups = useMenus("soup");

  console.log("Soups", soups);
  console.log("Salads", salads);
  console.log("pizza", pizza);
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
      <MenuCategory
        menus={dessert[0]}
        isLoading={dessert[1]}
        showCover={true}
        coverBg={dessertBg}
        categoryTitle={"DESSERTS"}
        categoryDescription={`Lorem Ipsum has been the industry’s standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`}
      />
      <MenuCategory
        menus={pizza[0]}
        isLoading={pizza[1]}
        showCover={true}
        coverBg={pizzaBg}
        categoryTitle={"PIZZA"}
        categoryDescription={`Lorem Ipsum has been the industry’s standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`}
      />
      <MenuCategory
        menus={salads[0]}
        isLoading={salads[1]}
        showCover={true}
        coverBg={saladsBg}
        categoryTitle={"Salads"}
        categoryDescription={`Lorem Ipsum has been the industry’s standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`}
      />
      <MenuCategory
        menus={soups[0]}
        isLoading={soups[1]}
        showCover={true}
        coverBg={soupBg}
        categoryTitle={"soups"}
        categoryDescription={`Lorem Ipsum has been the industry’s standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`}
      />
    </section>
  );
};

export default OurMenu;
