import React from 'react';
import './App.css';
import { BrowserRouter as Router, } from "react-router-dom";
import ApplicationRoutes from './router/ApplicationRoutes'

function App() {
  return (
    <Router>
      <ApplicationRoutes />
    </Router>
  );
}

export default App;
