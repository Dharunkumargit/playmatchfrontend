import React from 'react'
import Table from '../../components/Table'
import { offermanagementdata } from '../../components/Data';
import EditOfferManagement from './EditOfferManagement';

const OffersManagement = () => {
    const Columns = [
        { label: "Offer Name", key: "offername" },
        { label: "Code", key: "code" },
        { label: "Type", key: "type" },
        { label: "Discount value", key: "discountvalue" },
        { label: "Applied To", key: "appliedto" },
        { label: "Validity", key: "validity" },
        { label: "Status", key: "status" },
      ];
  return (
    <div>
      <Table title="Offers Management"
      pagetitle="Offers Management"
      colomns={Columns} 
      tabledata={offermanagementdata}
      showviewButton={false}
      EditModal={EditOfferManagement}/>
    </div>
  )
}

export default OffersManagement
