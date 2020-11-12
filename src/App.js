import React, { useState } from 'react';
import HomePage from './components/HomePage';

import './App.css';

import QuestionPage from './components/QuestionPage';



function App() {

  return (
    <>
      <HomePage />
      <QuestionPage questionNumber="1" />
    </>
  );
}

export default App;
