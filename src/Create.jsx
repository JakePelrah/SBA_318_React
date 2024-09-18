import { useEffect, useRef, useState } from "react"

export default function Create() {

    const [answers, setAnswers] = useState([])
    const [categories, setCategories] = useState([])
    const createModalRef = useRef(null)
    const dzRef = useRef([])
    const modalMetadata = useRef({})
    const selectedCategories = useRef({
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: ''
    })


    useEffect(() => {

        fetch('/getAnswers')
            .then(res => res.json())
            .then(catArray => {
                const categories = catArray.map(cat => cat.category)
                setCategories(categories)
                return categories
            })
            .then(setAnswers)

        try {
            createModalRef.current = new bootstrap.Modal('#create-answer-modal', { keyboard: false })
        }
        catch {
            createModalRef.current = {}
        }

    }, [])



    function onDrop(e) {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        e.target.appendChild(document.getElementById(data));
    }

    function onDragOver(e) {
        e.preventDefault()
        e.dataTransfer.dropEffect = "copy";
    }

    function onDragStart(e) {
        e.dataTransfer.effectAllowed = "copy";
        e.dataTransfer.setData('text/plain', e.target.id)
    }

    function saveAnswer(e) {
        const d1 = document.getElementById('dz1')
        const d2 = document.getElementById('dz2')
        console.log(modalMetadata.current, d1, d2)
    }

    function onChange(e) {
        const key = e.target.parentElement.dataset.select
        const value = e.target.value
        selectedCategories.current = { ...selectedCategories.current, [key]: value }
    }

    function onClick(e) {

        createModalRef.current.show()

        const catIndex = e.target.parentElement.id.split('-')[1]
        const answerIndex = e.target.id.split('-')[1]

        modalMetadata.current.answerIndex = answerIndex
        modalMetadata.current.category = selectedCategories.current[catIndex]

        const dz1Amt = createModalRef.current._element.querySelector('#dz1-amount')
        dz1Amt.innerText = `$${answerIndex * 200}`

        const dz2Amt = createModalRef.current._element.querySelector('#dz2-amount')
        dz2Amt.innerText = `$${answerIndex * 400}`
    }

    function Select({ id }) {
        return (<select id={`select-${id}`} onChange={onChange} class="form-select">
            <option selected>Category</option>
            {categories.map(value => <option id={id} data-category={value} value={value}>{value}</option>)}
        </select>)
    }

    const renderColumns = [...Array(6).keys()].map(i =>
        <div id={`category-${i}`} data-select={i}>
            <Select id={i} />
            {[...Array(5).keys()].map(i => <div id={`answer-${i + 1}`} onClick={onClick} className="create-answer"></div>)}
        </div>

    )

    return (

        <div className='d-flex justify-content-center mt-3'>
            <div id="create-answer-modal" class="modal" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">

                            <div className="d-flex gap-4 mb-3 justify-content-center" >

                                <div className="d-flex flex-column text-center">
                                    <span id="dz1-amount" data-amount ></span>
                                    <div onDragOver={onDragOver} onDrop={onDrop} id="dz1" className="drop-zone"></div>
                                </div>

                                <div className="d-flex flex-column text-center" >
                                    <span id="dz2-amount" data-amount></span>
                                    <div onDragOver={onDragOver} onDrop={onDrop} id="dz2" className="drop-zone"></div>
                                </div>

                            </div>

                            <div id='answer-list'>
                                <ul class="list-group list-group-flush">
                                    <li onDragStart={onDragStart} id="ans1" draggable class="list-group-item">Answer to the question </li>
                                    <li onDragStart={onDragStart} id="ans2" draggable class="list-group-item">JS Q </li>

                                </ul>
                            </div>

                            <button onClick={saveAnswer} className="btn">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p>Answer:What are JS datatypes?</p>

            </div>
            {renderColumns}
        </div>)
}

