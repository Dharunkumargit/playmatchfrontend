import React from "react";
import { IoClose } from "react-icons/io5";

const Model = ({ close, heading, content }) => {
  return (
    <div>
      <div className="font-roboto-flex fixed inset-0 grid justify-center items-center backdrop-blur-xs backdrop-grayscale-50  drop-shadow-lg z-20">
        <div className=" shadow-lg px-5 bg-white  rounded-md w-[550px]">
          <div className="grid">
            <button
              onClick={close}
              className=" place-self-end   cursor-pointer bg-white  rounded-full lg:-mx-12 md:-mx-4 -mx-2 lg:-my-4 md:-my-5  -my-3 lg:shadow-md md:shadow-md shadow-none lg:py-2.5 md:py-2.5 py-1 lg:px-2.5 md:px-2.5 px-1 "
            >
              <IoClose className="size-[24px]" />
            </button>
            <h1 className="text-center font-medium text-2xl py-2">{heading}</h1>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
