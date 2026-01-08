import React, { useEffect, useState } from 'react'
import Table from '../../components/Table'
import { TbBuildingStore } from 'react-icons/tb'
import { classesmanagementdata } from '../../components/Data';
import AddClass from './AddClass';
import EditClass from './EditClass';
import ViewClasses from './ViewClasses';
import DeleteClasses from './DeleteClasses';
import { API } from '../../../const';
import axios from 'axios';

const ClassesManagement = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  
    const Columns = [
        { label: "Classes Name", key: "classesname" },
        { label: "Type", key: "type" },
        { label: "Coach", key: "coach" },
        { label: "Price", key: "price" },
        { label: "Total Bookings", key: "totalbookings" },
        { label: "Commission Earned", key: "commissionearned" },
        { label: "Status", key: "status" },
      ];

      const fetchClasses = async () => {
        try {
          setLoading(true);
          const res = await axios.get(`${API}/classesmanagement/getclasses`);
          setClasses(res.data.data);
        } catch (error) {
          console.error("Error fetching classes", error);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchClasses();
      }, []);
  return (
    <div>
      <Table title="Classes Management"
      pagetitle="Classes Management"
      addButtonLabel="Add Class"
      addButtonIcon={<TbBuildingStore size={22} />}
      colomns={Columns}
      tabledata={classes}
      AddModal={AddClass}
      EditModal={EditClass}
      ViewModel={true}
      DeleteModal={DeleteClasses}
      routepoint="viewclassesmanagement"/>
    </div>
  )
}

export default ClassesManagement
