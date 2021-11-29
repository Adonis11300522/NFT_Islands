import React from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contactpage from '../pages/Contactpage';
import Homepage from '../pages/Homepage';
import Termspage from '../pages/Termspage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/Contact" element={<Contactpage />} />
          <Route exact path="/Terms" element={<Termspage />} />
        </Routes>
      </div>
    </Router>

  );
}


export default App;
