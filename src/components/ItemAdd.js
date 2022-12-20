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
