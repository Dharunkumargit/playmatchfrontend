import React, { useState } from "react";
import { useNavigate } from "react-router";
import Title from "../../../components/Title";
import { IoSave } from "react-icons/io5";

const EditRoles = () => {
  const [roleName, setRoleName] = useState("");
  const [createdBy, setCreatedBy] = useState("System");
  const [selectedSettings, setSelectedSettings] = useState({});
  const [permissions, setPermissions] = useState({});
  const navigate = useNavigate();

  const settingsOptions = [
    "Dashboard",
    "GMD",
    "Leads",
    "CMS",
    "Appointments",
    
    "Finance",
    "Reports",
    "Subscribers",
    "Subscriptions",
    "Settings",
  ];

  const permissionOptions = [
    "All",
    "View",
    "Create",
    "Edit",
    "Delete",
    "Download",
  ];

  const toggleSetting = (setting) => {
    setSelectedSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));

    setPermissions((prev) => {
      if (prev[setting]) {
        const updated = { ...prev };
        delete updated[setting];
        return updated;
      }
      return { ...prev, [setting]: [] };
    });
  };

  const handlePermissionChange = (setting, permission, checked) => {
    setPermissions((prev) => {
      let updatedPermissions = prev[setting] || [];

      if (permission === "All") {
        updatedPermissions = checked ? permissionOptions.slice(1) : [];
      } else {
        updatedPermissions = checked
          ? [...updatedPermissions, permission]
          : updatedPermissions.filter((p) => p !== permission);

        if (!checked) {
          updatedPermissions = updatedPermissions.filter((p) => p !== "All");
        }
      }

      if (updatedPermissions.length === permissionOptions.length - 1) {
        updatedPermissions = ["All", ...updatedPermissions];
      }

      return { ...prev, [setting]: updatedPermissions };
    });
  };

  const handleSave = () => {
    console.log("Saved role:", {
      roleName,
      createdBy,
      permissions,
    });
    navigate("/settings/roles");
  };

  return (
    <>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <Title title="Settings" sub_title="Roles" page_title="Edit Roles" />
        <div className="flex gap-3 mr-5">
          <p
            onClick={handleSave}
            className="flex items-center gap-2 bg-dark-orange text-black px-6 py-2 rounded-sm cursor-pointer"
          >
            <IoSave size={18} />
            Save
          </p>
        </div>
      </div>

      
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 ">
          <span className="font-semibold min-w-[70px]">Roles</span>
          <input
            type="text"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            className=" sm:w-auto flex-1 px-3 py-2 rounded-md outline-none  bg-white text-black"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 ">
          <span className="font-semibold min-w-[90px]">Created By</span>
          <input
            type="text"
            value={createdBy}
            onChange={(e) => setCreatedBy(e.target.value)}
            className=" sm:w-auto flex-1 px-3 py-2 rounded-md outline-none bg-white text-black"
          />
        </div>
      </div>

      
      <div className="bg-white p-6 rounded-xl shadow-sm mr-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
          <div className="border-b lg:border-b-0 lg:border-r p-4 
            lg:max-h-[400px] lg:overflow-y-auto
            lg:min-h-[400px] no-scrollbar">
            <h2 className="text-lg font-medium mb-4 text-center lg:text-left">
              Settings
            </h2>
            {settingsOptions.map((setting) => (
              <div key={setting} className="flex items-center mb-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <label className="relative flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={!!selectedSettings[setting]}
                      onChange={() => toggleSetting(setting)}
                      className="appearance-none w-5 h-5 border-2 border-darkest-blue rounded-md checked:bg-dark-orange checked:border-transparent focus:outline-none transition-all duration-200"
                    />
                    <span className="absolute w-5 h-5 flex justify-center items-center pointer-events-none">
                      {selectedSettings[setting] && (
                        <svg
                          className="w-10 h-4 text-black"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      )}
                    </span>
                  </label>
                  {setting}
                </label>
              </div>
            ))}
          </div>

          
          <div className="lg:col-span-2 p-4 overflow-x-auto">
            <h2 className="text-lg font-medium mb-4">Permissions</h2>
            <div className="space-y-4">
              {settingsOptions.map((setting) => (
                <div key={setting}>
                  {selectedSettings[setting] && (
                    <div className="flex flex-wrap gap-4">
                      {permissionOptions.map((perm) => (
                        <label
                          key={perm}
                          className="flex items-center gap-2 cursor-pointer text-sm"
                        >
                          <input
                            type="checkbox"
                            checked={
                              permissions[setting]?.includes(perm) || false
                            }
                            onChange={(e) =>
                              handlePermissionChange(
                                setting,
                                perm,
                                e.target.checked
                              )
                            }
                            className="appearance-none w-5 h-5 border-2 border-darkest-blue rounded-md checked:bg-dark-orange checked:border-transparent focus:outline-none transition-all duration-200"
                          />
                          <span className="absolute w-5 h-5 flex justify-center items-center pointer-events-none">
                            {permissions[setting]?.includes(perm) && (
                              <svg
                                className="w-10 h-4 text-black"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            )}
                          </span>
                          {perm}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditRoles;
