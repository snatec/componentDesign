import { BrowserRouter } from "react-router-dom";
import React from 'react';
import RoutingRevise from "./routes/RoutingRevise";
import RoutingDashboard from './routes/RoutingDashboard';

export default function App() {
  return (
     <BrowserRouter>
      <RoutingDashboard />
      <RoutingRevise />
    </BrowserRouter>
  );
}
