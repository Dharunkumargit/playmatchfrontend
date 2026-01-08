import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Model from "../../components/Model";
import { API } from "../../../const";

const DeleteSports = ({ onClose, item, onDeleted }) => {
  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!confirm) {
      toast.warning("Please confirm before deleting");
      return;
    }

    try {
      setLoading(true);
      await axios.delete(
        `${API}/sportmanagement/deletesportbyid/${item._id}`
      );

      toast.success("Sport deleted successfully");
      onClose();
      onDeleted(); 
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Delete failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Model
      close={onClose}
      heading="Delete Sport"
      content={
        <div>
          <p className="text-dark-grey text-center">
            Are you sure you want to delete{" "}
            <strong>{item?.sportname}</strong>?
          </p>

          <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 my-5">
            <li>
              This will remove this sport from all related turfs,
              slot time options, and bookings.
            </li>
          </ul>

          <div className="flex items-center space-x-2 mb-6">
            <input
              type="checkbox"
              id="confirm"
              checked={confirm}
              onChange={(e) => setConfirm(e.target.checked)}
              className="h-4 w-4 text-red-600"
            />
            <label htmlFor="confirm" className="text-sm text-gray-600">
              I understand that this action is permanent.
            </label>
          </div>

          <div className="flex justify-end space-x-3 mb-5">
            <button
              className="px-4 py-2 border rounded-md text-sm"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>

            <button
              onClick={handleDelete}
              disabled={loading}
              className="px-4 py-2 rounded-md text-white text-sm bg-red-600 hover:bg-red-700 disabled:opacity-50"
            >
              {loading ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      }
    />
  );
};

export default DeleteSports;
