import React, {useState} from 'react';
import { Item } from './Item';
import { ItemEdit } from './ItemEdit';
import { useParams } from 'react-router-dom';

export const ItemSingle = ({items, setItems}) => {
  const [isEditing, setIsEditing] = useState(false);

  const { id } = useParams();
  const item = items.find(item => item.id == id);

  const editButton = isEditing
    ? <button className="btn-danger" onClick={() => setIsEditing(false)}>Cancel</button>
    : <button onClick={() => setIsEditing(true)}>Edit</button>
  
  

  return <>
    {
      isEditing
        ? <ItemEdit item={item} setIsEditing={setIsEditing}/>
        : null
    }
    <Item item={item} editButton={editButton} items={items} setItems={setItems}>
      <h3>Species: {item.species}</h3>
      <div>{item.description}</div>
    </Item>
  </>
}
	