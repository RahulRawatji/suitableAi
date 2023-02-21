import './App.css';
import { useState } from 'react';

import HeaderContainer from './components/HeaderContainer';
import UserTableBody from './components/UserTableBody';
import UserTableHead from './components/UserTableHead';

function App() {

  const [searchText, setSearchText] = useState("");
  
  return (
    <div className='App'>
      <HeaderContainer setSearchText={setSearchText} searchText={searchText}/>
      <div className='body_container'>
        <UserTableHead/>
        <UserTableBody searchText={searchText}/>
      </div>
    </div>
  )
}

export default App
