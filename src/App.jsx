import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import AutoCompleteSearch from './components/SystemDesign/AutoCompleteSearch/AutoCompleteSearch';
import TabForm from './components/SystemDesign/TabForm/TabForm';
import ProgressBarMain from './components/SystemDesign/ProgressBar/ProgressBarMain';
import InputChip from './components/SystemDesign/InputChip/InputChip';
import AccordianMain from './components/SystemDesign/Accordion/AccordianMain';
import TodoList from './components/SystemDesign/TodoList/TodoList';
import PaginationMain from './components/SystemDesign/PaginationMain/PaginationMain';
import OtpInput from './components/SystemDesign/OtpInput/OtpInput';
import Filters from './components/SystemDesign/Filters/Filters';
import Carousel from './components/SystemDesign/Carousel/Carousel';

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
        <Route path="/pagination" element={<PaginationMain/>} />
        <Route path="/otpInput" element={<OtpInput/>} />
        <Route path="/filters" element={<Filters/>} />
        <Route path="/carousel" element={<Carousel/>} />
      </Routes>
    </Router>
  );
};

export default App;
