import React, { useEffect, useState } from 'react'
import Table from '../../components/Table'
import { TbBuildingStore, TbPlayFootball } from 'react-icons/tb'
import { playerdata } from '../../components/Data'
import AddPlayer from './AddPlayer'
import EditPlayer from './EditPlayer'
import ViewPlayer from './ViewPlayer'
import { API } from '../../../const'
import axios from 'axios'

const Player = () => {
  const [players, setPlayers] = useState([]);

  const fetchPlayers = async () => {
    const res = await axios.get(`${API}/playermanagement/getplayers`);
    setPlayers(res.data.data);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);
    const Columns = [
        { label: "Booking ID", key: "bookingid" },
        { label: "Player Name", key: "playername" },
        { label: "Total Bookings", key: "totalbookings" },
        { label: "Last Booking", key: "lastbookings" },
        { label: "Membership", key: "membership" },
        { label: "Total Spend", key: "totalspend" },
        { label: "Status", key: "status" },
    ]
  return (
    <div>
        <Table title="Player"
      pagetitle="Player"
      sub_title="Table"
      addButtonLabel="Add Player"
      addButtonIcon={<TbPlayFootball size={22} />}
      colomns={Columns} 
      tabledata={players}
      showdeleteButton={false}
      AddModal={(props) => (
        <AddPlayer {...props} refresh={fetchPlayers} />
      )}
      EditModal={EditPlayer}
      ViewModel={true}
      routepoint="viewplayer"
      />
    </div>
  )
}

export default Player