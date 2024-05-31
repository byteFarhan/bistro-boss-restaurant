import FoodCard from "../../Home/ChefRecommends/FoodCard/FoodCard";

const TabCategory = ({ item }) => {
  const [menus, loading] = item;
  return (
    <div>
      {loading ? (
        <>
          <h3 className="my-20 text-3xl font-bold text-center">Loading...</h3>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3 md:mt-8 lg:mt-12">
            {menus?.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TabCategory;
