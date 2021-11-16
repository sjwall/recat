import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from './features/home/Home';
import { Upload } from './features/upload/Upload';
import './App.css';
import { PublicOutlet } from './features/auth/PublicOutlet';
import { PrivateOutlet } from './features/auth/PrivateOutlet';
import { Login } from './features/auth/Login';
import { NotFound } from './components/notfound/NotFound';

/**
 * Main application entry component.
 * Handles routing.
 *
 * @returns React component.
 */
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
