
import Answer from "./Answer";
import Category from './Category';

export default function Gameboard() {

    return (

        <div className='d-flex justify-content-center mt-3'>

            <div className="category-answers">
                <Category category='javascript' />
                <Answer answerValue={200} />
                <Answer answerValue={400} />
                <Answer answerValue={-600} />
                <Answer answerValue={800} />
                <Answer answerValue={1000} />
            </div>

            <div className="category-answers">
                <Category category='css' />
                <Answer answerValue={200} />
                <Answer answerValue={400} />
                <Answer answerValue={600} />
                <Answer answerValue={800} />
                <Answer answerValue={1000} />
            </div>

            <div className="category-answers">
                <Category category='html' />
                <Answer answerValue={200} />
                <Answer answerValue={400} />
                <Answer answerValue={600} />
                <Answer answerValue={800} />
                <Answer answerValue={1000} />
            </div>

            <div className="category-answers">
                <Category category='react' />
                <Answer answerValue={200} />
                <Answer answerValue={400} />
                <Answer answerValue={600} />
                <Answer answerValue={800} />
                <Answer answerValue={1000} />
            </div>

            <div className="category-answers">
                <Category category='express' />
                <Answer answerValue={200} />
                <Answer answerValue={400} />
                <Answer answerValue={600} />
                <Answer answerValue={800} />
                <Answer answerValue={1000} />
            </div>

            <div className="category-answers">
                <Category category='mongo' />
                <Answer answerValue={200} />
                <Answer answerValue={400} />
                <Answer answerValue={600} />
                <Answer answerValue={800} />
                <Answer answerValue={1000} />
            </div>


        </div>)
}