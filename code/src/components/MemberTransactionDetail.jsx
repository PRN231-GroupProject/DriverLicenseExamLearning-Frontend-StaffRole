import React, { useState } from 'react'

function MemberTransactionDetail(props) {

  console.log(props.transaction)
  const [transactionList, setTransactionList] = useState(props.transaction.data)
  console.log(transactionList.data)
  return (
    <>
      {transactionList.map((transaction) => (
        <div className='text-2xl' key={transaction.transactionId}>
          <h3 className='text-2xl'>Transaction ID : {transaction.transactionId}</h3>
          <h3 className='text-2xl'>Total : {transaction.total}</h3>
          <h3 className='text-2xl'> Status: {transaction.status}</h3>
          <h3 className='text-2xl'> Transaction Type: {transaction.transactionType}</h3>
          <h2>++++++++++++++++++++++</h2>
        </div>
      ))}
    </>
  )

}

export default MemberTransactionDetail