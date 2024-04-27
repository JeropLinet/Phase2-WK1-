import React from "react";

function Transaction() {
    let items = [
        { date: "2019-08-07", description: "Movies", category: "Entertainment", amount: -89 },
        { date: "2019-07-07", description: "Chipotle", category: "Food", amount: 200 },
        { date: "2017-08-07", description: "Paycheck from Bob's Burgers", category: "Income", amount: 1000 }
    ];
  //the variable below iterates over the items above
    const renderTransactions = items.map((item, index) => (
  //the unique key applies to every item to uniquely identify them
        <tr key={index}> 
            <td>{item.date}</td>
            <td>{item.description}</td>
            <td>{item.category}</td>
            <td>{item.amount}</td>
        </tr>
    ));

    return (
        <tbody>
            {renderTransactions}
        </tbody>
    );
}

export default Transaction;
