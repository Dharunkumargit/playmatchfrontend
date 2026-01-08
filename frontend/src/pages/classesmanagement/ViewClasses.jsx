import React from "react";
import ViewPage from "../../components/ViewPage";
import { useLocation } from "react-router";

const ViewClasses = () => {
  const { state } = useLocation();
  const user = state?.item;
  console.log("User:", user);

  if (!user) {
    return <p className="p-4"> No user data found.</p>;
  }

  const mainFields = [
    { label: "Classes name", value: "Aarnav" },
    { label: "Coach", value: "00000 00000" },
    { label: "Duration", value: "Active" },
    { label: "Price", value: "Urban Centre" },
    { label: "Description", value: "123 Main Street, Anytown, USA" },
  ];

  const revenue = [
    { label: "Total Bookings", value: "250" },
    { label: "Commission %", value: "$1,250" },
    { label: "Max Participants", value: "75%" },
    { label: "Validity", value: "26.07.2025" },
  ];

  const headings = [
    { label: "Classes name", key: "className" },
    { label: "Date", key: "date" },
    { label: "Time", key: "time" },
    { label: "Participants", key: "participants" },
    { label: "Status", key: "status" },
  ];

  const data = [
    {
      className: "Yoga",
      date: "26.07.2025",
      time: "7:00 AM",
      participants: "$50",
      status: "Completed",
    },
    {
      className: "Yoga",
      date: "26.07.2025",
      time: "7:00 AM",
      participants: "$50",
      status: "Completed",
    },
    {
      className: "Yoga",
      date: "26.07.2025",
      time: "7:00 AM",
      participants: "$50",
      status: "Completed",
    },
    {
      className: "Yoga",
      date: "26.07.2025",
      time: "7:00 AM",
      participants: "$50",
      status: "Completed",
    },
    {
      className: "Yoga",
      date: "26.07.2025",
      time: "7:00 AM",
      participants: "$50",
      status: "Completed",
    },
  ];

  return (
    <ViewPage
      headings={headings}
      data={data}
      mainFields={mainFields}
      revenue={revenue}
      Title_title="Classes Management"
      active_title="View Classes Management"
      viewpage_title="Classes Management"
      buttonname="Edit Class"
      showActions={true}
    />
  );
};

export default ViewClasses;
