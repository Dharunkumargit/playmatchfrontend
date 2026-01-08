import React from 'react'
import { useLocation, useNavigate } from 'react-router';
import Title from '../../components/Title';

const ViewPlayer = () => {
    const { state } = useLocation();
  const user = state?.item;
  const navigate = useNavigate();
  const mainFields = [
    { label: "Booking ID", value: user.bookingid },
    { label: "Player Name", value: user.playername },
    { label: "Total Bookings", value: user.totalbookings },
    { label: "Last Booking", value: user.lastbooking },
    { label: "Membership", value: user.membership },
    { label: "Status", value: user.status },
  ];
  return (
    <div>
      <Title title="View Player" page_title="View Player" sub_title="Table" />
      <div className="bg-white p-4 rounded-lg space-y-2 text-sm mt-3 mr-6">
        
        <div className="grid grid-cols-12 gap-2 items-start mt-3 ml-4 mb-3">
          {mainFields.map((field, idx) => (
            <React.Fragment key={idx}>
              <p className="col-span-4 font-medium">{field.label}</p>
              <div className="col-span-8">
                <span
                  className={`text-sm text-gray-500 ${
                    field.label === "Status" && field.value === "Active"
                      ? "text-green-600 font-medium"
                      : "text-red-600"
                  }text-black`}
                >
                  {field.value}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ViewPlayer