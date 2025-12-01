import React from 'react'
import Table from '../../components/Table'
import { walletandrewardsdata } from '../../components/Data';

const WalletandRewards = () => {
    const Columns = [
        { label: "User Name", key: "username" },
        { label: "Wallet Balance", key: "walletbalance" },
        { label: "Reward Points", key: "rewardpoints" },
        { label: "Last Transaction", key: "lasttransaction" },
        
      ];
  return (
    <div>
      <Table title="Wallet & Rewards" 
      pagetitle="Wallet & Rewards"
      colomns={Columns}
      tabledata={walletandrewardsdata}
      customActionType="wallet"/>
    </div>
  )
}

export default WalletandRewards
