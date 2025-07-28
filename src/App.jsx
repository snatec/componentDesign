import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import AutoCompleteSearch from './components/SystemDesign/AutoCompleteSearch/AutoCompleteSearch';
import TabForm from './components/SystemDesign/TabForm/TabForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/autosearch" element={<AutoCompleteSearch />} />
        <Route path="/tabForm" element={<TabForm />} />
      </Routes>
    </Router>
  );
};

export default App;
