import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/style.css'

import { Homepage } from './Pages/Index';




function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/about" element={<p>Hello world</p>} /> */}
    </Routes>
  );
}

export default App;
