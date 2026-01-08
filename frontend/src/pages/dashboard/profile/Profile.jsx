import React, { useState } from "react";
import Pic from "../../../assets/images/Pic.png";
import Table_profile from "./Table_profile";
import Update_Password from "./Update_Passwoed";
import Edit_profile from "./Edit_profile";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("table");

  const user = {
    name: "Sophia Clark",
    role: "Admin / User",
    email: "sophia.clark@email.com",
  };

  const headings = [
    { key: "date", label: "Date" },
    { key: "time", label: "Time" },
    { key: "activity", label: "Activity" },
    { key: "device", label: "Device" },
  ];

  const activities = [
    { date: "29.08.2025", time: "11:23 am", activity: "User logged in", device: "Desktop" },
    { date: "29.08.2025", time: "12:10 pm", activity: "Password updated", device: "Mobile" },
    { date: "30.08.2025", time: "09:15 am", activity: "User logged out", device: "Desktop" },
    { date: "30.08.2025", time: "10:45 am", activity: "User logged in", device: "Tablet" },
    { date: "30.08.2025", time: "02:18 pm", activity: "Profile updated", device: "Desktop" },
    { date: "31.08.2025", time: "08:05 am", activity: "User logged in", device: "Mobile" },
    { date: "31.08.2025", time: "08:30 am", activity: "Email changed", device: "Mobile" },
    { date: "31.08.2025", time: "01:12 pm", activity: "User logged out", device: "Tablet" },
    { date: "01.09.2025", time: "07:45 am", activity: "User logged in", device: "Desktop" },
    { date: "01.09.2025", time: "09:20 am", activity: "Password updated", device: "Desktop" },
  ];

  return (
    <div className="p-4 sm:p-6 bg-white mb-10 mr-0 sm:mr-4">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3 sm:gap-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">My Profile</h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Manage your personal details and account settings.
          </p>
        </div>

        
        {activeTab === "table" && (
          <button
            className="bg-dark-orange text-black text-sm font-semibold px-5 py-3 sm:px-6 sm:py-4 rounded-md cursor-pointer"
            onClick={() => setActiveTab("edit_profile")}
          >
            Edit Profile
          </button>
        )}

        {activeTab === "update_password" && (
          <div className="flex flex-wrap gap-2">
            <button
              className="bg-[#EDEDED] text-black text-sm font-bold px-5 py-2 sm:px-6 sm:py-3 rounded-md cursor-pointer"
              onClick={() => setActiveTab("table")}
            >
              Cancel
            </button>
            <button className="bg-dark-orange text-black text-sm font-bold px-5 py-2 sm:px-6 sm:py-3 rounded-md cursor-pointer">
              Save Password
            </button>
          </div>
        )}

        {activeTab === "edit_profile" && (
          <div className="flex flex-wrap gap-2">
            <button
              className="bg-[#EDEDED] text-black text-sm font-bold px-5 py-3 sm:px-6 sm:py-4 rounded-md cursor-pointer"
              onClick={() => setActiveTab("table")}
            >
              Cancel
            </button>
            <button type="submit" className="bg-dark-orange text-black text-sm font-bold px-5 py-3 sm:px-6 sm:py-4 rounded-md cursor-pointer">
              Save Changes
            </button>
          </div>
        )}
      </div>

      {/* Grid Section */}
      <div
        className={`grid gap-4 sm:gap-3 ${
          activeTab === "table"
            ? "grid-cols-1 md:grid-cols-3 lg:grid-cols-3"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
        }`}
      >
        {/* Left Card */}
        <div className="p-6 bg-[#FCFAF7] h-fit rounded-xl col-span-1 flex flex-col items-center md:items-start">
          <img
            src={Pic}
            alt="avatar"
            className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover mb-4"
          />
          <div className="flex flex-col sm:flex-row justify-between w-full gap-3 sm:gap-0">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600 text-sm">{user.role}</p>
              <p className="text-gray-500 text-sm break-words">{user.email}</p>
            </div>
            <button
              className="text-sm bg-dark-orange text-black h-fit mt-2 sm:mt-8 rounded-xl px-4 py-2 sm:px-4 sm:py-2 cursor-pointer"
              onClick={() => setActiveTab("update_password")}
            >
              Update Password
            </button>
          </div>
        </div>

       
        {activeTab === "table" && (
          <div className="col-span-2 overflow-x-auto">
            <Table_profile headings={headings} data={activities} />
          </div>
        )}

        {activeTab === "update_password" && (
          <Update_Password />
        )}

        {activeTab === "edit_profile" && (
          <div className="col-span-1">
            <Edit_profile />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;