import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IoClose } from "react-icons/io5";
import { InputField } from "../../components/InputField";
import axios from "axios";
import { API } from "../../../const";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  coachName: yup
    .string()

    .required("Name is required"),
  sports: yup
    .string()
   
    .required("Sport is required"),
  experience: yup
    .string()
    
    .required("Experiance is required"),
  phoneNumber: yup.string().required("PhoneNumber is required"),
  bio: yup.string().required("bio is required"),
  assignedClasses: yup.string().required("assignedClasses is required"),
  totalBookings: yup.string().required("totalBookings is required"),
  
  
  status: yup.string().required("Status is required"),
});

const EditCoaches = ({ onclose,item }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  
 
  useEffect(() => {
    if (item) {
      reset({
        coachName: item.coachName,
        sports: item.sports,
        experience: item.experience,
        phoneNumber: item.phoneNumber,
        email: item.email,
        bio: item.bio,
       
        assignedClasses: item.assignedClasses,
        totalBookings: item.totalBookings,
        
        status: item.status
      })
    }
  }, [item, reset]);

  const onSubmit = async (data) => {
    try {
      await axios.put(
        `${API}/coachmanagement/updatecoachbyid/${item._id}`,
        data
      );

      toast.success("CoachManagement updated successfully");
         // reload table
      onclose();     // close modal
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Update failed"
      );
    }
  };
  return (
    <div className="font-roboto-flex fixed inset-0 grid justify-center items-center backdrop-blur-xs backdrop-grayscale-50  drop-shadow-lg z-20">
      <div className=" shadow-lg py-2  bg-white  rounded-md  lg:w-[900px] md:w-[500px] w-111">
        <div className="grid">
          <button
            onClick={onclose}
            className=" place-self-end   cursor-pointer bg-white  rounded-full lg:-mx-4 md:-mx-4 -mx-2 lg:-my-6 md:-my-5  -my-3 lg:shadow-md md:shadow-md shadow-none lg:py-2.5 md:py-2.5 py-1 lg:px-2.5 md:px-2.5 px-1 "
          >
            <IoClose className="size-[24px]" />
          </button>
          <h1 className="text-center font-medium text-2xl py-2">Edit Coaches</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" px-6 py-6">
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label=" Name"
                  name="coachName"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Sport"
                  // type="select"
                  name="sports"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                  
                />
                <InputField
                  label="Experiance"
                  
                  name="experience"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                  
                />
                <InputField
                  label="Phone Number "
                  name="phoneNumber"
                  register={register}
                  errors={errors}
                  placeholder="Type Here"
                />

                <InputField
                  label="Email"
                  name="email"
                  register={register}
                  errors={errors}
                  placeholder="Type Here"
                />
                <InputField
                  label="Bio"
                  type="textarea"
                  name="bio"
                  register={register}
                  errors={errors}
                  placeholder="Type Here"
                />
                  <InputField
                  label="Assigned Class"
                  name="assignedClasses"
                  register={register}
                  errors={errors}
                  placeholder="Type Here"
                />
                <InputField
                  label="Total Bookings"
                  name="totalBookings"
                  register={register}
                  errors={errors}
                  placeholder="Type Here"
                />
                

               
                <InputField
                  label="Status"
                  name="status"
                  register={register}
                  errors={errors}
                  placeholder="Type Here"
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

export default EditCoaches;