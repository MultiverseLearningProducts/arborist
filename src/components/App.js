import React, { useState, useEffect } from 'react';
import { ItemSingle } from './ItemSingle';
import { ItemsList } from './ItemsList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import trees from '../trees';
import { ItemAdd } from './ItemAdd';

export const App = () => {

	const [items, setItems] = useState(trees);
	const [isAddingItem, setIsAddingItem] = useState(false);

	return (
		<Router>
			<main>	
				<h1>Arborist</h1>
				<h2>Select your tree</h2>
				<button className={isAddingItem ? 'btn-danger' : ''} onClick={() => setIsAddingItem(!isAddingItem)}>{isAddingItem ? 'Cancel' : 'Add Item'}</button>
				{ isAddingItem && <ItemAdd setIsAddingItem={setIsAddingItem}/> }
				<Routes>
					<Route path="/" element={<ItemsList items={items} />} />
          <Route path="/trees/:id" element={<ItemSingle items={items}/>} />
				</Routes>
			</main>
		</Router>
	)
}