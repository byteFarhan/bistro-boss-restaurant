import { useState } from "react";
import Slider from "./Slider/Slider";
import SectionIntro from "../../Shared/SectionIntro/SectionIntro";

const Home = () => {
  return (
    <section>
      <Slider />
      <section className="py-16 md:py-20 lg:py-28">
        <SectionIntro
          title={"ORDER ONLINE"}
          subTitle={"From 11:00am to 10:00pm"}
        />
      </section>
    </section>
  );
};

export default Home;
