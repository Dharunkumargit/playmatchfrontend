import React, { useState } from "react";
import Model from "../../components/Model";
import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../../../const";


const DeleteTurf = ({ onClose,refresh,turfid }) => {  
  const [checked, setChecked] = useState(false);
  const handleDelete = async (data) => {
    if (!checked) {
      toast.error("Please confirm before deleting.");
      return;
    }

    try {
      await axios.delete(`${API}/turfmanagement/deleteturfbyid/${turfid}`);
      toast.success("Turf deleted successfully!");

      onClose();
      refresh(); // refresh table
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed!");
    }
  };
  return (
    <div>
      <Model
        close={onClose}  
        heading="Delete Turf"
        content={
          <div>
            <p className="text-dark-grey text-center">
              "Are you sure you want to delete Turf?"
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 my-5">
              <li>All upcoming bookings for this turf will be canceled.</li>
              <li>
                Linked revenue and commission data will no longer be available
                in reports.
              </li>
              <li>
                Coaches or classes linked to this turf may lose their assignments
              </li>
            </ul>
            <div className="flex items-center space-x-2 mb-6">
              <input
                type="checkbox"
                id="confirm"
                checked={checked}
                onChange={() => setChecked(!checked)}
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
              <button
                className="px-4 py-2 rounded-md text-white text-sm bg-red-600 hover:bg-red-700"
              onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default DeleteTurf;
