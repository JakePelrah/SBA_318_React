
import Answer from "./Answer";
import Category from './Category';

export default function Gameboard() {

    return (

        <div className='d-flex justify-content-center mt-2'>

            <div className="category-answers">
                <Category category='javascript' />
                <Answer price={200} />
                <Answer price={400} />
                <Answer price={600} />
                <Answer price={800} />
                <Answer price={1000} />
            </div>

            <div className="category-answers">
                <Category category='css' />
                <Answer price={200} />
                <Answer price={400} />
                <Answer price={600} />
                <Answer price={800} />
                <Answer price={1000} />
            </div>

            <div className="category-answers">
                <Category category='html' />
                <Answer price={200} />
                <Answer price={400} />
                <Answer price={600} />
                <Answer price={800} />
                <Answer price={1000} />
            </div>

            <div className="category-answers">
                <Category category='react' />
                <Answer price={200} />
                <Answer price={400} />
                <Answer price={600} />
                <Answer price={800} />
                <Answer price={1000} />
            </div>

            <div className="category-answers">
                <Category category='express' />
                <Answer price={200} />
                <Answer price={400} />
                <Answer price={600} />
                <Answer price={800} />
                <Answer price={1000} />
            </div>

            <div className="category-answers">
                <Category category='mongo' />
                <Answer price={200} />
                <Answer price={400} />
                <Answer price={600} />
                <Answer price={800} />
                <Answer price={1000} />
            </div>


        </div>)
}