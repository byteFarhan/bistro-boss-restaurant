import Cover from "../../Shared/Cover/Cover";
import OrderOnline from "../OrderOnline/OrderOnline";
import Slider from "./Slider/Slider";
import bgImg from "../../../assets/home/chef-service.jpg";

const Home = () => {
  return (
    <section>
      <Slider />
      <OrderOnline />
      <section className="pb-16 mx-auto max-w-7xl md:pb-20 lg:pb-28">
        <Cover bgImg={bgImg}>
          <div className="p-10 text-center bg-white md:p-16 lg:py-24 lg:px-36">
            <h3 className="mb-1 text-3xl font-normal leading-normal uppercase md:text-4xl lg:text-5xl text-title font-cinzel">
              Bistro Boss
            </h3>
            <p className="w-full mx-auto text-title ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </Cover>
      </section>
    </section>
  );
};

export default Home;
