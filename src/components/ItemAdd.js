import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemForm } from './ItemForm';

export const ItemAdd = ({items, setItems}) => {
  const initialItem = {
    name: '',
    species: '',
    description: '',
    image: ''
  };
  const [item, setItem] = useState(initialItem);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // populate defaults
    item.id = items.length + 1;
    item.image = item.image || 'https://cdn-icons-png.flaticon.com/512/46/46564.png';
    
    setItems([...items, item]);
    navigate('/');
  };

  return <ItemForm
    item={item}
    handleSubmit={handleSubmit}
    setItem={setItem}
    method={'add'}
  />
}
