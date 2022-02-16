import React, { useState } from 'react';
import './assets/style.css'
import { Navigation } from './Components/Navigation';
import { SideMenu } from './Components/SideMenu';

function App() {
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false)
  return (
    <div className='relative'>
      {showSideMenu && <SideMenu />}
      <Navigation showSideMenu={() => setShowSideMenu(true)} />
    </div>
  );
}

export default App;
