import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IoClose } from "react-icons/io5";
import { InputField } from "../../components/InputField";
import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../../../const";

const schema = yup.object().shape({
  classesname: yup
    .string()

    .required("Classes Name is required"),
  coach: yup
    .string()
    
    .required("Coach is required"),
  duration: yup
    .string()
    
    .required("Duration is required"),
  price: yup.string().required("Price is required"),
  commissionearned: yup.string().required("Commmission is required"),
  classprofile: yup.string().required("Class Profile is required"),
  description: yup.string().required("Description is required"),
  location: yup.string().required("location is required"),
  validity: yup.string().required("Validity is required"),
  status: yup.string().required("Status is required"),
});

const AddClass = ({ onclose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async(data) => {
    try {
      const response = await axios.post(`${API}/classesmanagement/createclass`, data);
  
      toast.success("Turf Created Successfully!");
      onclose();
      console.log(response.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="font-roboto-flex fixed inset-0 grid justify-center items-center backdrop-blur-xs backdrop-grayscale-50  drop-shadow-lg z-20">
      <div className=" shadow-lg py-2  bg-white  rounded-md   lg:w-[900px] md:w-[500px] ">
        <div className="grid">
          <button
            onClick={onclose}
            className=" place-self-end   cursor-pointer bg-white  rounded-full lg:-mx-4 md:-mx-4 -mx-2 lg:-my-6 md:-my-5  -my-3 lg:shadow-md md:shadow-md shadow-none lg:py-2.5 md:py-2.5 py-1 lg:px-2.5 md:px-2.5 px-1 "
          >
            <IoClose className="size-[24px]" />
          </button>
          <h1 className="text-center font-medium text-2xl py-2">Add Class</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
  <div className="px-6 py-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      
      <InputField
        label="Classes Name"
        name="classesname"
        placeholder="Type Here"
        register={register}
        errors={errors}
      />

      <InputField
        label="Coach"
        name="coach"
        placeholder="Type Here"
        register={register}
        errors={errors}
      />

      <InputField
        label="Duration"
        name="duration"
        placeholder="Type Here"
        register={register}
        errors={errors}
      />

      <InputField
        label="Price"
        name="price"
        placeholder="Type Here"
        register={register}
        errors={errors}
      />

      <InputField
        label="Commission (%)"
        name="commissionearned"
        placeholder="Type Here"
        register={register}
        errors={errors}
      />

      <InputField
        label="Location"
        name="location"
        placeholder="Type Here"
        register={register}
        errors={errors}
      />

      <InputField
        label="Validity"
        name="validity"
        placeholder="Type Here"
        register={register}
        errors={errors}
      />

      <InputField
        label="Status"
        name="status"
        placeholder="Type Here"
        register={register}
        errors={errors}
      />
      <InputField
        label="Classes Profile"
        name="classprofile"
        placeholder="Type Here"
        register={register}
        errors={errors}
      />
      
      {/* FULL WIDTH */}
      
        <InputField
          label="Description"
          type="textarea"
          name="description"
          placeholder="Type Here"
          register={register}
          errors={errors}
        />
        
        
  

    </div>
  </div>

  <div className="mx-5 text-xs flex justify-end gap-2 mb-4">
    <button
      type="button"
      onClick={onclose}
      className="border border-darkest-blue text-darkest-blue px-6 py-2 rounded"
    >
      Cancel
    </button>
    <button
      type="submit"
      className="px-6 bg-dark-orange text-black rounded"
    >
      Save
    </button>
  </div>
</form>

        </div>
      </div>
    </div>
  );
};

export default AddClass;
