import { useEffect, useRef, useState } from "react"

export default function Create() {

    const [answers, setAnswers] = useState([])
    const [categories, setCategories] = useState([])
    // const [selectedCategory, setSelectedCategory] = useState()
    const createModalRef = useRef(null)



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
            createModalRef.current.show()
        }
        catch {
            createModalRef.current = {}
        }


    }, [])



    function onChange(e) {
        console.log(e.target.parentElement.dataset.select)
        console.log(e.target.value)
    }


    function onClick(e) {
        console.log(e.target.id)
        console.log(e.target.parentElement.id)
    }

    function Select() {
        return (<select onChange={onChange} class="form-select">
            <option selected>Category</option>
            {categories.map(value => <option data-category={value} value={value}>{value}</option>)}
        </select>)
    }

    const renderColumns = [...Array(6).keys()].map(i =>
        <div id={`category-${i}`} data-select={i}>
            <Select />
            {[...Array(5).keys()].map(i => <div id={`answer-${i + 1}`} onClick={onClick} className="create-answer"></div>)}
        </div>

    )

    return (

        <div className='d-flex justify-content-center mt-3'>
            <AnswerModal />
            <div>
                <p>Answer:What are JS datatypes?</p>

            </div>
            {renderColumns}
        </div>)
}


function AnswerModal() {



    function onDrop(e){
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");

        e.target.appendChild(document.getElementById(data).cloneNode(true));
    }

    function onDragOver(e){
        e.preventDefault()
        e.dataTransfer.dropEffect = "copy";
    }

    function onDragStart(e){
        e.dataTransfer.effectAllowed = "copy";
        e.dataTransfer.setData('text/plain', e.target.id)
    }

    return (<div id="create-answer-modal" class="modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">

                    <div className="d-flex gap-4 mb-3 justify-content-center" >
                        <div onDragOver={onDragOver} onDrop={onDrop} className="drop-zone">$200</div>
                        <div onDragOver={onDragOver} onDrop={onDrop} className="drop-zone">$400</div>
                    </div>

                    <div id='answer-list'>
                        <ul class="list-group list-group-flush">
                            <li onDragStart={onDragStart} id="ans1" draggable class="list-group-item">Answer to the question </li>
                       
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>)
}