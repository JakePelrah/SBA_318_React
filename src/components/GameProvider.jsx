import { createContext, useContext, useState, useEffect } from "react";

//131127
const GameContext = createContext();
export const useGameContext = () => useContext(GameContext)

export default function GameProvider({ children }) {
    const [score, setScore] = useState(0)
    const [modal, setModal] = useState(null)
    const [count, setCount] = useState(0)
    const [questionData, setQuestionData] = useState([])


    useEffect(() => {

        // get reference to answer modal
        setModal(new bootstrap.Modal('#answer-modal', { keyboard: false }))

        // fetch new game
        fetch('game')
            .then(res => res.json())
            .then(setQuestionData)
    }, [])

    useEffect(() => {
        document.querySelectorAll('.category').forEach((category, ci) => {
            category.querySelectorAll('.answer-title').forEach((answer, ai) => {
                const amt = questionData[ci]?.clues[ai].value
                answer.innerHTML = `$${amt}`
                answer.dataset.amount = amt
                answer.dataset.category = questionData[ci]?.category
            })
        })
    }, [questionData])

    function showAnswerModal(category, amount) {
        modal._element.dataset.category = category
        modal._element.dataset.amount = amount
        modal.show()
    }

    function submitAnswer(category, amount, answer) {
        
        answer = parseInt(answer)
        amount = parseInt(amount)

        // check correct answer here
        
        if (answer === 0) {
            setScore(score + amount)
        }
        else {
            setScore(score - amount)
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
            modal, incrementCount, submitAnswer
        }}>
            {children}
        </GameContext.Provider>
    );
}