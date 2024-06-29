import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const { signInWithGoogle, signInWithGithub } = useAuth();

  const handleSocialSignIn = (signInMethod) => {
    signInMethod()
      .then((result) => {
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          photoURL: result?.user?.photoURL,
          role: "user",
        };
        // send user info to the database
        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            // console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
        toast.success("Login successfull.");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleFacebookSignIn = () => {
    toast("Feature comming soon.");
  };
  return (
    <div className="mt-6">
      <p className="mb-6 text-xl font-medium text-center text-title">
        Or sign in with
      </p>
      <div className="flex justify-center gap-6">
        <p
          onClick={() => handleSocialSignIn(signInWithGoogle)}
          className="flex cursor-pointer items-center justify-center bg-transparent border-2 rounded-full h-[52px] w-[52px] border-title"
        >
          <FaGoogle className="text-2xl text-title" />
        </p>
        <p
          onClick={() => handleSocialSignIn(signInWithGithub)}
          className="flex cursor-pointer items-center justify-center bg-transparent border-2 rounded-full h-[52px] w-[52px] border-title"
        >
          <FaGithub className="text-2xl text-title" />
        </p>
        <p
          onClick={handleFacebookSignIn}
          className="flex cursor-pointer items-center justify-center bg-transparent border-2 rounded-full h-[52px] w-[52px] border-title"
        >
          <FaFacebookF className="text-2xl text-title" />
        </p>
      </div>
    </div>
  );
};

export default SocialLogin;
