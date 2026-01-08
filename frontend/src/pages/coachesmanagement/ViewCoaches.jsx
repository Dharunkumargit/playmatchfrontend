import React, { useState } from "react";
import ViewPage from "../../components/ViewPage";
import { useLocation, useParams } from "react-router";
import Addcoachesphotos from "./Addcoachesphotos";

const ViewCoaches = () => {
  const [coachPhotos, setCoachPhotos] = useState([]);
  const { state } = useLocation();
  const user = state?.item;
  console.log("User:", user);
 
  if (!user) {
    return <p className="p-4"> No user data found.</p>;
  }

  const mainFields = [
    { label: "Name", value: "Aarnav" },
    { label: "Sport", value: "00000 00000" },
    { label: "Experience", value: "Active" },
    { label: "Phone number", value: "Urban Cente" },
    { label: "Email", value: "123 Main Street, Anytown, USA" },
  ];

  const revenue = [
    { label: "Total Bookings", value: "350" },
    { label: "Commission Earned", value: "15%" },
    { label: "Assigned Classes", value: "120" },
    { label: "Rating", value: "4.5 Reviews" },
  ];

  const bookingdata = [
    {
      classname: "Football Fundamentals",
      type: "Group Session",
      date: "26.07.2025",
      participants: 15,
      status: "Completed",
    },
    {
      classname: "Football Fundamentals",
      type: "Group Session",
      date: "26.07.2025",
      participants: 15,
      status: "Completed",
    },
    {
      classname: "Football Fundamentals",
      type: "Group Session",
      date: "26.07.2025",
      participants: 15,
      status: "Completed",
    },
  ];

  const BookingColumns = [
    { label: "Classes name", key: "classname" },
    { label: "Type", key: "type" },
    { label: "Date", key: "date" },
    { label: "Participants", key: "participants" },
    { label: "Status", key: "status" },
  ];

  return (
    <div>
    <ViewPage
      Title_title="Coaches Management"
      active_title="Coaches Management"
      viewpage_title="Coaches Management"
      buttonname="Edit Coach"
      mainFields={mainFields}
      revenue={revenue}
      headings={BookingColumns}
      data={bookingdata}
      showActions={true}
    />
    <div className="p-4  mb-10">
    <h1 className="text-xl font-semibold"></h1>
    <div className="flex justify-between items-center mr-5 mb-10">
      <p className="text-xl font-semibold">Gallery Management</p>
      <Button
        button_name="Add Photos"
        bgColor="bg-dark-orange"
        
      />
    </div>
    <Addcoachesphotos 
     />
    </div>
    </div>
  );
};

export default ViewCoaches;
