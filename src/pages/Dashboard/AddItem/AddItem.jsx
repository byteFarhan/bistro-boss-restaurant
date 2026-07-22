import { useForm } from "react-hook-form";
import InputForm from "../../Shared/InputForm/InputForm";
import SectionIntro from "../../Shared/SectionIntro/SectionIntro";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const img_hoisting_api = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_imgage_hoisting_key
}`;

const AddItem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const hookFormItems = useForm();
  const { reset } = hookFormItems;
  const handleAddItem = async (data) => {
    // console.log(data);
    const { name, price, recipi, category, image } = data;

    const imageFile = {
      image: image[0],
    };
    const res = await axiosPublic.post(img_hoisting_api, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });
    // console.log(res.data);
    const newMenuData = {
      name,
      recipi,
      image: res.data.data.display_url,
      category,
      price: parseFloat(price),
    };
    if (res.data.success) {
      const menuRes = await axiosSecure.post("/menus", newMenuData);
      //   console.log(menuRes.data);

      if (menuRes.data.insertedId) {
        reset();
        toast.success(`${name} has been added successfully.`);
      }
    }
  };
  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-16">
      <SectionIntro subTitle={`What's new?`} title={`ADD AN ITEM`} />
      <InputForm
        submitText={`Add Item`}
        submitFunc={handleAddItem}
        hookFormItems={hookFormItems}
      />
    </section>
  );
};

export default AddItem;
