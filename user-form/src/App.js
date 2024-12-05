import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Profile from './Profile';
import Dashboard from './Dashboard';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    favoriteSeason: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    favoriteSeason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = { ...errors };
    let isValid = true;

    // First Name Validation
    if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      formErrors.firstName = 'First name should contain only alphabets.';
      isValid = false;
    } else {
      formErrors.firstName = '';
    }

    // Last Name Validation
    if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      formErrors.lastName = 'Last name should contain only alphabets.';
      isValid = false;
    } else {
      formErrors.lastName = '';
    }

    // Email Validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email must be a valid format.';
      isValid = false;
    } else {
      formErrors.email = '';
    }

    // Password Validation
    if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z])/.test(formData.password)) {
      formErrors.password = 'Password must contain at least 1 letter, 1 number, 1 special character, and 1 uppercase letter.';
      isValid = false;
    } else {
      formErrors.password = '';
    }

    // Favorite Season Validation
    if (!formData.favoriteSeason) {
      formErrors.favoriteSeason = 'Please select a favorite season.';
      isValid = false;
    } else {
      formErrors.favoriteSeason = '';
    }

    setErrors(formErrors);

    if (isValid) {
      // Route to Profile page if valid
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        favoriteSeason: '',
      });
    }
  };

  return (
    <Router>
      <div className="App">
        <h1>React Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <div>{errors.firstName}</div>

          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <div>{errors.lastName}</div>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <div>{errors.email}</div>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <div>{errors.password}</div>

          <select
            name="favoriteSeason"
            value={formData.favoriteSeason}
            onChange={handleChange}
          >
            <option value="">Favorite Season</option>
            <option value="Spring">Spring</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
          </select>
          <div>{errors.favoriteSeason}</div>

          <button type="submit">Submit</button>
        </form>

        {Object.values(errors).every((error) => !error) && (
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Profile
                  firstName={formData.firstName}
                  lastName={formData.lastName}
                  email={formData.email}
                  favoriteSeason={formData.favoriteSeason}
                />
              )}
            />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;



