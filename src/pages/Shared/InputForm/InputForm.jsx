import React from "react";
import { ImSpoonKnife } from "react-icons/im";

const InputForm = ({ submitText, submitFunc, item, hookFormItems }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = hookFormItems;
  return (
    <div className="bg-[#F3F3F3] p-8 md:p-10 lg:p-12 rounded w-4/6 mx-auto mt-8 md:mt-12 lg:mt-16">
      <form onSubmit={handleSubmit(submitFunc)}>
        <div className="mb-6">
          <label className="block mb-2 text-base font-medium text-gray-900 lg:text-lg lg:font-semibold ">
            Recipe name*
          </label>
          <input
            type="text"
            className="block w-full px-2.5 py-4 text-base text-gray-900 bg-white border border-gray-300 rounded focus:outline-1 outline-[#D1A054]"
            placeholder="Recipe name"
            defaultValue={item?.name}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="mt-2 text-red-600">This field is required</span>
          )}
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-base font-medium text-gray-900 lg:text-lg lg:font-semibold">
              Category*
            </label>
            <select
              defaultValue={item?.category ? item?.category : "default"}
              className="block w-full px-2.5 py-4 text-base text-gray-900 bg-white border border-gray-300 rounded focus:outline-1 outline-[#D1A054]"
              {...register("category", { required: true })}
            >
              <option disabled value={"default"}>
                Category
              </option>
              <option value="salad">SALAD</option>
              <option value="pizza">PIZZA</option>
              <option value="soup">SOUPS</option>
              <option value="dessert">DESSERT</option>
              <option value="drinks">DRINKS</option>
            </select>
            {errors.category && (
              <span className="mt-2 text-red-600">This field is required</span>
            )}
          </div>
          <div>
            <label className="block mb-2 text-base font-medium text-gray-900 lg:text-lg lg:font-semibold">
              Price*
            </label>
            <input
              type="number"
              className="block w-full px-2.5 py-4 text-base text-gray-900 bg-white border border-gray-300 rounded focus:outline-1 outline-[#D1A054]"
              placeholder="$Price"
              defaultValue={item?.price}
              step="0.01"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="mt-2 text-red-600">This field is required</span>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-base font-medium text-gray-900 lg:text-lg lg:font-semibold">
            Recipe Details*
          </label>
          <textarea
            rows="4"
            className="block w-full px-2.5 py-4 text-base text-gray-900 bg-white border border-gray-300 rounded focus:outline-1 outline-[#D1A054]"
            placeholder="Recipe Details"
            {...register("recipe", { required: true })}
          ></textarea>
          {errors.recipe && (
            <span className="mt-2 text-red-600">This field is required</span>
          )}
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-base font-medium text-gray-900 lg:text-lg lg:font-semibold">
            Upload file*
          </label>

          <input
            type="file"
            className="mt-2 file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full block w-full px-2.5 py-4 text-base text-gray-900 bg-white border border-gray-300 rounded focus:outline-1 outline-[#D1A054] cursor-pointer"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="mt-2 text-red-600">This field is required</span>
          )}
        </div>
        <button
          type="submit"
          className="flex bg-gradient-to-r from-[#835D23] to-[#B58130] items-center justify-center w-48 gap-2 lg:gap-3 py-3 font-medium text-center text-white rounded lg:py-4 lg:text-xl lg:w-60 font-inter"
        >
          {submitText}
          <ImSpoonKnife />
        </button>
      </form>
    </div>
  );
};

export default InputForm;
