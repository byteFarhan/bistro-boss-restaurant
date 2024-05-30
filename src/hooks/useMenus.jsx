import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenus = (category) => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`menus?category=${category}`).then((res) => {
      setMenus(res.data);
      setLoading(false);
    });
  }, [axiosSecure, category]);
  return [menus, loading];
};

export default useMenus;
