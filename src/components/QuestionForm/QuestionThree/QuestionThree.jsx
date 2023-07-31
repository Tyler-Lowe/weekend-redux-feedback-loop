import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

function QuestionThree() {
    const [questionThree, setQuestionThree] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setQuestionThree(event.target.value);
      };

    const handleSubmit = (event) => {
      if(!questionThree) {
        alert('Please make a selection')
    } else {
        const feedback = questionThree
        dispatch({
          type: 'QUESTION_THREE',
          payload: feedback
        })
        history.push('/question-four')
      }
    }

    return(
       <div>
        <h2>How well are you being supported?</h2>
        <div>
            <input min = '1' max = '5' value={questionThree} onChange={handleChange} type="number" />
            <button onClick={handleSubmit}>Next</button>
        </div>
       </div>
    )
}

export default QuestionThree;