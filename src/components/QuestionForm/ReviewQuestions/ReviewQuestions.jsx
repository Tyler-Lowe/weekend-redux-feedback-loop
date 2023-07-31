import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";



function ReviewQuestions() {
    const store = useSelector(store => store);
    console.log('does this show me whats in my store?',store);
    return(
        <>
    <h2>Review Your Feedback:</h2>
      <p>Feeling: {store.QuestionOneAnswer} </p>
      <p>Understanding: {store.QuestionTwoAnswer} </p>
      <p>Supported: {store.QuestionThreeAnswer}</p>
      <p>Comments: {store.QuestionFourAnswer}</p>
        </>
    )
}

export default ReviewQuestions;