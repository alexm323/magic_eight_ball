import React, { useState } from 'react';


const EightBall = ({ answers }) => {
    const randomChoice = (arr) => {
        let randIndex = Math.floor(Math.random() * arr.length)
        return (arr[randIndex])
    }
    const answerQuestion = () => {
        let { msg, color } = randomChoice(answers)
        setAnswer(msg)
        setColor(color)
    }
    const [answer, setAnswer] = useState('Think of a question')
    const [color, setColor] = useState('black')
    return (
        <div className='EightBall' onClick={answerQuestion} className={color}>
            <h1 >{answer}</h1>
        </div >
    )
}
export default EightBall;



