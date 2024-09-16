import { useGameContext } from "./GameProvider"

export default function AnswerModal() {
    const { setScore, score, modal, incrementCount } = useGameContext()


    function submit(e) {
        const scoreData = modal._element.querySelector('[data-value]')
        setScore(score + parseInt(scoreData.dataset.value))
        incrementCount()
        modal.hide()
    }

    return (
        <div id="answer-modal" class="modal" data-bs-backdrop="static" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <p id="modal-answer"></p>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="option" id="option-one" />
                            <label class="form-check-label" >
                                Default radio
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="option" id="option-two" />
                            <label class="form-check-label" >
                                Default radio
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="option" id="option-three" />
                            <label class="form-check-label" >
                                Default radio
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="option" id="option-four" />
                            <label class="form-check-label" >
                                Default checked radio
                            </label>
                        </div>

                        <button onClick={submit} >Submit</button>

                    </div>
                </div>
            </div>
        </div>)
}