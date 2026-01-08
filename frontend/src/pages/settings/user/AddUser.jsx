import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoClose } from "react-icons/io5";
import { InputField } from "../../../components/InputField";
import { API } from "../../../../const";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";




const schema = yup.object().shape({
  userid: yup
    .string()
    
    .required("Username is required"),
  username: yup
    .string()
    
    .required("Name is required"),
    emailid: yup
    .string()
    
    .required("EmailID is required"),
  phonenumber: yup
    .string()
    
    .required("PhoneNumber is required"),
  
  role: yup
  .string()
  
  
  .oneOf(["Store A", "Store B",], "Invalid Status")
  .required("Role is required"),
});



const AddUser = ({ onclose }) => {
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${API}/user/createuser`, data);
  
      toast.success("User Created Successfully!");
  
      console.log("Response:", response.data);
      reset()
      onclose();
      
    } catch (error) {
      console.log("Error:", error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <div className="font-roboto-flex fixed inset-0 grid justify-center items-center backdrop-blur-xs backdrop-grayscale-50  drop-shadow-lg z-20">
      <div className=" shadow-lg py-2  bg-white  rounded-md  ">
        <div className="grid">
          <button
            onClick={onclose}
            className=" place-self-end   cursor-pointer bg-white  rounded-full lg:-mx-4 md:-mx-4 -mx-2 lg:-my- md:-my-5  -my-3 lg:shadow-md md:shadow-md shadow-none lg:py-2.5 md:py-2.5 py-1 lg:px-2.5 md:px-2.5 px-1 "
          >
            <IoClose className="size-[24px]" />
          </button>
          <h1 className="text-center font-medium text-2xl py-2">
            Add User
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" px-7 py-6">
              <div className=" lg:space-y-4 space-y-3">
                <InputField
                  label="User ID"
                
                  name="userid"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                  
                />
                <InputField
                  label="User Name"
                  name="username"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                  
                />
                <InputField
                  label="Email ID"
                 
                  name="emailid"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                 
                />
                <InputField
                  label="Phone Number"
                  name="phonenumber"
                  register={register}
                  errors={errors}
                  
                  placeholder="Type Here"
                  
                />
                
                <InputField
                  label="Role"
                 
                  name="role"
                  register={register}
                  errors={errors}
                  placeholder="Type Here"
                  type = "select"
                  options={[
                    {
                      value: "Store A",
                      label: "Store A",
                    },
                    { value: "Store B", label: "Store B" },
                    
                  ]}
                />
               
              </div>
            </div>
            <div className="mx-5 text-xs flex lg:justify-end md:justify-center justify-center gap-2 mb-4">
              <button
                type="button"
                onClick={onclose}
                className="cursor-pointer  border  border-dark-yellow  text-dark-yellow px-6 py-2   rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="cursor-pointer px-6 bg-dark-orange text-black py-2   rounded"
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

export default AddUser;