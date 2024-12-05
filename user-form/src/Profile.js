import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';  // Make sure to import the CSS

function Profile({ firstName, lastName, email, favoriteSeason }) {
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Favorite Season: {favoriteSeason}</p>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}

export default Profile;
