import React from 'react'
import JunkeywardsAndRecords from './JunkeywardsAndRecords/JunkeywardsAndRecords';
import WithdrawHistory from './WidthdrawHistory/WithdrawHistory';
import Ad from './Ad/Ad';

const SideContent = () => {
  return (
    <>
        <WithdrawHistory/>
        <JunkeywardsAndRecords/>
        <Ad/>
    </>
  )
}

export default SideContent