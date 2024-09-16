import { useEffect, useState } from 'react'
import './App.css'
import Gameboard from './components/Gameboard'
import AnswerModal from './components/AnswerModal'
import Scoreboard from './components/ScoreBoard'
import Navbar from './components/Navbar'


function App() {

  return (
    <>
      <Navbar />
      <Gameboard />
      <AnswerModal />
      <Scoreboard />
    </>
  )
}

export default App
