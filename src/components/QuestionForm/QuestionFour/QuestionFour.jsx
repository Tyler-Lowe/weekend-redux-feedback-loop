import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

function QuestionFour() {
    const [questionFour, setQuestionFour] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setQuestionFour(event.target.value);
      };

    const handleSubmit = (event) => {
        const feedback = questionFour
        dispatch({
          type: 'QUESTION_FOUR',
          payload: feedback
        })
        history.push('/question-five')
    }

    return(
       <div>
        <h2>How well are you understanding the content?</h2>
        <div>
            <input value={questionFour} onChange={handleChange} type="text" />
            <button onClick={handleSubmit}>Next</button>
        </div>
       </div>
    )
}

export default QuestionFour;