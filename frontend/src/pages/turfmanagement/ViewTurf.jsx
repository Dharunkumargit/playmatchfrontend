import React from "react";
import { useNavigate, Outlet, useLocation } from "react-router";
import ViewPage from "../../components/ViewPage";

import Button from "../../components/Button";
import TurfPhotoUpload from "./TurfPhotoUpload";

const ViewTurf = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAddPhotosPage = location.pathname.includes("addphotos");
  const user =  location.state?.item;
  
   console.log("User:", user);

  if (!user) {
    return <p className="p-4"> No user data found.</p>;
  }

  

  const mainFields = [
    { label: "Turf owner", value: user.turfowner },
    { label: "Phone number", value: "0000 0000" },
    { label: "Status", value: user.status },
    { label: "Location", value: user.location },
    { label: "Sports Support", value: "Soccer, Basketball" },
    { label: "Address", value: user.turfname },
  ];

  const revenue = [
    { label: "Total Bookings", value: user.totalbookings },
    { label: "Total Revenue", value: user.totalrevenue },
    { label: "Commission Paid", value: user.commissionpaid },
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
    <div>
    {!isAddPhotosPage && (
    <div>
    
      <ViewPage
        Title_title="Turf Management"
        active_title="View Turf"
        viewpage_title="Turf Management"
        buttonname="Edit Turf"
        mainFields={mainFields}
        revenue={revenue}
        headings={BookingColumns}
        data={bookingdata}
        showaddphotos={true}
      />
      
    </div>)}
    <div className="p-4  mb-10">
      <h1 className="text-xl font-semibold"></h1>
      <div className="flex justify-between items-center mr-5 mb-10">
        <p className="text-xl font-semibold">Gallery Management</p>
        <Button
          button_name="Add Photos"
          bgColor="bg-dark-orange"
          
        />
      </div>
      <TurfPhotoUpload />
    </div>
    
    </div>
  );
};

export default ViewTurf;
