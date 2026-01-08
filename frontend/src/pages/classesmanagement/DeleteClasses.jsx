import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Model from "../../components/Model";
import { API } from "../../../const";

const DeleteClasses = ({ onClose, item, onDeleted }) => {
  const [confirmText, setConfirmText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (confirmText !== "DELETE") {
      toast.error("Type DELETE to confirm");
      return;
    }

    try {
      setLoading(true);

      await axios.delete(
        `${API}/classesmanagement/deleteclassbyid/${item._id}`
      );

      toast.success("Class deleted successfully");
      onClose();

      if (onDeleted) 
      onDeleted();
    } catch (err) {
      toast.error("Delete failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Model
      close={onClose}
      heading="Delete Class"
      content={
        <div>
          <p className="text-dark-grey text-center mb-4">
            Are you sure you want to delete <b>{item?.classesname}</b>? This
            action cannot be undone.
          </p>

          <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 my-5">
            <li>All future bookings will be canceled.</li>
            <li>Class will be hidden from users.</li>
            <li>Class will be hidden from coach.</li>
          </ul>

          <input
            type="text"
            placeholder="Type DELETE to confirm"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            className="border px-4 py-2 w-full mb-4 rounded-md"
          />

          <div className="flex justify-end gap-3 mb-5">
            <button
              onClick={onClose}
              className="px-5 py-1 border rounded-md"
            >
              Cancel
            </button>

            <button
              onClick={handleDelete}
              disabled={confirmText !== "DELETE" || loading}
              className={`px-6 py-2  rounded-md text-white ${
                confirmText === "DELETE"
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-red-300 cursor-not-allowed"
              }`}
            >
              {loading ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      }
    />
  );
};

export default DeleteClasses;
