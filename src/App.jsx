import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import AutoCompleteSearch from './components/SystemDesign/AutoCompleteSearch/AutoCompleteSearch';
import TabForm from './components/SystemDesign/TabForm/TabForm';
import ProgressBarMain from './components/SystemDesign/ProgressBar/ProgressBarMain';
import InputChip from './components/SystemDesign/InputChip/InputChip';
import AccordianMain from './components/SystemDesign/Accordion/AccordianMain';
import TodoList from './components/SystemDesign/TodoList/TodoList';
import Pagination from './components/SystemDesign/Pagination/Pagination';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/autosearch" element={<AutoCompleteSearch />} />
        <Route path="/tabForm" element={<TabForm />} />
        <Route path="/progressBar" element={<ProgressBarMain/>} />
        <Route path="/inputChip" element={<InputChip/>} />
        <Route path="/accordian" element={<AccordianMain/>} />
        <Route path="/todoList" element={<TodoList/>} />
        <Route path="/pagination" element={<Pagination/>} />
      </Routes>
    </Router>
  );
};

export default App;
