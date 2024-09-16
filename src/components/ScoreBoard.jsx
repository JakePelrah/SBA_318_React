import { useGameContext } from "./GameProvider"

export default function Scoreboard() {
    const { score } = useGameContext()

    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className='display scoreboard'>
                <span className='answer-title'>${score.toLocaleString('en-US', {
                })}</span>
            </div>
        </div>
    )
}