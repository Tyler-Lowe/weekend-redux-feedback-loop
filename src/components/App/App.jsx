import React from 'react';
import axios from 'axios';
import './App.css';
import { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import '../QuestionForm/QuestionOne/QuestionOne.jsx'
import '../QuestionForm/QuestionTwo/QuestionTwo.jsx'
import '../QuestionForm/QuestionThree/QuestionThree.jsx'
import '../QuestionForm/QuestionFour/QuestionFour.jsx'
import '../QuestionForm/ReviewQuestions/ReviewQuestions.jsx'
import QuestionOne from '../QuestionForm/QuestionOne/QuestionOne.jsx';
import QuestionTwo from '../QuestionForm/QuestionTwo/QuestionTwo.jsx';
import QuestionThree from '../QuestionForm/QuestionThree/QuestionThree.jsx';
import QuestionFour from '../QuestionForm/QuestionFour/QuestionFour.jsx';
import ReviewQuestions from '../QuestionForm/ReviewQuestions/ReviewQuestions.jsx';

function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
    <div>
      <Route exact path="/" component={QuestionOne} />
      <Route exact path="/question-two" component={QuestionTwo} />
      <Route exact path="/question-three" component={QuestionThree} />
      <Route exact path="/question-four" component={QuestionFour} />
      <Route exact path="/question-five" component={ReviewQuestions} />
    </div>
    </Router>
  );
}

export default App;
