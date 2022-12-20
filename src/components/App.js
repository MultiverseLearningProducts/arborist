import React, { useState } from 'react';
import { ItemSingle } from './ItemSingle';
import { ItemsList } from './ItemsList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import trees from '../trees';
import { ItemAdd } from './ItemAdd';
import { Header } from './Header';
import { AccountForm } from './AccountForm';

export const App = () => {

	const [items, setItems] = useState(trees);
	const [user, setUser] = useState(undefined);

	return (
		<Router>
			<main>	
				<Header items={items} user={user} setUser={setUser}/>
				<Routes>
					<Route path="/" element={<ItemsList items={items} />} />
					<Route path="/add" element={<ItemAdd/>} />
          <Route path="/trees/:id" element={<ItemSingle items={items} setItems={setItems} user={user}/>} />
					<Route path="/login" element={<AccountForm user={user} setUser={setUser} />} />
				</Routes>
			</main>
		</Router>
	)
}