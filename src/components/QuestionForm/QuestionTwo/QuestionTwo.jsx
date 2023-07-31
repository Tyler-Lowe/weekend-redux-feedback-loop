import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

function QuestionTwo() {
    const [questionTwo, setQuestionTwo] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setQuestionTwo(event.target.value);
      };

      const handleSubmit = (event) => {
        if(!questionTwo) {
            alert('Please make a selection')
        } else {
        const feedback = questionTwo
        dispatch({
          type: 'QUESTION_TWO',
          payload: feedback
        })
        history.push('/question-three')
    }
    }

    return(
       <div>
        <h2>How well are you understanding the content?</h2>
        <div>
            <input min = '1' max = '5' value={questionTwo} onChange={handleChange} type="number" />
            <button onClick={handleSubmit}>Next</button>
        </div>
       </div>
    )
}

export default QuestionTwo;