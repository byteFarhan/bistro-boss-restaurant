import { Link } from "react-router-dom";
import bgImg from "../../assets/others/authentication.png";
import loginGif from "../../assets/others/authentication1.png";
const Login = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${bgImg})` }}
        className="flex items-center justify-center h-screen bg-center bg-cover"
      >
        <div className="flex flex-row-reverse items-center w-full gap-6 mx-auto bg-transparent lg:custom-shadow max-w-7xl py-14">
          <div className="flex-1">
            <h2 className="mb-6 text-4xl font-bold text-center md:mb-8 lg:mb-12 text-title">
              Login
            </h2>
            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full px-2.5 py-3 text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-1 outline-[#D1A054]"
                  placeholder="Type here"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="block w-full px-2.5 py-3 text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-1 outline-[#D1A054]"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="text-lg font-bold text-white font-inter bg-[#D1A054] w-full py-3 text-center rounded-lg"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-8">
              <Link to={"/register"}>
                <p className="text-center font-semibold text-[#D1A054]">
                  New here? Create a New Account
                </p>
              </Link>
            </div>
          </div>
          <div className="flex-1 hidden lg:block">
            <img src={loginGif} alt="" className="mix-blend-multiply" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
