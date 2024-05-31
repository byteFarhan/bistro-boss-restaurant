import useMenus from "../../../hooks/useMenus";
import SectionIntro from "../../Shared/SectionIntro/SectionIntro";
import FoodCard from "./FoodCard/FoodCard";

const ChefRecommends = () => {
  const [menus, loading] = useMenus("popular");
  return (
    <section className="px-5 pb-16 mx-auto max-w-7xl md:pb-20 lg:px-0 lg:pb-28">
      <SectionIntro subTitle={`Should Try`} title={`CHEF RECOMMENDS`} />
      <div>
        {loading ? (
          <>
            <h3 className="my-20 text-3xl font-bold text-center">Loading...</h3>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 mt-6 md:mt-8 lg:mt-12 md:grid-cols-2 lg:grid-cols-3">
              {menus?.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ChefRecommends;
