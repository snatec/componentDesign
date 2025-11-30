import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RAccordianCall from '../components/SystemDesign/revise/RAccordianCall';
import RProgressBarMain from '../components/SystemDesign/revise/RProgressBarMain';
import RInputChip from '../components/SystemDesign/revise/RInputChip';
import RTodolist from '../components/SystemDesign/revise/RTodolist';
import RModal from '../components/SystemDesign/revise/RModal';
import RCarosoul from '../components/SystemDesign/revise/RCarosoul';
import RInfiniteScroll from '../components/SystemDesign/revise/RInfiniteScroll';
import RFilters from '../components/SystemDesign/revise/RFilters';

const RoutingRevise = () => {
  return (
      <Routes>
        <Route path="/accordianRevise" element={<RAccordianCall/>} />
        <Route path="/progressBarRevise" element={<RProgressBarMain/>} />
        <Route path="/inputChipRevise" element={<RInputChip/>} />
        <Route path="/todolistRevise" element={<RTodolist/>} />
        <Route path="/modalRevise" element={<RModal/>} />
        <Route path="/carosoulRevise" element={<RCarosoul/>} />
        <Route path="/infinteScrollRevise" element={<RInfiniteScroll/>} />
        <Route path="/filtersRevise" element={<RFilters/>} />
        <Route path="/autoSearchRevise" element={<RAutoSearch/>} />
      </Routes>
  );
};

export default RoutingRevise;
