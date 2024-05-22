import SectionIntro from "../../Shared/SectionIntro/SectionIntro";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Slide from "./Slide/Slide";
import slideImg1 from "../../../assets/home/slide1.jpg";
import slideImg2 from "../../../assets/home/slide2.jpg";
import slideImg3 from "../../../assets/home/slide3.jpg";
import slideImg4 from "../../../assets/home/slide4.jpg";
import slideImg5 from "../../../assets/home/slide5.jpg";

const OrderOnline = () => {
  return (
    <section className="px-5 py-16 mx-auto md:py-20 lg:py-28 max-w-7xl lg:px-0">
      <SectionIntro
        title={"ORDER ONLINE"}
        subTitle={"From 11:00am to 10:00pm"}
      />
      <div className="mt-6 md:mt-8 lg:mt-12">
        <>
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <Slide foodImg={slideImg1} foodName={"Salads"} />
            </SwiperSlide>
            <SwiperSlide>
              <Slide foodImg={slideImg2} foodName={"Pizzas"} />
            </SwiperSlide>
            <SwiperSlide>
              <Slide foodImg={slideImg3} foodName={"Soups"} />
            </SwiperSlide>
            <SwiperSlide>
              <Slide foodImg={slideImg4} foodName={"desserts"} />
            </SwiperSlide>
            <SwiperSlide>
              <Slide foodImg={slideImg4} foodName={"desserts"} />
            </SwiperSlide>
            <SwiperSlide>
              <Slide foodImg={slideImg5} foodName={"Salads"} />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </section>
  );
};

export default OrderOnline;
