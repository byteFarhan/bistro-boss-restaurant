import SectionIntro from "../../Shared/SectionIntro/SectionIntro";
import FoodCard from "./FoodCard/FoodCard";

const ChefRecommends = () => {
  return (
    <section className="px-5 pb-16 mx-auto max-w-7xl md:pb-20 lg:px-0 lg:pb-28">
      <SectionIntro subTitle={`Should Try`} title={`CHEF RECOMMENDS`} />
      <div className="grid grid-cols-1 gap-6 mt-6 md:mt-8 lg:mt-12 md:grid-cols-2 lg:grid-cols-3">
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </section>
  );
};

export default ChefRecommends;
