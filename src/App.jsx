import { useEffect, useState } from 'react'
import './App.css'
import Gameboard from './components/Gameboard'
import AnswerModal from './components/AnswerModal'
import Scoreboard from './components/ScoreBoard'


function App() {

  return (
    <>
      <Gameboard />
      <AnswerModal />
      <Scoreboard />
    </>
  )
}

export default App
