import { useEffect, useRef, useState } from "react"

export default function Create() {

    const [categories, setCategories] = useState(['JavaScript', 'HTML', 'CSS', 'SASS'])
    const [category, setCategory] = useState('')
    const [question, setQuestion] = useState('')
    const [answers, setAnswers] = useState({ a1: '', a1Checked: false, a2: '', a2Checked: false, a3: '', a3Checked: false, a4: '', a4Checked: false })

    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    }, [])


    function onChange(e) {
        const key = e.target.value
        console.log(key)
    }


    function onSubmit(e) {
        // e.preventDefault()
        // console.log(question,category, answers) 

        if (question && category && answers.a1 && answers.a2 && answers.a3 && answers.a4) {
            fetch('/createQuestion', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ category, question, answers })
            })
        }

    }


    function setChecked(e) {
        setAnswers(prevState => ({ ...prevState, [e.target.id]: e.target.checked }))
    }


    const renderAnswer = [... new Array(4)].map((_, i) => (<div className="d-flex" >
        <input onChange={setChecked} className="form-check-input me-3" data-bs-toggle="tooltip" data-bs-title="Is Correct?" type="checkbox" value="" id={`a${i+1}Checked`}></input>
        <input value={answers[`a${i+1}`]} onChange={(e) => setAnswers(prevState => ({ ...prevState, [`a${i+1}`]: e.target.value }))} className="form-control form-control-sm" type="text" required />
    </div>))

    return (
        <main className="d-flex justify-content-center mt-5">
            <form id="new-question-form">
                <h1 className="text-white text-center my-4">Create Question</h1>

                <label htmlFor="exampleInputEmail1" className="form-label">Category</label>

                <select required
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    className="form-select">
                    <option value='' >Category</option>
                    {categories.map(value => <option data-category={value} value={value}>{value}</option>)}
                </select>

                <div className="my-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Question</label>
                    <input onChange={(e) => setQuestion(e.target.value)} type="text" className="form-control" aria-describedby="emailHelp" required />
                </div>

                <div className="d-flex flex-column gap-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">Answers</label>
                    {renderAnswer}
                </div>

                <button type="submit" onClick={onSubmit} className="btn btn-primary mt-5">Submit</button>
            </form>

        </main>
    )
}

