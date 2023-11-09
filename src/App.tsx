import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homescreen } from './screens/Index';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Homescreen/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
