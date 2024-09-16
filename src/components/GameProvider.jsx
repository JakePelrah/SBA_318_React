import { createContext, useContext, useState, useEffect, useRef } from "react";

//131127
const GameContext = createContext();
export const useGameContext = () => useContext(GameContext)

export default function GameProvider({ children }) {
    const [score, setScore] = useState(0)
    const [modal, setModal] = useState(null)

    useEffect(() => {
        setModal(new bootstrap.Modal('#answer-modal', { keyboard: false }))
    }, [])

    function showAnswerModal() {
        modal.show()
    }

    return (
        <GameContext.Provider value={{
            setScore, score, showAnswerModal,
            modal
        }}>
            {children}
        </GameContext.Provider>
    );

}