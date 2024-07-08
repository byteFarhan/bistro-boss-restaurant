import { useForm } from "react-hook-form";
import InputForm from "../../Shared/InputForm/InputForm";
import SectionIntro from "../../Shared/SectionIntro/SectionIntro";

const AddItem = () => {
  const hookFormItems = useForm();
  const { reset } = hookFormItems;
  const handleAddItem = (data) => {
    console.log(data);
    console.log(data.image[0]);
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
