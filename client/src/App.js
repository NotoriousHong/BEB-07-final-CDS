// module
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

// components
import Header from './components/Header';

// pages
import MakeTest from './pages/MakeTest';
import AcceptTest from './pages/AcceptTest';
import Main from './pages/Main';

// css
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="" element={<MakeTest />} />
        <Route path="/acceptTest/:swapId" element={<AcceptTest />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
