import React, { useEffect, useState } from 'react'
import Table from '../../../components/Table'
import { RiUserAddLine } from 'react-icons/ri'
import { userssdata } from '../../../components/Data';
import AddUser from './AddUser';
import EditUser from './EditUser';
import { API } from '../../../../const';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const Columns = [
    { label: " User Name", key: "username" },
    { label: "Roles", key: "roles" },
    { label: "Phone Number", key: "phonenumber" },
    { label: "Email ID", key: "emailid" },
    { label: "Status", key: "status" },
    { label: "Created By", key: "createdby" },
    
  ];
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API}/user/getuser`);
      setUsers(response.data.data);
    } catch (error) {
      console.log("Error loading users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <Table title="Settings" sub_title="Users" pagetitle="Users"
      addButtonIcon={<RiUserAddLine size={22} />}
      addButtonLabel="Add User"
     colomns={Columns}
     tabledata={users} 
     showviewButton={false}
     AddModal={(modalProps) => <AddUser {...modalProps} onclose={() => {
      modalProps.onclose();
      fetchUsers(); // Refresh on close
    }} />}
     EditModal={true}
     editroutepoint={"edituser"}/>
    </div>
  )
}
export default Users
