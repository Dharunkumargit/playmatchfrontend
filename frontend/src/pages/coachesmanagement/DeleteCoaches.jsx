import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import Model from "../../components/Model";
import { API } from "../../../const";

const DeleteCoaches = ({ onClose, item, onDeleted }) => {
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
        `${API}/coachmanagement/deletecoachbyid/${item._id}`
      );

      toast.success("Coach deleted successfully");
      onClose();
      onDeleted(); 
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete coach");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Model
      close={onClose}
      heading="Delete Coach"
      content={
        <div>
          <p className="text-dark-grey text-center">
            Are you sure you want to delete
            <span className="font-bold text-black">
              {" "}{item?.coachName}
            </span>
            ?
          </p>

          <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 my-5">
            <li>Upcoming classes will be canceled</li>
            <li>Commission and performance data will be removed</li>
            <li>Linked users will lose their assignments</li>
          </ul>

          <div className="flex items-center space-x-2 mb-6">
            <input
              type="checkbox"
              checked={confirm}
              onChange={(e) => setConfirm(e.target.checked)}
              className="h-4 w-4 text-red-600"
            />
            <label className="text-sm text-gray-600">
              I understand this action is permanent
            </label>
          </div>

          <div className="flex justify-end space-x-3 mb-5">
            <button
              onClick={onClose}
              className="px-4 py-2 border rounded-md"
            >
              Cancel
            </button>

            <button
              onClick={handleDelete}
              disabled={loading}
              className="px-4 py-2 rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              {loading ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      }
    />
  );
};

export default DeleteCoaches;
