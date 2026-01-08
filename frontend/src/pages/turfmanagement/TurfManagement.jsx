import React, { useState, useEffect } from 'react'
import Table from '../../components/Table'

import { PiShoppingBagOpenBold } from 'react-icons/pi'
import { turfmanagementdata } from '../../components/Data'
import AddTurf from './AddTurf'
import EditTurf from './EditTurf'
import ViewTurf from './ViewTurf'
import DeleteTurf from './DeleteTurf'






import axios from 'axios'
import { toast } from 'react-toastify'
import { API } from '../../../const'

const TurfManagement = () => {
  
  const [turfs, setTurfs] = useState([]);
    const Columns = [
        { label: "Turf Name", key: "turfname" },
        { label: "Location", key: "location" },
        { label: "Turf Owner", key: "turfowner" },
        { label: "Total Bookings", key: "totalbookings" },
        { label: "Total Revenue", key: "totalrevenue" },
        { label: "Commission Paid", key: "commissionpaid" },
        { label: "Status", key: "status" },
      ];
      const fetchTurfs = async () => {
        try {
          const res = await axios.get(`${API}/turfmanagement/getturfs`);
          setTurfs(res.data.data);
        } catch (error) {
          toast.error("Failed to load turfs");
        }
      };
    
      useEffect(() => {
        fetchTurfs();
      }, []);
    
  return (
    <div>
      <Table title="Turf Management"
      pagetitle="Turf Management"
      addButtonLabel="Add Turf"
      addButtonIcon={<PiShoppingBagOpenBold size={22} />}
      colomns={Columns}
      tabledata={turfs}
      AddModal={(modelprops)=><AddTurf {...modelprops} onclose={()=>{modelprops.onclose(); fetchTurfs();}}/>}
      EditModal={(modelprops) => (
        <EditTurf
          {...modelprops}
          data={modelprops.item}   // pass selected row
          onclose={() => {
            modelprops.onclose();
            fetchTurfs();
          }}
        />
      )}
      routepoint={"viewturf"}
      ViewModel={ViewTurf}
      DeleteModal={DeleteTurf}
      />
      
    </div>
  )
}

export default TurfManagement
