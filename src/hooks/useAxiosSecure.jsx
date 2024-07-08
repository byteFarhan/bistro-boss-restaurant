import axios from "axios";
import { config } from "localforage";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_baseURL,
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { userSignOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      // console.log(token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (response) => {
      // console.log(response);
      return response;
    },
    async (error) => {
      // console.log(error);
      const status = error.response.status;
      // console.log(status);
      if (status === 401 || status === 403) {
        // userSignOut()
        //   .then(() => {})
        //   .catch((err) => console.log(err));
        await userSignOut();
        navigate("/login", { state: { from: location }, replace: true });
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
