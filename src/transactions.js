import React from "react";

function Transaction({ transactions }) {
  const sampleTransactions = [
    { date: "2019-08-07", description: "Movies", category: "Entertainment", amount: -89 },
    { date: "2019-07-07", description: "Chipotle", category: "Food", amount: 200 },
    { date: "2017-08-07", description: "Paycheck from Bob's Burgers", category: "Income", amount: 1000 }
  ];

  //.map hepls us to iterate over the values
  const showTransactions = transactions.map((item, index) => (
    <tr key={index}>
      <td>{item.date}</td>
      <td>{item.description}</td>
      <td>{item.category}</td>
      <td>{item.amount}</td>
    </tr>
  ));

  const showSampleTransactions = sampleTransactions.map((item, index) => (
    <tr key={index}>
      <td>{item.date}</td>
      <td>{item.description}</td>
      <td>{item.category}</td>
      <td>{item.amount}</td>
    </tr>
  ));

  //rendering the sample and the new transactions in the table
  return (
    
    <tbody>
      {showSampleTransactions}
      {showTransactions}
    </tbody>
  );
}

export default Transaction;
