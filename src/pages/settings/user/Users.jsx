import React from 'react'
import Table from '../../../components/Table'
import { RiUserAddLine } from 'react-icons/ri'
import { userssdata } from '../../../components/Data';
import AddUser from './AddUser';
import EditUser from './EditUser';

const Users = () => {
  const Columns = [
    { label: " Name", key: "name" },
    { label: "Roles", key: "roles" },
    { label: "Phone Number", key: "phonenumber" },
    { label: "Email", key: "email" },
    { label: "Status", key: "status" },
    { label: "Created By", key: "createdby" },
    
  ];
  return (
    <div>
      <Table title="Settings" sub_title="Users" pagetitle="Users"
      addButtonIcon={<RiUserAddLine size={22} />}
      addButtonLabel="Add User"
     colomns={Columns}
     tabledata={userssdata} 
     showviewButton={false}
     AddModal={AddUser}
     EditModal={true}
     editroutepoint={"edituser"}/>
    </div>
  )
}
export default Users
