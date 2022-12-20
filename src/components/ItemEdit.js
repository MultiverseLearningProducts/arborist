import React, {useState} from 'react';
import { ItemForm } from './ItemForm';
import { useNavigate } from 'react-router-dom';

export const ItemEdit = ({item: originalItem, items, setItems, setIsEditing}) => {
  const [item, setItem] = useState(originalItem);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItems = items.map(i => {
      if (i.id === item.id) {
        // replace the old item with the form-edited one
        return item;
      } else {
        return i;
      }
    });
    setItems(newItems);
    navigate('/');
  };

  return <ItemForm
    cancelFunction={setIsEditing}
    item={item}
    handleSubmit={handleSubmit}
    setItem={setItem}
    method={'edit'}
  />
}
	