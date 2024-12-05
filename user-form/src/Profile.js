import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ firstName, lastName, email, favoriteSeason }) => {
  return (
    <div>
      <h1>Profile Page</h1>
      <p><strong>First Name:</strong> {firstName}</p>
      <p><strong>Last Name:</strong> {lastName}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Favorite Season:</strong> {favoriteSeason}</p>
      {/* Link back to the home page */}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Profile;
