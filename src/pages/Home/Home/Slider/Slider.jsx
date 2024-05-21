import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideImg1 from "../../../../assets/home/01.jpg";
import slideImg2 from "../../../../assets/home/02.jpg";
import slideImg3 from "../../../../assets/home/03.png";
import slideImg4 from "../../../../assets/home/04.jpg";
import slideImg5 from "../../../../assets/home/05.png";
import slideImg6 from "../../../../assets/home/06.png";

const Slider = () => {
  return (
    <section className="lg:h-[80vh] lg:mb-28">
      <Carousel
        className="h-full text-center"
        showArrows={true}
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        showStatus={false}
        swipeable={true}
        // centerMode={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <div className="h-[80vh] md:h-[90vh]">
          <img
            src={slideImg1}
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="h-[80vh] md:h-[90vh]">
          <img
            src={slideImg2}
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="h-[80vh] md:h-[90vh]">
          <img
            src={slideImg3}
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="h-[80vh] md:h-[90vh]">
          <img
            src={slideImg4}
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="h-[80vh] md:h-[90vh]">
          <img
            src={slideImg5}
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="h-[80vh] md:h-[90vh]">
          <img
            src={slideImg6}
            className="object-cover object-center w-full h-full"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
