import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionIntro from "../../Shared/SectionIntro/SectionIntro";

const MenuCategory = ({
  menus,
  isLoading,
  showSectionIntro,
  sectionIntroTitle,
  sectionIntroSubtitle,
  showCover,
  coverBg,
  categoryTitle,
  categoryDescription,
}) => {
  return (
    <>
      <section className="mt-20 mb-12 md:mt-24 lg:mt-32">
        {showSectionIntro && (
          <SectionIntro
            title={sectionIntroTitle}
            subTitle={sectionIntroSubtitle}
          />
        )}
        <div className="menus-container">
          {menus?.length > 0 &&
            menus?.map((item) => <MenuItem key={item._id} menu={item} />)}
        </div>
        <div className="my-6 text-center md:my-8 lg:my-12">
          <button className="border-title btn-base hover:bg-title hover:text-white">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
        {showCover && (
          <Cover bgImg={coverBg} effect={true}>
            <div className="p-10 text-center bg-[#15151599] max-w-7xl mx-auto md:p-16 lg:py-24 lg:px-36">
              <h3 className="mb-1 text-3xl font-normal leading-normal text-white uppercase md:text-4xl lg:text-5xl font-cinzel">
                {categoryTitle}
              </h3>
              <p className="w-full mx-auto text-white">{categoryDescription}</p>
            </div>
          </Cover>
        )}
      </section>
    </>
  );
};

export default MenuCategory;
