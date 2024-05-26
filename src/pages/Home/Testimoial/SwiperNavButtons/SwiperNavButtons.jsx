import { GrNext, GrPrevious } from "react-icons/gr";
import { useSwiper } from "swiper/react";

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute z-20 flex justify-between w-full lg:px-10 top-1/2">
      <div onClick={() => swiper.slidePrev()} className="">
        <GrPrevious className="text-2xl font-black text-[#007AFF] transition-all duration-75 ease-in cursor-pointer lg:text-3xl hover:text-[#007AFF]" />
      </div>
      <div onClick={() => swiper.slideNext()} className="">
        <GrNext className="text-2xl font-black text-[#007AFF] transition-all duration-75 ease-in cursor-pointer lg:text-3xl hover:text-[#256cb7]" />
      </div>
    </div>
  );
};

export default SwiperNavButtons;
