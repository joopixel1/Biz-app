import React from 'react';

const Signup = () => {
  return (
    <div>
      <h2>Signup</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" required />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" name="confirmPassword" required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;