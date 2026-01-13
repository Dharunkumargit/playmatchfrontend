import React from 'react'
import Table from '../../components/Table'
import { bookingmanagementdata } from '../../components/Data';
import ViewBookingManagement from './ViewBookingManagement';
import DeleteBooking from './DeleteBooking';
import AddBookings from './AddBookings';
import { BookImageIcon } from 'lucide-react';

const BookingManagement = () => {
    const Columns = [
        { label: "Booking ID", key: "bookingid" },
        { label: "User", key: "user" },
        { label: "Type", key: "type" },
        { label: "Name", key: "name" },
        { label: "Date & Time", key: "dateandtime" },
        { label: "Amount", key: "amount" },
        { label: "Commission", key: "commission" },
        { label: "Status", key: "status" },
      ];
  return (
    <div>
      <Table title="Booking Management" 
      pagetitle="Booking Management"
      colomns={Columns}
      tabledata={bookingmanagementdata}
      showEditButton={false}
      ViewModel={ViewBookingManagement}
      DeleteModal={DeleteBooking}
      routepoint={"viewbookingmanagement"}
      addButtonLabel="Add Bookings"
      addButtonIcon={<BookImageIcon size={22} />}
      AddModal={AddBookings} />
      
    </div>
  )
}

export default BookingManagement
