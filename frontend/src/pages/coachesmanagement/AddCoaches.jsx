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
  coachname: yup
    .string()

    .required("Coach Name is required"),
  sports: yup
    .string()

    .required("Sport is required"),
  experiance: yup
    .string()

    .required("Experiance is required"),
  email: yup.string().required("Email is required"),
  phonenumber: yup.string().required("PhoneNumber is required"),
  bio: yup.string().required("bio is required"),
  certifications:yup.string().required("Certification is required"),
  sportsCoached:yup.string().required("Certification is required"),
  profilepicture: yup.string().required("profilepicture is required"),

  status: yup.string().required("Status is required"),
});

const AddCoaches = ({ onclose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        coachName: data.coachname,
        sports: data.sports,
        experience: Number(data.experiance),
        phoneNumber: data.phonenumber,
        email: data.email,
        bio: data.bio,
        profilePicture: data.profilepicture,
        status: data.status,
        certifications:data.certifications
      };

      await axios.post(`${API}/coachmanagement/createcoach`, payload);
      console.log(payload);
      toast.success("Coach added successfully");
      onclose();
    } catch (error) {
      toast.error("Failed to add coach");
      console.error(error);
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
          <h1 className="text-center font-medium text-2xl py-2">Add Coaches</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="px-6 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Coach Name "
                  name="coachname"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                />

                <InputField
                  label="Sports"
                  name="sports"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                />

                <InputField
                  label="Experience (Years)"
                  name="experiance"
                  type="number"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Profile Picture"
                  name="profilepicture"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                />

                <InputField
                  label="Email"
                  name="email"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                />

                {/* Full Width */}

                {/* Full Width */}
                <InputField
                  label="Phone Number"
                  name="phonenumber"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                />

                <InputField
                  label="Status"
                  name="status"
                  placeholder="Active / Inactive"
                  register={register}
                  errors={errors}
                />

                <InputField
                  label="Bio"
                  type="textarea"
                  name="bio"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Certications"
      
                  name="certifications"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Sport Coached"
      
                  name="sportsCoached"
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
                className="px-6 py-2 bg-dark-orange text-black rounded"
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

export default AddCoaches;
