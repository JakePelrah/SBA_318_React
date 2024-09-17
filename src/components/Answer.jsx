import { useGameContext } from "./GameProvider"

export default function Answer() {

    const { showAnswerModal} = useGameContext()

    function answerClicked(e) {

        // clear the $ amount
        e.target.querySelector('.answer-title').innerText = ''

        
        // remove ability to click
        e.target.classList.add('disabled')

        const {amount, category} = e.target.querySelector('[data-amount]').dataset

        // show answer modal
        showAnswerModal(category, amount )

    }

    return (<div onClick={answerClicked} className='answer display'>
        <span className='answer-title'></span>
    </div>)
}