import Cover from "../../Shared/Cover/Cover";
import featuredItemBg from "../../../assets/home/featured2.png";
import featuredItem from "../../../assets/home/featured.jpg";
import SectionIntro from "../../Shared/SectionIntro/SectionIntro";

const Featured = () => {
  return (
    <>
      <section className="pb-16 md:pb-20 lg:px-0 lg:pb-28">
        <Cover bgImg={featuredItemBg} effect={true}>
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              subTitle={"Check it out"}
              title={"OUR Featured Item"}
              titleWhite={true}
            />
            <div className="flex flex-col items-center justify-center gap-8 mt-12 lg:flex-row ">
              <div className="flex-grow space-y-3">
                <img src={featuredItem} alt="" className="cursor-pointer" />
              </div>
              <div className="flex-grow">
                <h5 className="text-lg text-white md:text-xl">
                  March 20, 2023
                </h5>
                <h5 className="text-lg text-white md:text-xl">
                  WHERE CAN I GET SOME?
                </h5>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  voluptate facere, deserunt dolores maiores quod nobis quas
                  quasi. Eaque repellat recusandae ad laudantium tempore
                  consequatur consequuntur omnis ullam maxime tenetur.
                </p>
                <button className="px-6 py-4 mt-6 text-lg font-medium uppercase transition-all delay-200 bg-transparent border-b-[3px] border-white rounded-lg text-white hover:border-transparent hover:bg-title hover:text-white">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </Cover>
      </section>
    </>
  );
};

export default Featured;
