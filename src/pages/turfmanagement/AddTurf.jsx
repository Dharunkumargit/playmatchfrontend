import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IoClose } from "react-icons/io5";
import { InputField } from "../../components/InputField";


const schema = yup.object().shape({
  turfname: yup
    .string()
    
    .required("Turf Name is required"),
  turfowner: yup
    .string()
    .oneOf(
      ["Lorem Ipsum", "Sophia curnel"],
      "Invalid Turf Owner"
    )
    .required("Turf Owner is required"),
  sports: yup
    .string()
    .oneOf(["FootBall", "Cricket"], "Invalid sports")
    .required("Sports is required"),
  address: yup.string().required("Address is required"),
  slotduration: yup.string()
  
  .oneOf(
    ["Cricket", "Football"],
    "Invalid Slot Duration"
  )
  .required("Slot Duration is required"),
  timerange: yup.string()
  
  .oneOf(
    ["Cricket", "Football"],
    "Invalid Time Range"
  )
  .required("Time Range is required"),
  priceperslot: yup.string().required("Price per Slot is required"),
  commission: yup.string().required("Commmission is required"),
  status: yup.string().required("Status is required"),
  
  

});



const AddTurf = ({ onclose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onclose();
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
            Add Turf
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
                  type="select"
                  name="turfowner"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                  options={[
                    {
                      value: "Lorem Ipsum",
                      label: "Lorem Ipsum",
                    },
                    { value: "Sophia curnel", label: "Sophia curnel"  },
                    { value: "Sophia curnel", label: "Sophia curnel" },
                  ]}
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
                    { value: "Cricket", label: "Cricket" },
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
                    {
                      value: "Football",
                      label: " Football",
                    },
                    { value: "Cricket", label: "Cricket" },
                    { value: "Cricket", label: "Cricket" },
                  ]}
                  />
                
                <InputField
                  label="Time Range"
                  type="select"
                  name="timerange"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                  options={[
                    {
                      value: "Football",
                      label: " Football",
                    },
                    { value: "Cricket", label: "Cricket" },
                    { value: "Cricket", label: "Cricket" },
                  ]}
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
                
                  name="commission"
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

export default AddTurf;
