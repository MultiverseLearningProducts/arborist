import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Item = ({item, children, editButton, clickable}) => {
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

  return <div className="item-container" onClick={clickable ? handleNavigate : null}>
    <h3>{item.name}</h3>
    <div className="price-box">
      <button onClick={handleNavigate}>{children ? '< Tree List' : 'Details'}</button>
      {children && <button className="btn-danger" onClick={handleDelete}>Delete</button> }
      {editButton}
    </div>
    {children}
    <img src={item.image} alt={item.title} />
  </div>
}
	