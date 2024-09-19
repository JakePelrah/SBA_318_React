import { useEffect, useRef, useState } from "react"

export default function Create() {

    const [answers, setAnswers] = useState([])
    const [categories, setCategories] = useState(["JavaScript"])


    function onDrop(e) {
        e.preventDefault();
        let data = e.dataTransfer.getData("application/json");
        const { id, question } = JSON.parse(data)
      
        e.target.classList.add("create-filled-slot")
        e.target.dataset.questionId = id
        e.target.dataset['bsContent'] = question

        new bootstrap.Popover(e.target, {
            trigger: 'hover'
        })

    }

    function onDragOver(e) {
        e.preventDefault()
        e.dataTransfer.dropEffect = "copy";
    }

    function onDragStart(e) {
        console.log(e.target)
        e.dataTransfer.effectAllowed = "copy";
        e.dataTransfer.setData('application/json', JSON.stringify({ id: e.target.dataset.questionId, question: e.target.innerText }))
    }

    function onChange(e) {
        const key = e.target.parentElement.dataset.select
        const value = e.target.value

        fetch('/getAnswers/javascript')
            .then(res => res.json())
            .then(setAnswers)

    }

    function Select({ id }) {
        return (<select id={`select-${id}`}
            onChange={onChange}
            className="form-select">
            <option >Category</option>
            {categories.map(value => <option id={id} data-category={value} value={value}>{value}</option>)}
        </select>)
    }

    const renderColumns = [...Array(6).keys()].map(i =>
        <div id={`category-${i}`} data-select={i}>
            <div className="category">Category</div>
            {[...Array(5).keys()].map(i =>
                <div id={`answer-${i + 1}`}
                    className="create-answer d-flex gap-3 justify-content-center align-items-center ">

                    <div onDragOver={onDragOver} onDrop={onDrop} className="drop-zone" data-bs-toggle="popover" data-bs-content="">
                        ${200 * (i + 1)}
                    </div>
                    <div onDragOver={onDragOver} onDrop={onDrop} className="drop-zone" data-bs-toggle="popover" data-bs-content="">
                        ${400 * (i + 1)}
                    </div>
                </div>)}
        </div>
    )


    const renderQuestions = answers.map(answer => <li data-question-id={answer.id} draggable onDragStart={onDragStart} className="list-group-item">{answer.answer}</li>)
    return (
        <main className="d-flex justify-content-center">


            <div className="mt-2">
                <div className=' d-flex mt-3'>
                    {renderColumns}
                </div>

                <div id="questions" className="m-5" >
                    <Select />
                    <ul className="list-group">
                        {renderQuestions}
                    </ul>
                </div>

            </div>





        </main>
    )
}

