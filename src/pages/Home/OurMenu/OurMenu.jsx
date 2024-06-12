import { useEffect, useState } from "react";
import Section from "../../Shared/Section/Section";
import SectionIntro from "../../Shared/SectionIntro/SectionIntro";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenus from "../../../hooks/useMenus";

const OurMenu = () => {
  //   const [popularMenus, setPopularMenus] = useState([]);
  //   const axiosSecure = useAxiosSecure();
  //   useEffect(() => {
  //     axiosSecure.get("/popular-menus").then((res) => {
  //       setPopularMenus(res.data);
  //     });
  //   }, [axiosSecure]);
  const [menus, loading] = useMenus("popular");
  //   console.log(menus);
  //   console.log(popularMenus);
  return (
    <>
      <Section>
        <SectionIntro subTitle={`Check it out`} title={"FROM OUR MENU"} />
        <div className="grid grid-cols-1 gap-6 mt-6 md:mt-8 lg:mt-12 lg:grid-cols-2 lg:gap-8">
          {menus?.length > 0 &&
            menus?.map((menu) => <MenuItem key={menu._id} menu={menu} />)}
        </div>
        <div className="mt-6 text-center md:8 lg:10">
          <button className="px-6 py-4 mt-6 text-lg font-medium uppercase transition-all delay-200 bg-white border-b-2 rounded-lg text-title hover:border-transparent hover:bg-title hover:text-white border-title">
            View Full Menu
          </button>
        </div>
      </Section>
    </>
  );
};

export default OurMenu;
