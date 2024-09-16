import { createContext, useContext, useState, useEffect, useRef } from "react";

//131127
const GameContext = createContext();
export const useGameContext = () => useContext(GameContext)

export default function GameProvider({ children }) {
    const [score, setScore] = useState(0)
    const [modal, setModal] = useState(null)
    const [count, setCount] = useState(0)
    const [answerValue, setAnswerValue] = useState(0)


    useEffect(() => {
        setModal(new bootstrap.Modal('#answer-modal', { keyboard: false }))
    }, [])

    function showAnswerModal() {
        modal.show()
    }

    function submitAnswer(answerNum) {
        answerNum = parseInt(answerNum.value)
        // correct
        if (answerNum === 0) {
            setScore(score + answerValue)
        }
        else{
            setScore(score - answerValue)
        }

        incrementCount()
        modal.hide()

    }


    function incrementCount() {
        if (count === 29) {
            alert('no more question')
            setCount(0)
            return
        }
        setCount(count + 1)
    }

    return (
        <GameContext.Provider value={{
            setScore, score, showAnswerModal,
            modal, incrementCount, setAnswerValue, submitAnswer
        }}>
            {children}
        </GameContext.Provider>
    );

}