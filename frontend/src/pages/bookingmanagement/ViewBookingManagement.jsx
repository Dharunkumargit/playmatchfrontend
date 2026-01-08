import React from "react";
import ViewPage from "../../components/ViewPage";


const ViewBookingManagement = () => {
  const mainFields = [
    { label: "Name", value: "Aarnav" },
    { label: "Sport", value: "00000 00000" },
    { label: "Experience", value: "Active" },
    { label: "Phone number", value: "Urban Centre" },
    { label: "Email", value: "123 Main Street, Anytown, USA" }
  ];
  
  const revenue = [
    { label: "Total Bookings", value: "350" },
    { label: "Commission Earned", value: "15%" },
    { label: "Assigned Classes", value: "120" },
    { label: "Rating", value: "4.5 Reviews" }
  ];
  
  const headings = [
    { label: "Classes name", key: "className" },
    { label: "Type", key: "type" },
    { label: "Date", key: "date" },
    { label: "Participants", key: "participants" },
    { label: "Status", key: "status" }
  ];
  
  const data = [
    {
      className: "Football Fundamentals",
      type: "Group Session",
      date: "26.07.2025",
      participants: "15",
      status: "Completed"
    },
    {
      className: "Football Fundamentals",
      type: "Group Session",
      date: "26.07.2025",
      participants: "15",
      status: "Completed"
    },
    {
      className: "Football Fundamentals",
      type: "Group Session",
      date: "26.07.2025",
      participants: "15",
      status: "Completed"
    },
    {
      className: "Football Fundamentals",
      type: "Group Session",
      date: "26.07.2025",
      participants: "15",
      status: "Completed"
    },
    {
      className: "Football Fundamentals",
      type: "Group Session",
      date: "26.07.2025",
      participants: "15",
      status: "Completed"
    }
  ];
  return (
    <ViewPage
      headings={headings}
      data={data}
      mainFields={mainFields}
      revenue={revenue}
      Title_title="Booking Management"
      active_title="View Booking Management"
      viewpage_title="Booking Management"
      buttonname="Edit Booking"
      showActions={true}
    />
  );
};

export default ViewBookingManagement;