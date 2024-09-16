import { useGameContext } from "./GameProvider"

export default function Answer({ answerValue = 0 }) {

    const { showAnswerModal, setAnswerValue } = useGameContext()

    function answerClicked(e) {

        // clear the $ amount
        e.target.querySelector('.answer-title').innerText = ''

        // remove ability to click
        e.target.classList.add('disabled')

        // show answer modal
        showAnswerModal()

        setAnswerValue(answerValue)
    }

    return (<div onClick={answerClicked} className='answer display'>
        <span className='answer-title'> ${answerValue}</span>
    </div>)
}