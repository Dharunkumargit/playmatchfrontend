import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoClose } from "react-icons/io5";
import { InputField } from "../../components/InputField";
import { useLocation, useNavigate } from "react-router";





const schema = yup.object().shape({

  playername: yup
  .string()
  .required("PlayerName is required"),

  totalbookings: yup
    .string()
    
    .required("TotalBooking is required"),
  lastbookings: yup
    .string()
    
    .required("LastBooking is required"),
    membership: yup
    .string()
    
    .required("membership is required"),
  totalspend: yup
    .string()
    
    .required("TotalSpend is required"),
  
  status: yup
  .string()
  
  
  .oneOf(["Active", "Inactive",], "Invalid Status")
  .required("Status is required"),
});



const EditPlayer = ({ onclose,data }) => {
    const {state} = useLocation();
    const navigate = useNavigate();

  const player = state?.player;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (player) {
      reset({
        playername: player.playername,
        totalbookings: player.totalbookings,
        lastbookings: player.lastbooking,
        membership: player.membership,
        totalspend: player.totalspend,
        status: player.status,
      });
    }
  }, [player, reset]);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // onclose();
    navigate(-1);
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
            Edit Player
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" px-7 py-6">
              <div className=" lg:space-y-4 space-y-3">
                <InputField
                  label="Player Name"
                
                  name="playername"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                  
                />
                <InputField
                  label="Total Bookings"
                  name="totalbookings"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                  
                />
                <InputField
                  label="Last Bookings"
                 
                  name="lastbookings"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                 
                />
                <InputField
                  label="Membership"
                  name="membership"
                  register={register}
                  errors={errors}
                  
                  placeholder="Type Here"
                  
                />
                <InputField
                  label="Total Spend"
                  name="totalspend"
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
                  type = "select"
                  options={[
                    {
                      value: "Active",
                      label: "Active",
                    },
                    { value: "InActive", label: "InActive" },
                    
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

export default EditPlayer;