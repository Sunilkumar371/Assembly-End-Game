import clsx from 'clsx'
import './App.css'
import Header from './components/Header'
import Language from './components/Language'

import Keyboard from './components/keyboard'
import { useState } from 'react'
import Confetti from 'react-confetti'
import { getRandomWord } from './utils'
function AssemblyEndGame() {
  const [currentWord,setCurrentWord] = useState(()=>getRandomWord())
  const [guessedLetter,setGuessedLetter]= useState([])

  
  function getGuessedLetter(id){
    setGuessedLetter(prev=>prev.includes(id)?[...prev]:[...prev,id])
  }
  const wrongGuessCount = guessedLetter.filter(letter=>!currentWord.includes(letter)).length

  const isGameWon = currentWord.split("").every(letter => guessedLetter.includes(letter))
  const isGameLost = wrongGuessCount >= 8
  const isGameOver = isGameWon || isGameLost

  const lastGuessedLetter = guessedLetter[guessedLetter.length-1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)
  

  const word = currentWord.split("").map((letter,index)=>{
    const revealLetter = isGameLost || guessedLetter.includes(letter)
    const className= clsx(isGameLost && !guessedLetter.includes(letter) && "reveal-letter")
    console.log(className)
    return(
      <span key={index} className={className}>
        {revealLetter?letter.toUpperCase():""}
      </span>
    )
  })

  function newGame(){
    setCurrentWord(getRandomWord())
    setGuessedLetter([])
  }
  return (
    <main>
      <Header isGameLost={isGameLost}
      isGameOver={isGameOver}
      isGameWon={isGameWon}
      isLastGuessIncorrect={isLastGuessIncorrect}
      wrongGuessCount={wrongGuessCount}
      />
      <Language wrongGuessCount={wrongGuessCount}></Language>
      <section className='word'>{word}</section>
      
      <section className="keyboard">
        <Keyboard 
          currentWord={currentWord}
          guessedLetter={guessedLetter}
          onClick={getGuessedLetter}
          isGameOver={isGameOver}/>
      </section>
      {isGameOver && <button className='newGame' onClick={newGame}>New Game</button>}
      {isGameWon && <Confetti/>}
      
    </main>
    
  )
}

export default AssemblyEndGame
