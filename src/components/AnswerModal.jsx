
export default function AnswerModal() {

    function closeModal() {
        // const myModal = new bootstrap.Modal('#answer-modal', {
        //     keyboard: false
        // })
        // myModal.hide()
    }

    return (
        <div id="answer-modal" class="modal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <p id="modal-answer"></p>
                    </div>
                </div>
            </div>
        </div>)
}