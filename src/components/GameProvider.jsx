import { createContext, useContext, useState, useEffect, useRef } from "react";

//131127
const GameContext = createContext();
export const useGameContext = () => useContext(GameContext)

export default function GameProvider({ children }) {
    const [score, setScore] = useState(0)
    const [modal, setModal] = useState(null)
    const [count, setCount] = useState(0)

    useEffect(() => {
        setModal(new bootstrap.Modal('#answer-modal', { keyboard: false }))
    }, [])

    function showAnswerModal() {
        modal.show()
    }

    function incrementCount() {
        console.log(count)
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
            modal, incrementCount
        }}>
            {children}
        </GameContext.Provider>
    );

}