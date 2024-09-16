import { useEffect } from "react"
import { useGameContext } from "./GameProvider"

export default function Scoreboard() {
    const { score } = useGameContext()
    const scoreboardText = document.getElementById('scoreboard-text')

    useEffect(() => {
        if (score < 0) {
            scoreboardText?.classList.add('negative')
        }
        else {
            scoreboardText?.classList.remove('negative')
        }

    }, [score])


    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className='display scoreboard'>
                <span id="scoreboard-text" className='answer-title'>${score.toLocaleString('en-US', {
                })}</span>
            </div>
        </div>
    )
}