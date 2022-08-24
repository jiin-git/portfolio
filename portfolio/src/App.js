import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './index.css';
import Main from './components/main';
import ThanksFor from './components/footer/thanksfor';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/thanksfor" element={<ThanksFor/>}/>
    </Routes>
  );
}

export default App;
