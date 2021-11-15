import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from './features/home/Home';
import { Upload } from './features/upload/Upload';
import './App.css';
import { PublicOutlet } from './features/auth/PublicOutlet';
import { PrivateOutlet } from './features/auth/PrivateOutlet';
import { Login } from './features/auth/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateOutlet />}>
          <Route path="/" element={<Home />} />
          <Route path="upload" element={<Upload />} />
        </Route>
        <Route element={<PublicOutlet />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
