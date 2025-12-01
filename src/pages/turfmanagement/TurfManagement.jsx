import React from 'react'
import Table from '../../components/Table'

import { PiShoppingBagOpenBold } from 'react-icons/pi'
import { turfmanagementdata } from '../../components/Data'
import AddTurf from './AddTurf'
import EditTurf from './EditTurf'
import ViewTurf from './ViewTurf'
import DeleteTurf from './DeleteTurf'

const TurfManagement = () => {
    const Columns = [
        { label: "Turf Name", key: "turfname" },
        { label: "Location", key: "location" },
        { label: "Owner Name", key: "ownername" },
        { label: "Total Bookings", key: "totalbookings" },
        { label: "Total Revenue", key: "totalrevenue" },
        { label: "Commission Paid", key: "comminisionpaid" },
        { label: "Status", key: "status" },
      ];
    
  return (
    <div>
      <Table title="Turf Management"
      pagetitle="Turf Management"
      addButtonLabel="Add Turf"
      addButtonIcon={<PiShoppingBagOpenBold size={22} />}
      colomns={Columns}
      tabledata={turfmanagementdata}
      AddModal={AddTurf}
      EditModal={EditTurf}
      routepoint={"viewturf"}
      ViewModel={ViewTurf}
      DeleteModal={DeleteTurf}
      />
      
    </div>
  )
}

export default TurfManagement
