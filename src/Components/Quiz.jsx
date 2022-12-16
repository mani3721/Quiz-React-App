
import React from "react";
import { useState } from "react";
import question from "./QuizQuistions"

function Quiz() {

    const [questionIdx, setQuestionIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const currQuestion = question[questionIdx];
    
    const selectOption = (idx) => {

        if (currQuestion.answer === idx) {
            setScore(score + 1)
        }
        const nextQ = questionIdx + 1;
        if (nextQ < question.length) {

            setQuestionIdx(questionIdx + 1)
        }
        else {
            setShowScore(true)
        }

        // const prevQ = questionIdx -1;
        //  if(prevQ <question.length){
        //     setQuestionIdx(questionIdx-1)
        //  }
       
        
    };
    return (
        <div className="Container">
            {showScore ? <h2>Your Score: {score}</h2> : (
                <div className="Quiz-Top">
                    <h2>{currQuestion.question}</h2>
                    <div className="Quiz-Bottom">
                        <ul>
                            {currQuestion.options.map((Option, i) => {
                                return <li className="" onClick={() => selectOption(i)}>{Option}</li>
                            })}
                                      {/* <button onClick={()=>prevQ()}>Prev Button</button> */}
                        </ul>
                    </div>
                </div>
            )}


        </div>
    )
}

export default Quiz