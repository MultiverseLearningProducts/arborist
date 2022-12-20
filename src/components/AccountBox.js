import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AccountBox = ({user, setUser, items}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return <div className="account-box">
    {
      ! user
        ? <>
            <button onClick={() => navigate('/login')}>Log In</button>
        </>
        : <>
          <div>Welcome, {user.name}</div>
          <div>You have {items.length} items listed</div>
          <button onClick={handleLogout}>Log Out</button>
        </>
    }
  </div>
}
