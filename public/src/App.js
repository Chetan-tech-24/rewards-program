
jsx
import React, { useState, useEffect } from 'react';
import Transactions from './Transactions';
import Rewards from './Rewards';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [rewards, setRewards] = useState({});

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const response = await fetch('transactions.json');
    const data = await response.json();
    setTransactions(data);
  };

  const calculateRewards = (customerId) => {
    const customerTransactions = transactions.find((customer) => customer.customerId === customerId).transactions;
    let points = 0;
    customerTransactions.forEach((transaction) => {
      if (transaction.amount > 100) {
        points += (transaction.amount - 100) * 2 + 50;
      } else if (transaction.amount >= 50) {
        points += transaction.amount - 50;
      }
    });
    setRewards((prevRewards) => ({ ...prevRewards, [customerId]: points }));
  };

  return (
    <div>
      <h1>Rewards Program</h1>
      <Transactions transactions={transactions} calculateRewards={calculateRewards} />
      <Rewards rewards={rewards} />
    </div>
  );
}

export default App;
