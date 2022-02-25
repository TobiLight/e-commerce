import React, { useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/style.css'
import { Navigation } from './Components/Navigation';
import { SideMenu } from './Components/SideMenu';
import { useClickOutside } from './Hooks/useClickOutside';
import { Homepage } from './Pages/Index';

const mountedStyle = {
  backgroundColor: '#000000a1',
  animation: "inAnimation 250ms ease-in"
};
const unmountedStyle = {
  animation: "outAnimation 270ms ease-out",
  animationFillMode: 'forwards'
};

function App() {
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false)
  const ref = useRef(null)
  useClickOutside({ ref, handler: () => { setShowSideMenu(false) } })

  return (
    <div className="app min-h-screen h-full relative">
      <Navigation showSideMenu={() => setShowSideMenu(true)} />
      <div id="sidemenu" style={showSideMenu ? mountedStyle : unmountedStyle} ref={ref} className={'sidebar w-full min-h-screen h-full top-0 fixed overflow-x-hidden'}>
        <SideMenu isOpen={showSideMenu} closeSideMenu={() => setShowSideMenu(false)} />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/about" element={<p>Hello world</p>} /> */}
      </Routes>
    </div>
  );
}

export default App;
