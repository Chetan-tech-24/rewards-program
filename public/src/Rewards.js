
jsx
import React from 'react';

function Rewards({ rewards }) {
  return (
    <div>
      <h2>Rewards</h2>
      <ul>
        {Object.keys(rewards).map((customerId) => (
          <li key={customerId}>
            Customer {customerId}: {rewards[customerId]} points
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rewards;
