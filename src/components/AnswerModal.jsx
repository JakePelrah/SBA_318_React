import { useEffect } from "react"
import { useGameContext } from "./GameProvider"

export default function AnswerModal() {
    const { submitAnswer,outOfTime } = useGameContext()


    function submit(e) {
        const {answer} = e.target.dataset
        const { category, amount } = document.getElementById('answer-modal').dataset
        if (answer)
            submitAnswer(category, amount, answer)
    }


    useEffect(()=>{

        if(outOfTime){
        const { category, amount } = document.getElementById('answer-modal').dataset

            submitAnswer(category, amount, null)
        }
    },[outOfTime])

    return (
        <div id="answer-modal" className="modal" data-bs-backdrop="static" tabindex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content answer-modal-content">
                    <div className="modal-body">

                        <p id="modal-answer"></p>

                        <div id="question-buttons" className="d-flex flex-column gap-2" onClick={submit}>
                            <button data-answer="1">Question</button>
                            <button data-answer="2">Question</button>
                            <button data-answer="3">Question</button>
                            <button data-answer="4">Question</button>
                        </div>

                        <div className="progress mt-2">
                            <div id="progress-bar" style={{ "width": "100%" }} className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>)
}