import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import quoteIcon from "../../../../assets/home/quote-left 1.svg";

const TestimonialItem = ({ review }) => {
  const { name, details, rating } = review;
  return (
    <>
      <div
        className="flex flex-col justify-center space-y-4 bg-transparent"
        // className="bg-no-repeat bg-cover py-28"
        // style={{ backgroundImage: `url(${testimonialBg})` }}
      >
        <Rating
          style={{ maxWidth: 180 }}
          value={rating}
          readOnly
          className="mx-auto"
        />
        <img
          src={quoteIcon}
          alt=""
          className="w-auto h-16 mx-auto md:h-20 lg:h-24"
        />
        <p className="w-3/4 mx-auto text-center">{details}</p>
        <h4 className="text-xl md:text-2xl lg:text-3xl font-medium text-center text-[#CD9003]">
          {name}
        </h4>
      </div>
    </>
  );
};

export default TestimonialItem;
