

import React, { useEffect, useState } from 'react'
import Table from '../../components/Table'
import { LuLayoutDashboard } from 'react-icons/lu'
import { coachesmanagementdata } from '../../components/Data';
import AddCoaches from './AddCoaches';
import EditCoaches from './EditCoaches';
import ViewCoaches from './ViewCoaches';
import DeleteCoaches from './DeleteCoaches';
import axios from 'axios';
import { API } from '../../../const';

const CoachesManagement = () => {
  const [coaches, setCoaches] = useState([]);
    const Columns = [
        { label: "Profile ", key: "profilePicture" },
        { label: "Coach Name", key: "coachName" },
        { label: "Sports", key: "sports" },
        { label: "Assigned Classes", key: "assignedClasses" },
        { label: "Total Bookings", key: "totalBookings" },
        { label: "Commission Earned", key: "commissionEarned" },
        { label: "Rating", key: "rating" },
      ];
      const fetchCoaches = async () => {
        try {
          const res = await axios.get(`${API}/coachmanagement/getcoach`);
      
          const formattedData = res.data.coaches.map((coach) => ({
            ...coach,
            profilePicture: (
              <img
                src={coach.profilePicture}
                alt={coach.coachName}
                style={{ width: 30, height: 20, borderRadius: "50%" }}
              />
            ),
          }));
      
          setCoaches(formattedData);
        } catch (err) {
          console.error(err);
        }
      };
      
      useEffect(() => {
        fetchCoaches();
      }, []);
  return (
    <div>
      <Table title="Coaches Management"
      pagetitle="Coaches Management"
      addButtonIcon={<LuLayoutDashboard size={22} />}
      addButtonLabel="Add Coaches"
      colomns={Columns}
      tabledata={coaches}
      AddModal={AddCoaches}
      EditModal={EditCoaches}
      ViewModel={true}
      DeleteModal={DeleteCoaches}
      routepoint="viewcoachmanagement"
      />
    </div>
  )
}

export default CoachesManagement
