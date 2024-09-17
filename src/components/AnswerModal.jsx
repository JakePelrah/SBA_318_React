import { useGameContext } from "./GameProvider"

export default function AnswerModal() {
    const { submitAnswer } = useGameContext()


    function submit(e) {
        const radioButtons = document.getElementsByName('question')
        const answer = [...radioButtons].filter(btn => btn.checked)[0]?.value
        const { category, amount } = document.getElementById('answer-modal').dataset
        
        if(answer)
            submitAnswer(category, amount, answer)
    }

    return (
        <div id="answer-modal" class="modal" data-bs-backdrop="static" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">

                        <p id="modal-answer"></p>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="0" name="question" id="option-one" />
                            <label class="form-check-label" >
                                Question
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="1" name="question" id="option-two" />
                            <label class="form-check-label" >
                                Question
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="2" name="question" id="option-three" />
                            <label class="form-check-label">
                                Question
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="3" name="question" id="option-four" />
                            <label class="form-check-label" >
                                Question
                            </label>
                        </div>

                        <button onClick={submit} >Submit</button>

                    </div>
                </div>
            </div>
        </div>)
}