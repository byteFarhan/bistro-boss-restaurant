import { useQuery } from "@tanstack/react-query";
import SectionIntro from "../Shared/SectionIntro/SectionIntro";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import UsersTable from "./UsersTable/UsersTable";
import Swal from "sweetalert2/dist/sweetalert2.js";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });
  const handleMakeAdmin = (user) => {
    // console.log(user?._id);

    Swal.fire({
      title: "Are you sure?",
      text: "You want to make this user admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/user/admin/${user?._id}`).then((res) => {
          console.log(res.data);
          if (res.data?.modifiedCount) {
            refetch();
            Swal.fire({
              title: "Made Admin",
              text: `${user?.name} is now admin.`,
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user?._id}`).then((res) => {
          //   console.log(res.data);
          if (res.data?.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted",
              text: `User has been deleted!`,
              icon: "success",
            });
          }
        });
      }
    });
  };
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
              <UsersTable
                items={users}
                handleMakeAdmin={handleMakeAdmin}
                handleDeleteUser={handleDeleteUser}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllUsers;
