import React from 'react';

export const ItemForm = ({cancelFunction, item, handleSubmit, setItem, method}) => {
  const {
    name,
    species,
    description,
    image
  } = item;

  const formTitle = method === 'add' ? 'Add Item' : 'Edit Item';


  return <div className="item-container" id="item-add">
    <h3>{formTitle}</h3>
    <form className='form-input-list' onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={name} onChange={(ev) => setItem({...item, name: ev.target.value})}/>
      <label>Species:</label>
      <input type="text" name="species" value={species} onChange={(ev) => setItem({...item, species: ev.target.value})}/>
      <label>Description:</label>
      <textarea name="description" value={description} onChange={(ev) => setItem({...item, description: ev.target.value})}/>
      <label>Image URL:</label>
      <input type="text" name="image" value={image} onChange={(ev) => setItem({...item, image: ev.target.value})}/>
      <span className='options-container'>
        <button type="submit">Submit</button>
        <button className='btn-danger' onClick={() => cancelFunction(false)}>Cancel</button>
      </span>
    </form>
  </div>
}
	