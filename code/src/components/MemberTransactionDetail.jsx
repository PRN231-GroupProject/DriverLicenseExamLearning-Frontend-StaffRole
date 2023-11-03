import React, { useState } from 'react'

function MemberTransactionDetail(props) {

  console.log(props.transaction)
  const [transactionList, setTransactionList] = useState(props.transaction.data)
  console.log(transactionList.data)
  return (
    <>
      {transactionList.map((transaction) => (
        <div key={transaction.transactionId}>
          <h3>Transaction ID : {transaction.transactionId}</h3>
          <h3>Total : {transaction.total}</h3>
          <h3> Status: {transaction.status}</h3>
          <h3> Transaction Type: {transaction.transactionType}</h3>
        <h3>+++++++++++++++++++++</h3>
        </div>
      ))}
    </>
  )

}

export default MemberTransactionDetail