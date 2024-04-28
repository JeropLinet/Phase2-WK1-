import React from "react";

function Transaction({ transactions }) {
 

  //.map hepls us to iterate over the values
  const showTransactions = transactions.map((transactions, index) => (
    <tr key={index}>
      <td>{transactions.date}</td>
      <td>{transactions.description}</td>
      <td>{transactions.category}</td>
      <td>{transactions.amount}</td>
    </tr>
  ));

 

  //rendering the transactions in the table
  return (
    <tbody>
     {showTransactions}
    </tbody>
  )
}

export default Transaction;
