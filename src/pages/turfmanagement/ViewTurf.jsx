import React from "react";
import { useLocation } from "react-router";
import ViewPage from "../../components/ViewPage";

const ViewTurf = () => {
  const { state } = useLocation();
  const user = state?.item;
  console.log("User:", user);

  if (!user) {
    return <p className="p-4"> No user data found.</p>;
  }

  const mainFields = [
    { label: "Owner Name", value: user.ownername },
    { label: "Phone number", value: "0000 0000" },
    { label: "Status", value: user.status },
    { label: "Location", value: user.location },
    { label: "Sports Support", value: "Soccer, Basketball" },
    { label: "Address", value: user.turfname },
  ];

  const revenue = [
    { label: "Total Bookings", value: user.totalbookings },
    { label: "Total Revenue", value: user.totalrevenue },
    { label: "Commission Paid", value: user.comminisionpaid },
    { label: "Avg. Occupancy Rate", value: "70%" },
  ];

  const bookingdata = [
    {
      bookingid: "#12345",
      username: "Ethan Harper",
      date: "26.07.2025",
      timeslot: "10:00 AM - 11:00 AM",
      amount: "$50",
      paymentstatus: "Paid",
    },
    {
      bookingid: "#12346",
      username: "Sophia Miller",
      date: "27.07.2025",
      timeslot: "11:00 AM - 12:00 PM",
      amount: "$70",
      paymentstatus: "Paid",
    },
  ];

  const BookingColumns = [
    { label: "Booking ID", key: "bookingid" },
    { label: "User Name", key: "username" },
    { label: "Date", key: "date" },
    { label: "Time Slot", key: "timeslot" },
    { label: "Amount", key: "amount" },
    { label: "Payment Status", key: "paymentstatus" },
  ];

  return (
    <ViewPage
      Title_title="Turf Management"
      active_title="View Turf"
      viewpage_title="Turf Management"
      buttonname="Edit Turf"
      mainFields={mainFields}
      revenue={revenue}
      headings={BookingColumns}
      data={bookingdata}
    />
  );
};

export default ViewTurf;
