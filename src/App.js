import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CalculatorPage from './components/CalculatorPage';
import QuotesPage from './components/QuotesPage';

const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quotes" element={<QuotesPage />} />
    </Routes>
  </>
);

export default App;
