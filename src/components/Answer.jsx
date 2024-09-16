import { useGameContext } from "./GameProvider"

export default function Answer({ price = 0, clue = 'Etiam sodales at neque ut porta. Aenean consectetur tincidunt libero id pulvinar. Nulla non vestibulum libero. Cras id varius elit. Aenean mollis quam ac diam interdum interdum. Curabitur vestibulum facilisis leo sit amet varius. Donec lobortis tristique ex, vitae tincidunt mauris vehicula quis. Pellentesque tempor a ligula ac consequat.' }) {

    const { showAnswerModal, modal } = useGameContext()

    function answerClicked(e) {

        e.target.classList.add('disabled')
        e.target.querySelector('.answer-title').innerText = ''

        showAnswerModal()

        const answerDiv = modal._element.querySelector('#modal-answer')
        answerDiv.innerText = clue
        answerDiv.dataset.value = price
    }

    return (<div onClick={answerClicked} className='answer display'>
        <span className='answer-title'> ${price}</span>
    </div>)
}