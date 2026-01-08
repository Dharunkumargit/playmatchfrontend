import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IoClose } from "react-icons/io5";
import { InputField } from "../../components/InputField";
import { toast } from "react-toastify";
import axios from "axios";
import { API } from "../../../const";


const schema = yup.object().shape({
  sportname: yup
    .string()
    
    .required("Sport Name is required"),
  slotduration: yup
    .string()
    
    .required("Slot Duration is required"),
 
  
  description: yup.string().required("Description is required"),
  status: yup.string().
  oneOf(["active", "inactive"], "Invalid Status").required("Status is required"),
  
  

});



const AddNewSport = ({ onclose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    try{
      const response = axios.post(`${API}/sportmanagement/createsport`, data);
      toast.success("Sport Created Successfully!");
      console.log("Response:", response.data);
      onclose();
    }catch{
      toast.error(errors.response?.data?.message || "Failed to add turf");
    }
  };

  return (
    <div className="font-roboto-flex fixed inset-0 grid justify-center items-center backdrop-blur-xs backdrop-grayscale-50  drop-shadow-lg z-20">
      <div className=" shadow-lg py-2  bg-white  rounded-md  ">
        <div className="grid">
          <button
            onClick={onclose}
            className=" place-self-end   cursor-pointer bg-white  rounded-full lg:-mx-4 md:-mx-4 -mx-2 lg:-my-6 md:-my-5  -my-3 lg:shadow-md md:shadow-md shadow-none lg:py-2.5 md:py-2.5 py-1 lg:px-2.5 md:px-2.5 px-1 "
          >
            <IoClose className="size-[24px]" />
          </button>
          <h1 className="text-center font-medium text-2xl py-2">
            Add New Sport
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" px-6 py-6">
              <div className=" lg:space-y-3 space-y-3">
                <InputField
                  label="Sport Name"
                
                  name="sportname"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                  
                />
                <InputField
                  label="Slot Duration"
                  
                  name="slotduration"
                  placeholder="eg: 8am - 10am"
                  register={register}
                  errors={errors}
               
                />
                
                <InputField
                  label="Description"
                  type="textarea"
                  name="description"
                  register={register}
                  errors={errors}
                  placeholder="Type Here"
                />
               
                
                
                 <InputField
                  label="Status"
                  type="select"
                  name="status"
                  register={register}
                  errors={errors}
                  placeholder="Type Here"
                  options={[
                    { value: "active", label: "active" },
                    { value: "inactive", label: "inactive" },
                  ]}
                />
              </div>
            </div>
            <div className="mx-5 text-xs flex lg:justify-end md:justify-center justify-center gap-2 mb-4">
              <button
                type="button"
                onClick={onclose}
                className="cursor-pointer  border  border-darkest-blue  text-darkest-blue px-6 py-2   rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="cursor-pointer px-6 bg-dark-orange text-black  rounded"
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

export default AddNewSport;
