import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoClose } from "react-icons/io5";
import { InputField } from "../../components/InputField";
import { API } from "../../../const";
import { toast } from "react-toastify";
import axios from "axios";

const schema = yup.object().shape({
  user: yup.string().required("User is required"),

  type: yup
    .string()

    .required("Type is required"),
  name: yup
    .string()

    .required("Name is required"),
  datetime: yup
    .date()
    .typeError("Invalid Date & Time")
    .required("Date & Time is required"),
  amount: yup
    .string()

    .required("Amount is required"),
  commission: yup.string().required("Commission is required"),
  status: yup
    .string()

    .oneOf(["Paid", "Pending"], "Invalid Status")
    .required("Status is required"),
});

const AddBookings = ({ onclose }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    onclose();
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
          <h1 className="text-center font-medium text-2xl py-2">Add User</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" px-7 py-6">
              <div className=" lg:space-y-4 space-y-3">
                <InputField
                  label="User"
                  name="user"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Type"
                  name="type"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Name"
                  name="name"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Date & Time"
                  name="datetime"
                  type="datetime-local"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Amount"
                  name="amount"
                  register={register}
                  errors={errors}
                  placeholder="Type Here"
                />
                <InputField
                  label="Commission"
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
                  type="select"
                  options={[
                    {
                      value: "Paid",
                      label: "Paid",
                    },
                    { value: "Pending", label: "Pending" },
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

export default AddBookings;
