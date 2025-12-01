import React from "react";
import Model from "../../components/Model";

const DeleteSports = ({ onClose }) => {
  return (
    <div>
      <Model
        close={onClose}
        heading="Delete"
        content={
          <div>
            <p className="text-dark-grey text-center">
              Are you sure you want to delete?
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 my-5">
              <li>This will remove this sport from all related turfs, slot time options, and bookings.</li>
            </ul>

            <div className="flex items-center space-x-2 mb-6">
              <input
                type="checkbox"
                id="confirm"
                className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <label htmlFor="confirm" className="text-sm text-gray-600">
                I understand that this action is permanent.
              </label>
            </div>
            <div className="flex justify-end space-x-3 mb-5">
              <button
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 text-sm hover:bg-gray-100"
                onClick={onClose}
              >
                Cancel
              </button>
              <button className="px-4 py-2 rounded-md text-white text-sm bg-red-600 hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default DeleteSports;