import Cover from "../Shared/Cover/Cover";
import bannerBg from "../../assets/shop/banner2.jpg";
import Section from "../Shared/Section/Section";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenus from "../../hooks/useMenus";
import { useParams } from "react-router-dom";
import FoodCard from "../Home/ChefRecommends/FoodCard/FoodCard";
import TabCategory from "./TabCategory/TabCategory";
const OrderFood = () => {
  const categories = ["salads", "pizza", "soups", "desserts", "drinks"];
  const { category } = useParams();
  //   console.log(category);
  const initialTabIndex = categories.indexOf(category) || 0;
  //   console.log(initialTabIndex);
  const [tabIndex, setTabIndex] = useState(initialTabIndex);
  const salads = useMenus("salad");
  const pizza = useMenus("pizza");
  const soups = useMenus("soup");
  const desserts = useMenus("dessert");
  const drinks = useMenus("drinks");
  return (
    <section className="">
      <Cover bgImg={bannerBg}>
        <div className="mx-auto max-w-7xl space-y-2 mt-16  md:mt-20 lg:mt-28 bg-[#15151599] w-full py-20 md:py-24 lg:py-36 text-center">
          <h1 className="font-bold leading-normal text-white font-cinzel text-4xl md:text-6xl lg:text-[88px]">
            Order Food
          </h1>
          <h5 className="text-xl font-semibold leading-normal text-white lg:text-2xl font-cinzel">
            Would you like to try a dish?
          </h5>
        </div>
      </Cover>
      <div className="mb-16 md:mb-20 lg:mb-28"></div>
      <Section>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALADS</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <TabCategory item={salads} />
          </TabPanel>
          <TabPanel>
            <TabCategory item={pizza} />
          </TabPanel>
          <TabPanel>
            <TabCategory item={soups} />
          </TabPanel>
          <TabPanel>
            <TabCategory item={desserts} />
          </TabPanel>
          <TabPanel>
            <TabCategory item={drinks} />
          </TabPanel>
        </Tabs>
      </Section>
    </section>
  );
};

export default OrderFood;
