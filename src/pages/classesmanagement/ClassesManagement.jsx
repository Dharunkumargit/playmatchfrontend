import React from 'react'
import Table from '../../components/Table'
import { TbBuildingStore } from 'react-icons/tb'
import { classesmanagementdata } from '../../components/Data';
import AddClass from './AddClass';
import EditClass from './EditClass';
import ViewClasses from './ViewClasses';
import DeleteClasses from './DeleteClasses';

const ClassesManagement = () => {
    const Columns = [
        { label: "Class Name", key: "classname" },
        { label: "Type", key: "type" },
        { label: "Coach", key: "coach" },
        { label: "Price", key: "price" },
        { label: "Total Bookings", key: "totalbookings" },
        { label: "Commission Earned", key: "comminisionearned" },
        { label: "Status", key: "status" },
      ];
  return (
    <div>
      <Table title="Classes Management"
      pagetitle="Classes Management"
      addButtonLabel="Add Class"
      addButtonIcon={<TbBuildingStore size={22} />}
      colomns={Columns}
      tabledata={classesmanagementdata}
      AddModal={AddClass}
      EditModal={EditClass}
      ViewModel={<ViewClasses />}
      DeleteModal={DeleteClasses}
      routepoint="viewclassesmanagement"/>
    </div>
  )
}

export default ClassesManagement
