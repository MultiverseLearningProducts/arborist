import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Item = ({items, setItems, item, children, editButton, clickable, user}) => {
  const isOnListPage = !children;
  
  const navigate = useNavigate();

  const showDeleteAndEdit = user && children;

  const handleDelete = async (id) => {
    const newItems = items.filter(item => item.id != id);
    setItems(newItems);
    navigate('/');
  };

  const handleNavigate = () => {

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
      {
        showDeleteAndEdit && <>
          <button className="btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
          {editButton}
        </>
      }
    </div>
    {children}
    <img src={item.image} alt={item.title} />
  </div>
}
	