import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import AutoCompleteSearch from './components/SystemDesign/AutoCompleteSearch/AutoCompleteSearch';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Load from localStorage on first render
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  // When login status changes, update localStorage
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
  }, [isLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/autosearch" /> : <Login onLogin={() => setIsLoggedIn(true)} />
          }
        />
        <Route
          path="/weather"
          element={
            isLoggedIn ? <AutoCompleteSearch /> : <Navigate to="/" />
          }
        />
        <Route 
          path="/autosearch"
          element={<AutoCompleteSearch />}
        />
      </Routes>
    </Router>
  );
};

export default App;
