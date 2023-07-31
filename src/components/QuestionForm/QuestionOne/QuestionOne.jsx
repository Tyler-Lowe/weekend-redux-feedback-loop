import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

function QuestionOne() {
    const [questionOne, setQuestionOne] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setQuestionOne(event.target.value);
      };

    const handleSubmit = (event) => {
        if(!questionOne) {
            alert('Please make a selection')
        } else {
        const feedback = questionOne
        dispatch({
          type: 'QUESTION_ONE',
          payload: feedback
        })
        history.push('/question-two')
    }
    }
 

    return(
       <div>
        <h2>How are you feeling today?</h2>
        <div>
            <input min = '1' max = '5' value={questionOne} onChange={handleChange} type="number" />
            <button onClick={handleSubmit}>Next</button>
        </div>
       </div>
    )
}

export default QuestionOne;