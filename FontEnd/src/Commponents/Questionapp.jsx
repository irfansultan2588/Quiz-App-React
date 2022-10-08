import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

const Questionapp = () => {

    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setshowScore] = useState(false);
    const [questions, setQuestions] = useState([])


    const handlerAnswer = (isCorrect) => {
        if (isCorrect) {

            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setcurrentQuestion(nextQuestion);


            setshowScore(true);
        }

    }
    const fetchQuestions = async () => {
        let baseUrl = "http://localhost:5001";
        try {
            const response = await axios.get(`${baseUrl}/home`);
            console.log("response", response)
            if (response.status === 200) {
                console.log(response.data)
                setQuestions(
                    [...response.data])
            } else {
                console.log("response: ", response.data);
            }
        } catch (e) {
            console.log("Error in api", e);
        }
    }

    useEffect(() => {
        fetchQuestions()
    }, [])

    const resetQuiz = () => {
        setcurrentQuestion(0);
        setScore(0);
        setshowScore(false);

    }




    return (
        <>

            {showScore ? (
                <div>
                    <div className='scoer'>
                        <h2>You Have Scored {score} Out of {questions.length}
                        </h2>
                    </div>
                    <div className="line"><span className='spn'></span></div>
                    <div className='play_btn'>
                        <div className='btn2'>
                            <button onClick={resetQuiz}>Play Again</button>
                        </div>

                    </div>
                </div>
            ) : questions.length > 0 ? (


                <div className='question_main'>

                    <div className="question_number">
                        <span>{currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className='question'>
                        <div className="question_text">
                            <h1 className='hading'> {questions[currentQuestion].Question}</h1>
                        </div>
                    </div>

                    <div className='answer'>
                        {questions[currentQuestion].AnswerText.map((Answer) =>
                        (
                            <div className="btn">

                                <button onClick={() => handlerAnswer(Answer.isCorrect)}> {Answer.Answer} </button>

                            </div>
                        )

                        )}

                    </div>

                </div>

            ) : (
                <></>
            )
            }



        </>
    )
}

export default Questionapp