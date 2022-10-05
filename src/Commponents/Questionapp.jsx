import React, { useState } from 'react'

const Questionapp = () => {

    const Questionbook = [
        {
            Question: "1, Who Sing Mujko bhi zara lift kara de...?",
            AnswerText: [
                { Answer: "Adnan Sami", isCorrect: true },
                { Answer: "Talat Aziz", isCorrect: false },
                { Answer: "Arshad Sami", isCorrect: false },
                { Answer: "Ataullah Khan", isCorrect: false }
            ]
        },

        {
            Question: "2, Which is the national flower of Pakistan...?",
            AnswerText: [
                { Answer: "Rose", isCorrect: false },
                { Answer: "Thistle", isCorrect: false },
                { Answer: "Jasmine", isCorrect: true },
                { Answer: "Cammomille", isCorrect: false }
            ]
        },

        {
            Question: "3, What company is also the name of one of the longest rivers in the world....?",
            AnswerText: [
                { Answer: "aliExpress", isCorrect: false },
                { Answer: "Draz", isCorrect: false },
                { Answer: "aliBaba", isCorrect: false },
                { Answer: "Amazon", isCorrect: true }
            ]
        },

        {
            Question: "4, What is the meaning of Pakistan....?",
            AnswerText: [
                { Answer: "Muslim Land", isCorrect: false },
                { Answer: "Holy Land", isCorrect: true },
                { Answer: "Desert", isCorrect: false },
                { Answer: "Land of five rivers", isCorrect: false }
            ]
        },

        {
            Question: "5, In which year did Pakistan win the Cricket World Cup...?",
            AnswerText: [
                { Answer: "1995", isCorrect: false },
                { Answer: "1998", isCorrect: false },
                { Answer: "1996", isCorrect: false },
                { Answer: "1992", isCorrect: true }
            ]
        },
    ]

    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setshowScore] = useState(false);


    const handlerAnswer = (isCorrect) => {
        if (isCorrect) {

            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < Questionbook.length) {
            setcurrentQuestion(nextQuestion);

        } else {

            setshowScore(true);
        }

    }

    const resetQuiz = () => {
        setcurrentQuestion(0);
        setScore(0);
        setshowScore(false);

    }



    return (
        <>
            <hr />
            {showScore ? (
                <div>
                    <div className='scoer'>
                        <h2>You Have Scored {score} Out of {Questionbook.length}
                        </h2>
                    </div>
                    <div className="line"><span className='spn'></span></div>
                    <div className='play_btn'>
                        <div className='btn2'>
                            <button onClick={resetQuiz}>Play Again</button>
                        </div>

                    </div>
                </div>
            ) : (


                <div className='question_main'>

                    <div className="question_number">
                        <span>{currentQuestion + 1}</span>/{Questionbook.length}
                    </div>
                    <div className='question'>
                        <div className="question_text">
                            <h1 className='hading'> {Questionbook[currentQuestion].Question}</h1>
                        </div>
                    </div>

                    <div className='answer'>
                        {Questionbook[currentQuestion].AnswerText.map((Answer) =>
                        (
                            <div className="btn">

                                <button onClick={() => handlerAnswer(Answer.isCorrect)}> {Answer.Answer} </button>

                            </div>
                        )

                        )}

                    </div>

                </div>





            )
            }



        </>
    )
}

export default Questionapp