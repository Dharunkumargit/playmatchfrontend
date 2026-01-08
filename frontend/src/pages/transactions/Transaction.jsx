import React from 'react'
import Table from '../../components/Table'
import { transactiondata } from '../../components/Data';
import ViewTransaction from './ViewTransaction';

const Transaction = () => {
    const Columns = [
        { label: "Transaction ID", key: "transactionid" },
        { label: "Type", key: "type" },
        { label: "User/Coach/Class", key: "user" },
        { label: "Amount", key: "amount" },
        { label: "Date & Time", key: "dateandtime" },
        { label: "Mode", key: "mode" },
        { label: "Status", key: "status" },
      ];
  return (
    <div>
      <Table title="Transactions"
      pagetitle="Transactions"
      colomns={Columns}
      tabledata={transactiondata}
      showEditButton={false}
      showdeleteButton={false}
      routepoint={"viewtransactions"}
     ViewModel={ViewTransaction}/>
    </div>
  )
}

export default Transaction
