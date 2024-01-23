import { useCallback, useEffect, useState } from 'react'
import './App.css'
import words from './wordList.json'
import { HangmanDraw } from './Components/HangmanDraw/HangmanDraw'
import { HangmanWord } from './Components/HangmanWord/HangmanWord'
import { Keyboard } from './Components/Keyboard/Keyboard'



function getWord(){
  return words[Math.floor(Math.random()* words.length)]
}


function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)

  const [guessedLetter, setGuessedLetter] = useState<string[]>([])

  const incorrectLetters = guessedLetter.filter((letter) =>!wordToGuess.includes(letter))


  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetter.includes(letter))
  
  const addGuessedLetter = useCallback((letter: string) =>{
    if(guessedLetter.includes(letter) || isLoser || isWinner) return
    setGuessedLetter(currentLetters => [...currentLetters, letter])
  }, [guessedLetter, isLoser, isWinner])
  


  useEffect(()=>{
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if(key != "Enter") return

      e.preventDefault()
      setGuessedLetter([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return()=>{
      document.removeEventListener("keypress", handler)
    }
  },[guessedLetter])


  useEffect(()=>{
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return()=>{
      document.removeEventListener("keypress", handler)
    }

  },[])

  return (
    <div className='container'>
      <div className='result'> 
      {
        isWinner && "Winner - Refresh to Try Again"
      }

      {
        isLoser && "Nice Try - Refresh to Try Again"
      }

      </div>

      <HangmanDraw numberofGuesses={incorrectLetters.length}/>

      <HangmanWord reveal ={isLoser} guessedLetter = {guessedLetter} wordToGuess={wordToGuess}/>

      <div style={{alignSelf:'stretch'}}>
      <Keyboard 
      disabled = {isWinner || isLoser}
      activeLetter={guessedLetter.filter(letter => wordToGuess.includes(letter))} inactiveLetters = {incorrectLetters} addGuessedLetter={addGuessedLetter}/>

      </div>
      

    </div>
  )
}

export default App
