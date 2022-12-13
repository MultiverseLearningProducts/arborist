import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Item = ({item, children, editButton}) => {
  const isOnListPage = !children;
  
  const navigate = useNavigate();

  const handleDelete = async () => {
    console.log('delete', item)
  };

  const handleNavigate = () => {
    console.log('handleNavigate')

    if (isOnListPage) {
      navigate(`trees/${item.id}`);
    } else {
      navigate('/');
    }
  };

  return <div className="item-container">
    <h3>{item.name}</h3>
    <div className="price-box">
      <button onClick={handleNavigate}>{children ? '< Back' : 'Details'}</button>
      {children && <button className="btn-danger" onClick={handleDelete}>Delete</button> }
      {editButton}
    </div>
    {children}
    <img src={item.image} alt={item.title} />
  </div>
}
	