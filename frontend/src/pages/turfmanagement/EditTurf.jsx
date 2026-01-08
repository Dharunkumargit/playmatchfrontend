import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLocation } from "react-router";
import { IoClose } from "react-icons/io5";
import { InputField } from "../../components/InputField";
import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../../../const";


const schema = yup.object().shape({
  turfname: yup
    .string()
    
    .required("Turf Name is required"),
  turfowner: yup
    .string()
   
    .required("Turf Owner is required"),
  sports: yup
    .string()
    
    .required("Sports is required"),
  address: yup.string().required("Address is required"),
  slotduration: yup.string()
  
  .oneOf(["30", "60", "90", "120"], "Invalid Slot Duration")
  .required("Slot Duration is required"),
  timerange: yup.string()
  .required("Time Range is required")

    .required("Time Range is required")
    .matches(
      /^([01]\d|2[0-3]):([0-5]\d)\s*-\s*([01]\d|2[0-3]):([0-5]\d)$/,
      "Time Range must be in HH:mm - HH:mm format"
    )
    .test(
      "start-before-end",
      "Start time must be before end time",
      function (value) {
        if (!value) return false;
        const [start, end] = value.split("-").map(t => t.trim());
        return start < end;
      }
    ),
  priceperslot: yup.string().required("Price per Slot is required"),
  commissionpaid: yup.string().required("Commmission is required"),
  status: yup.string().required("Status is required"),
  
  

});



const EditTurf = ({ onclose,data }) => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
 
  
  
  const onSubmit = async(data) => {
    try {
      const response = await axios.put(`${API}/turfmanagement/updateturfbyid/${data._id}`, data);
  
      toast.success("Turf Updated Successfully!");
      onclose();
      console.log(response.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="font-roboto-flex fixed inset-0 grid justify-center items-center backdrop-blur-xs backdrop-grayscale-50  drop-shadow-lg z-20">
      <div className=" shadow-lg py-2  bg-white  rounded-md  max-w-md">
        <div className="grid">
          <button
            onClick={onclose}
            className=" place-self-end   cursor-pointer bg-white  rounded-full lg:-mx-4 md:-mx-4 -mx-2 lg:-my-6 md:-my-5  -my-3 lg:shadow-md md:shadow-md shadow-none lg:py-2.5 md:py-2.5 py-1 lg:px-2.5 md:px-2.5 px-1 "
          >
            <IoClose className="size-[24px]" />
          </button>
          <h1 className="text-center font-medium text-2xl py-2">
            Edit Turf
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" px-6 py-6">
              <div className=" lg:space-y-3 space-y-3">
                <InputField
                  label="Turf Name"
                
                  name="turfname"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                  
                />
                <InputField
                  label="Turf Owner"
                  
                  name="turfowner"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                  
                />
                <InputField
                  label="Sports"
                  type="select"
                  name="sports"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                  options={[
                    {
                      value: "Football",
                      label: " Football",
                    },
                    { value: "Cricket", label: "Cricket" },
                    { value: "Hockey", label: "Hockey" },
                  ]}
                />
                <InputField
                  label="Address"
                  type="textarea"
                  name="address"
                  register={register}
                  errors={errors}
                  placeholder="Type Here"
                />
                <InputField
                  label="Slot Duration(Minutes)"
                  type="select"
                  name="slotduration"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                  options={[
                    { value: "30", label: "30 Minutes" },
                    { value: "60", label: "60 Minutes" },
                    { value: "90", label: "90 Minutes" },
                    { value: "120", label: "120 Minutes" },
                  ]}
                  />
                
                <InputField
                  label="Time Range"
                  type="text"
                  name="timerange"
                  placeholder="e.g. 09:00 - 12:00"
                  register={register}
                  errors={errors}
                  
                  />
                <InputField
                  label="Price per Slot"
                  name="priceperslot"
                  register={register}
                  errors={errors}
                  placeholder="Type Here"
                />
                
                <InputField
                  label="Commission(%)"
                
                  name="commissionpaid"
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

export default EditTurf;
