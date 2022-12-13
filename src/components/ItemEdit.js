import React, {useState} from 'react';
import { ItemForm } from './ItemForm';

export const ItemEdit = ({item: originalItem, setIsEditing}) => {
  const [item, setItem] = useState(originalItem);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit', item);
  };

  return <ItemForm
    cancelFunction={setIsEditing}
    item={item}
    handleSubmit={handleSubmit}
    setItem={setItem}
    method={'edit'}
  />
}
	