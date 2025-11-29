import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RAccordianCall from '../components/SystemDesign/revise/RAccordianCall';
import RProgressBarMain from '../components/SystemDesign/revise/RProgressBarMain';
import RInputChip from '../components/SystemDesign/revise/RInputChip';
const RoutingRevise = () => {
  return (
      <Routes>
        <Route path="/accordianRevise" element={<RAccordianCall/>} />
        <Route path="/progressBarRevise" element={<RProgressBarMain/>} />
        <Route path="/inputChipRevise" element={<RInputChip/>} />
      </Routes>
  );
};

export default RoutingRevise;
