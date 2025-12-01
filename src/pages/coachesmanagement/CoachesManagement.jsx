

import React from 'react'
import Table from '../../components/Table'
import { LuLayoutDashboard } from 'react-icons/lu'
import { coachesmanagementdata } from '../../components/Data';
import AddCoaches from './AddCoaches';
import EditCoaches from './EditCoaches';
import ViewCoaches from './ViewCoaches';
import DeleteCoaches from './DeleteCoaches';

const CoachesManagement = () => {
    const Columns = [
        { label: "Profile", key: "profile" },
        { label: "Coach Name", key: "coachname" },
        { label: "Sports", key: "sports" },
        { label: "Assigned Classes", key: "assignedclasses" },
        { label: "Total Bookings", key: "totalbookings" },
        { label: "Commission Earned", key: "comminisionearned" },
        { label: "Rating", key: "rating" },
      ];
  return (
    <div>
      <Table title="Coaches Management"
      pagetitle="Coaches Management"
      addButtonIcon={<LuLayoutDashboard size={22} />}
      addButtonLabel="Add Coaches"
      colomns={Columns}
      tabledata={coachesmanagementdata}
      AddModal={AddCoaches}
      EditModal={EditCoaches}
      ViewModel={<ViewCoaches/>}
      DeleteModal={DeleteCoaches}
      routepoint="viewcoachesmanagement"/>
    </div>
  )
}

export default CoachesManagement
