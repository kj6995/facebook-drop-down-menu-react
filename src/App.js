import React, {useState} from 'react';
import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import {ReactComponent as BellIcon} from './icon/bell.svg';
import {ReactComponent as MessengerIcon} from './icon/messenger.svg';
import {ReactComponent as CaretIcon} from './icon/caret.svg';
import {ReactComponent as PlusIcon} from './icon/plus.svg';
import {ReactComponent as CogIcon} from './icon/cog.svg';
import {ReactComponent as ChevronIcon} from './icon/chevron.svg';
import {ReactComponent as ArrowIcon} from './icon/arrow.svg';
import {ReactComponent as BoltIcon} from './icon/bolt.svg';
import DropdownMenu from './components/DropdownMenu';

function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon /> } />
      <NavItem icon={<BellIcon /> }/>
      <NavItem icon={<MessengerIcon /> }/>
      <NavItem icon={<CaretIcon /> }>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

export default App;
