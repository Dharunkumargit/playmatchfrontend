import React from 'react'
import Title from '../../components/Title';

import { useLocation } from 'react-router';
import Table from '../../components/Table';

const ViewTransaction = () => {
  const { state } = useLocation();
  const user = state?.item;
  
 

 
  if (!user) {
    return <p className="p-4"> No user data found.</p>;
  }

  const mainFields = [
    { label: "Transaction ID", value: user.transactionid },
    { label: "Type", value: user.type },
    { label: "User/Coach/Class", value: user.user },
    { label: "Amount", value: user.amount },
    { label: "Date & Time", value: user.dateandtime },
    { label: "Status", value: user.status },
  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        <Title title="Transaction" active_title="Transaction" />
        
      </div>

      <div className="bg-white p-4 rounded-lg space-y-2 text-sm mt-3 mr-4">
        <p className="font-semibold text-center text-lg">Transactions</p>
        <div className="grid grid-cols-12 gap-1.5 items-start mt-3">
          {mainFields.map((field, idx) => (
            <React.Fragment key={idx}>
              <p className="col-span-5 font-medium">{field.label}</p>
              <div className="col-span-7">
                <span
                  className={`text-sm text-gray-500 ${
                    field.label === "User/Coach/Class"
                      ? "text-green-600 font-medium"
                      : "text-red-600"
                  }text-black`}
                >
                  {field.value}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ViewTransaction
