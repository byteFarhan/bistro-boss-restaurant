import { Link } from "react-router-dom";
import errorImg from "../../assets/others/404.gif";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div>
        <img
          src={errorImg}
          alt="404 gif img"
          draggable="false"
          className="cursor-pointer"
        />
        <Link
          //   style={{
          //     background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
          //   }}
          to={"/"}
          className="flex bg-gradient-to-r from-[#835D23] to-[#B58130] items-center justify-center w-48 gap-2 lg:gap-3 py-3 mx-auto font-medium text-center text-white rounded lg:py-4 lg:text-xl lg:w-60 font-inter"
        >
          Back To Home <FaHome />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
