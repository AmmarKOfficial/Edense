import { useState } from 'react'
import './App.css'
import words from './wordList.json'
import { HangmanDraw } from './Components/HangmanDraw/HangmanDraw'
import { HangmanWord } from './Components/HangmanWord/HangmanWord'
import { Keyboard } from './Components/Keyboard/Keyboard'


function App() {
  const [wordToGuess, setWordToGuess] = useState(()=>{
    return words[Math.floor(Math.random()* words.length)]
  })

  const [guessLetter, setGuessLetter] = useState<string[]>([])

  return (
    <div className='container'>
      <div className='result'> 
      Loss Win
      </div>

      {/* <HangmanDraw/> */}
      <HangmanWord/>
      <Keyboard/>

    </div>
  )
}

export default App
