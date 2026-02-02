import React, { useEffect, useState } from 'react'
import Table from '../../components/Table'
import ViewBookingManagement from './ViewBookingManagement'
import DeleteBooking from './DeleteBooking'
import AddBookings from './AddBookings'
import { BookImageIcon } from 'lucide-react'
import axios from 'axios' // your axios instance

const BookingManagement = () => {

  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)

  const Columns = [
    { label: "Booking ID", key: "bookingid" },
    { label: "User", key: "user" },
    { label: "Type", key: "type" },
    { label: "Name", key: "name" },
    { label: "Date & Time", key: "dateandtime" },
    { label: "Amount", key: "amount" },
    { label: "Commission", key: "commission" },
    { label: "Status", key: "status" },
  ]

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    try {
      const res = await axios.get('/booking/getallbookings')

      const formattedData = res.data.map(item => ({
        id: item._id,
        bookingid: item.bookingId,
        user: item.user?.name || "N/A",
        type: item.sportType,
        name: item.turf?.name,
        dateandtime: `${new Date(item.bookingDate).toDateString()} | ${item.timeSlot}`,
        amount: `₹${item.amount}`,
        commission: `₹${item.commission}`,
        status: item.status
      }))

      setBookings(formattedData)
      setLoading(false)
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
  }

  return (
    <div>
      <Table
        title="Booking Management"
        pagetitle="Booking Management"
        colomns={Columns}
        tabledata={bookings}
        loading={loading}
        showEditButton={false}
        ViewModel={ViewBookingManagement}
        DeleteModal={DeleteBooking}
        routepoint={"viewbookingmanagement"}
        addButtonLabel="Add Bookings"
        addButtonIcon={<BookImageIcon size={22} />}
        AddModal={AddBookings}
      />
    </div>
  )
}

export default BookingManagement
