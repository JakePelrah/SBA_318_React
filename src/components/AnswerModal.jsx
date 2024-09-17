import { useEffect } from "react"
import { useGameContext } from "./GameProvider"

export default function AnswerModal() {
    const { submitAnswer } = useGameContext()


    function submit(e) {
        const {answer} = e.target.dataset
        const { category, amount } = document.getElementById('answer-modal').dataset
        if (answer)
            submitAnswer(category, amount, answer)
    }

    return (
        <div id="answer-modal" class="modal" data-bs-backdrop="static" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">

                        <p id="modal-answer"></p>

                        <div id="question-buttons" className="d-flex flex-column gap-2" onClick={submit}>
                            <button data-answer="1">Question</button>
                            <button data-answer="2">Question</button>
                            <button data-answer="3">Question</button>
                            <button data-answer="4">Question</button>
                        </div>

                        <div class="progress mt-2">
                            <div id="progress-bar" style={{ "width": "100%" }} class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>)
}