import { useQuery } from "@tanstack/react-query";
import SectionIntro from "../Shared/SectionIntro/SectionIntro";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import UsersTable from "./UsersTable/UsersTable";

const AllUsers = () => {
  const axiosPublic = useAxiosPublic();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });
  return (
    <>
      <section className="w-full min-h-screen bg-[#F6F6F6] flex justify-center">
        <div className="w-3/4 pt-16 mx-auto mb-20">
          <SectionIntro title={"MANAGE ALL USERS"} subTitle={"How many??"} />
          <div className="p-12 mt-24 bg-white">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-bold text-title font-cinzel">
                Total users: {users?.length}
              </h3>
            </div>
            <div className="mt-10">
              <UsersTable items={users} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllUsers;
