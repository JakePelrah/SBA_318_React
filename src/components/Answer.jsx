
export default function Answer({ price = 0, clue = 'Etiam sodales at neque ut porta. Aenean consectetur tincidunt libero id pulvinar. Nulla non vestibulum libero. Cras id varius elit. Aenean mollis quam ac diam interdum interdum. Curabitur vestibulum facilisis leo sit amet varius. Donec lobortis tristique ex, vitae tincidunt mauris vehicula quis. Pellentesque tempor a ligula ac consequat.' }) {


    function answerClicked() {
        const myModal = new bootstrap.Modal('#answer-modal', {
            keyboard: false
        })
        myModal.show()

        const answerDiv = myModal._element.querySelector('#modal-answer')
        answerDiv.innerText = clue

    }

    return (<div onClick={answerClicked} className='answer display'>
        <span className='answer-title'> ${price}</span>
    </div>)
}