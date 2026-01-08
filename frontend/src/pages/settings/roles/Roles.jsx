import React from 'react'
import Table from '../../../components/Table'
import { GrGroup } from 'react-icons/gr'
import { rolesdata } from '../../../components/Data';

const Roles = () => {
    const Columns = [
        { label: " Name", key: "name" },
        { label: "Roles", key: "roles" },
        
        { label: "Created By", key: "createdby" },
        
      ];
  return (
    <div>
      <Table title="Settings" sub_title="Roles" pagetitle="Roles"
      addButtonLabel="Add Role"
      addButtonIcon={<GrGroup size={22} />}
     colomns={Columns} tabledata={rolesdata}
     showviewButton={false}
     EditModal={true}
     editroutepoint={"editroles"} />
    </div>
  )
}

export default Roles
