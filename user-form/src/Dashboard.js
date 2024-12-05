import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Here is some dummy data for the Dashboard page:</p>
      <ul>
        <li>Task 1: Complete React Lab</li>
        <li>Task 2: Review React Router</li>
        <li>Task 3: Refactor code</li>
      </ul>
       {/* Link back to the home page */}
       <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Dashboard;
