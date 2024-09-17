
import Answer from "./Answer";
import Category from './Category';

export default function Gameboard() {

    return (

        <div className='d-flex justify-content-center mt-3'>

            <div className="category">
                <Category category='javascript' />
                <Answer />
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </div>

            <div className="category">
                <Category category='css' />
                <Answer />
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </div>

            <div className="category">
                <Category category='html' />
                <Answer />
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </div>

            <div className="category">
                <Category category='react' />
                <Answer />
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </div>

            <div className="category">
                <Category category='express' />
                <Answer />
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </div>

            <div className="category">
                <Category category='mongo' />
                <Answer />
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </div>


        </div>)
}