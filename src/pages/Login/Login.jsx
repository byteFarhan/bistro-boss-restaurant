import { Link, useLocation, useNavigate } from "react-router-dom";
import bgImg from "../../assets/others/authentication.png";
import loginGif from "../../assets/others/authentication1.png";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
const Login = () => {
  const { signInWithEmail } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    signInWithEmail(email, password)
      .then(() => {
        toast.success("Login successfull.");
        reset();
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-sm mx-auto"
            >
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full px-2.5 py-3 text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-1 outline-[#D1A054]"
                  placeholder="Type here"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">Email is required!</span>
                )}
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
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600">Password is required!</span>
                )}
              </div>
              <button
                type="submit"
                className="text-lg font-bold text-white font-inter bg-[#D1A054] w-full py-3 text-center rounded-lg"
              >
                Sign In
              </button>
            </form>
            <div className="mt-8">
              <Link to={"/register"}>
                <p className="text-center font-semibold text-[#D1A054]">
                  New here? Create a New Account
                </p>
              </Link>
            </div>
            <SocialLogin />
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
