import { createContext, useContext, useRef, useState, useEffect } from "react";
import { Navigate, Outlet } from 'react-router-dom';
//131127
const GameContext = createContext();
export const useGameContext = () => useContext(GameContext)

export default function GameProvider() {
    const [score, setScore] = useState(0)
    const [outOfTime, setOutOfTime] = useState(false)
    const [questionsLeft, setQuestionsLeft] = useState(30)
    const [game, setGame] = useState([])
    const [round, setRound] = useState(0)
    const modalRef = useRef(null)
    const timerRef = useRef(null)
    const progressBar = document.getElementById('progress-bar')


    useEffect(() => {
        try{
            modalRef.current = new bootstrap.Modal('#answer-modal', { keyboard: false })
        }
        catch{
            modalRef.current = {}
        }
       
        fetch('game')
            .then(res => res.json())
            .then(setGame)
    }, [])

    useEffect(() => {
        document.querySelectorAll('.category').forEach((category, ci) => {
            category.querySelectorAll('.answer-title').forEach((answer, ai) => {
                answer.parentElement.classList.remove('disabled')
                const amt = game?.[round]?.[ci]?.answers[ai].value
                answer.innerHTML = `$${amt}`
                answer.dataset.amount = amt
                answer.dataset.category = game?.[round]?.[ci]?.category
            })
        })
    }, [game, round])

    function showAnswerModal(category, amount) {

        modalRef.current._element.dataset.category = category
        modalRef.current._element.dataset.amount = amount

        amount = parseInt(amount)

        category = game[round].find((obj) => { return obj.category === category })
        const { answer } = category.answers.find((obj) => { return obj.value === amount })

        modalRef.current._element.querySelector('#modal-answer').innerText = answer

        modalRef.current.show()
        startTimer()
    }

    function submitAnswer(category, amount, answer) {

        answer = parseInt(answer)
        amount = parseInt(amount)

        //find question
        const { answers } = game[round].find(data => data.category === category)
        const selectedAnswer = answers.find(answer => answer.value === amount)

        if (selectedAnswer.correctAnswer === answer) {
            setScore(score + amount)
        }
        else {
            setScore(score - amount)
        }

        incrementCount()
        modalRef.current.hide()
        resetTimer()
    }


    function incrementCount() {
        console.log(questionsLeft)
        if (questionsLeft === 1) {
            if (round < 1)
                setRound(round + 1)
            setQuestionsLeft(30)
            return
        }
        setQuestionsLeft(questionsLeft - 1)
    }

    function resetTimer() {
        clearInterval(timerRef.current)
        progressBar.setAttribute('aria-valuenow', 100)
        progressBar.style.width = '100%';
    }

    function startTimer() {
        let timer = 10

        timerRef.current = setInterval(() => {
            if (timer <= 0) {
                clearInterval(timerRef.current)
                setOutOfTime(new Date())
            }
            timer--
            progressBar.setAttribute('aria-valuenow', timer * 10)
            progressBar.style.width = timer * 10 + '%';
        }, 1000)
    }

    return (
        <GameContext.Provider value={{
            setScore, score, showAnswerModal,
            incrementCount, submitAnswer, outOfTime
        }}>
            <Outlet />
        </GameContext.Provider>
    );
}