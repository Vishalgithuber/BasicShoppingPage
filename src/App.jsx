import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart'; // Import Cart from the correct location
import { Routes, Route } from 'react-router-dom';
// this is the basic structure of the part of any website 
const App = () => {
  return (
    <div>
      <div className='bg-slate-900'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
