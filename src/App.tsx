import React from 'react';
import logo from './img/4etFinderLogo.png';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
