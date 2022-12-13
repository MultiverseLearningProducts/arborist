import React, {useState} from 'react';
import { ItemForm } from './ItemForm';

export const ItemAdd = ({setIsAddingItem}) => {
  const initialItem = {
    name: '',
    species: '',
    description: '',
    image: ''
  };
  const [item, setItem] = useState(initialItem);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit', item);
  };

  return <ItemForm
    cancelFunction={setIsAddingItem}
    item={item}
    handleSubmit={handleSubmit}
    setItem={setItem}
    method={'add'}
  />
}
	