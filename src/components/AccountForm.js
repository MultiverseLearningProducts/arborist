import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AccountForm = ({setUser}) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password) {
      alert('Please enter a username and password');
    } else {
      setUser({ name, password });
      navigate('/');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="item-container" >
      <label htmlFor="name">Username</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="options-container">
        <button type="submit">Log In</button>
      </div>
    </form>
  );
}
