import Section from "../../Shared/Section/Section";
import SectionIntro from "../../Shared/SectionIntro/SectionIntro";
import { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimoial.css";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";
// import { EffectFade, Navigation, Pagination } from "swiper/modules";
import SwiperNavButtons from "./SwiperNavButtons/SwiperNavButtons";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import TestimonialItem from "./TestimoialItem/TestimoialItem";

const Testimoial = () => {
  const [reviews, setReviews] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/reviews").then((res) => {
      setReviews(res.data);
    });
  }, [axiosSecure]);
  console.log(reviews);
  return (
    <>
      <Section>
        <SectionIntro
          subTitle={"What Our Clients Say"}
          title={"TESTIMONIALS"}
        />
        <div>
          <div>
            <div className="">
              <div className="px-5 mx-auto mt-8 lg:mt-12 max-w-7xl lg:px-0">
                <Swiper
                  spaceBetween={30}
                  effect={"fade"}
                  loop={true}
                  //   navigation={true}
                  //   pagination={{
                  //     clickable: true,
                  //   }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  modules={[EffectFade, Autoplay]}
                  className="mySwiper"
                >
                  {reviews?.length > 0 &&
                    reviews.map((review) => (
                      <SwiperSlide key={review._id}>
                        <TestimonialItem review={review} />
                      </SwiperSlide>
                    ))}
                  <SwiperNavButtons />
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Testimoial;
