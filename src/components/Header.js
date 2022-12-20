import React from 'react';
import { AccountBox } from './AccountBox';
import { Link, useLocation } from 'react-router-dom';

export const Header = ({items, user, setUser}) => {

  const { pathname } = useLocation();
  const isAddingItem = pathname.includes('add');

  const buttonAction = isAddingItem ? 'List Trees' : 'Add Tree';
  const buttonNavigation = isAddingItem ? '/' : '/add';
  const showNavButton = user || buttonAction === 'List Trees';
  const centerNavButton = showNavButton && <Link to={buttonNavigation}><button>{buttonAction}</button></Link>

  return <header>
		<h1><Link to="/">Arborist</Link></h1>
    {centerNavButton}
    <div id="account-container">
      <span className="material-icons" id="account">account_circle</span>
      <span>{user ? user.name : 'Sign In'}</span>
    </div>
    <aside>
      <AccountBox user={user} setUser={setUser} items={items}/>
    </aside>
  </header>
}
	