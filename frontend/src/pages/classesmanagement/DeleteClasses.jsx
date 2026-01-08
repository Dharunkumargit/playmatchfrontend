import React, { useState } from "react";
import Model from "../../components/Model";

const DeleteClasses = ({ onClose }) => {

  return (
    <div>
      <Model
        close={onClose}
        heading="Delete "
        content={
          <div>
            <p className="text-dark-grey text-center mb-3">
              Are you sure you want to delete Yoga? This action cannot be undone, and all related bookings or data will be permanently removed.
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 my-5">
              <li>All future bookings will be canceled.</li>
              <li>Class will be hidden from users.</li>
              <li>Class will be hidden from coach.</li>
            </ul>
            <input
              type="text"
              placeholder="Type  DELETE to confirm"
              className="border outline-none border-gray-300 rounded-md px-4 py-2 w-full mb-4"
            />
            <div className="flex justify-end space-x-3 mb-4">
              <button
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 text-sm hover:bg-gray-100"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className={`px-4 py-2 rounded-md text-white text-sm bg-red-600 hover:bg-red-700`}
              >
                Delete
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default DeleteClasses;
