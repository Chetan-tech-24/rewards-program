
jsx
import React from 'react';

function Transactions({ transactions, calculateRewards }) {
  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((customer) => (
          <li key={customer.customerId}>
            <h3>Customer {customer.customerId}</h3>
            <ul>
              {customer.transactions.map((transaction) => (
                <li key={transaction.date}>
                  {transaction.date}: ${transaction.amount}
                </li>
              ))}
            </ul>
            <button onClick={() => calculateRewards(customer.customerId)}>Calculate Rewards</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
