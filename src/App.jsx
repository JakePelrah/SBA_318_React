import { useEffect, useState } from 'react'
import './App.css'

function App() {



  useEffect(() => {
    fetch('questions')
      .then(res => res.json())
      .then(console.log)
  }, [])

  return (
    <>

    </>
  )
}

export default App
