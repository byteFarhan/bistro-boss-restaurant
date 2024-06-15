import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signInWithGoogle, signInWithGithub } = useAuth();
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Login successfull.");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then(() => {
        toast.success("Login successfull.");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleFacebookSignIn = () => {
    toast("Feature comming soon.");
    // signInWithFacebook()
    //   .then(() => {
    //     toast.success("Login successfull.");
    //     navigate(location.state ? location.state : "/");
    //   })
    //   .catch((error) => {
    //     toast.error(error.message);
    //   });
  };
  return (
    <div className="mt-6">
      <p className="mb-6 text-xl font-medium text-center text-title">
        Or sign in with
      </p>
      <div className="flex justify-center gap-6">
        <p
          onClick={handleGoogleSignIn}
          className="flex cursor-pointer items-center justify-center bg-transparent border-2 rounded-full h-[52px] w-[52px] border-title"
        >
          <FaGoogle className="text-2xl text-title" />
        </p>
        <p
          onClick={handleGithubSignIn}
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
