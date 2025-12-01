import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IoClose } from "react-icons/io5";
import { InputField } from "../../components/InputField";

const schema = yup.object().shape({
  classesname: yup
    .string()

    .required("Classes Name is required"),
  coach: yup
    .string()
    .oneOf(["Lorem Ipsum", "Sophia curnel"], "Invalid coach")
    .required("Coach is required"),
  duration: yup
    .string()
    .oneOf(["FootBall", "Cricket"], "Invalid Duration")
    .required("Duration is required"),
  price: yup.string().required("Price is required"),
  commission: yup.string().required("Commmission is required"),
  
  description: yup.string().required("Description is required"),
  maxparticipants: yup.string().required("Max Participants is required"),
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
          <h1 className="text-center font-medium text-2xl py-2">Add Class</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" px-6 py-6">
              <div className=" lg:space-y-3 space-y-3">
                <InputField
                  label="Classes Name"
                  name="classesname"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Coach"
                  type="select"
                  name="coach"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                  options={[
                    {
                      value: "Lorem Ipsum",
                      label: "Lorem Ipsum",
                    },
                    { value: "Sophia curnel", label: "Sophia curnel" },
                    { value: "Sophia curnel", label: "Sophia curnel" },
                  ]}
                />
                <InputField
                  label="Duration"
                  type="select"
                  name="duration"
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
                  label="Price "
                  name="price"
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
                  label="Description"
                  type="textarea"
                  name="description"
                  register={register}
                  errors={errors}
                  placeholder="Type Here"
                />

                <InputField
                  label="Max Participants"
                  name="maxparticipants"
                  register={register}
                  errors={errors}
                  placeholder="Type Here"
                />

                <InputField
                  label="Validity"
                  name="validity"
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

export default AddClass;
