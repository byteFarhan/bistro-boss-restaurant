import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  //   console.log(user?.email);
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get(`user/admin/${user?.email}`);
      //   console.log(res.data);
      return res?.data?.isAdmin;
    },
  });
  return [isAdmin];
};

export default useAdmin;
