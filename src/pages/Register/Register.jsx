import { Link } from "react-router-dom";
import bgImg from "../../assets/others/authentication.png";
import registerGif from "../../assets/others/authentication1.png";
const Register = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${bgImg})` }}
        className="flex items-center justify-center h-screen bg-center bg-cover"
      >
        <div className="flex items-center w-full gap-6 mx-auto bg-transparent lg:custom-shadow max-w-7xl py-14">
          <div className="flex-1">
            <h2 className="mb-6 text-4xl font-bold text-center md:mb-8 lg:mb-12 text-title">
              Sign Up
            </h2>
            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="text"
                  id="name"
                  className="block w-full px-2.5 py-3 text-base text-gray-900 bg-white border border-gray-300 rounded-lg"
                  placeholder="Type here"
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full px-2.5 py-3 text-base text-gray-900 bg-white border border-gray-300 rounded-lg"
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
                  className="block w-full px-2.5 py-3 text-base text-gray-900 bg-white border border-gray-300 rounded-lg"
                  placeholder="Enter your password"
                />
              </div>

              {/* <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">
                  I agree with the{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                </label>
              </div> */}
              <button
                type="submit"
                className="text-lg font-bold text-white font-inter bg-[#D1A054] w-full py-3 text-center rounded-lg"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-8">
              <Link to={"/login"}>
                <p className="text-center font-semibold text-[#D1A054]">
                  Already registered? Go to log in
                </p>
              </Link>
            </div>
          </div>
          <div className="flex-1 hidden lg:block">
            <img src={registerGif} alt="" className="mix-blend-multiply" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
