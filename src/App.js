 import React, { useState, useEffect, useRef } from "react"
 import './styles.css'


 function App() {
  const STARTING_TIME = 5
  const[text, setText] = useState("")
  const[timeRemaining, setTimerRemaining] = useState(STARTING_TIME)
  const[isGameRunning, setIsGameRunning] = useState(false)
  const[wordCount, setWordCount] = useState(0)
  const textAreaRef =useRef(null)
   
  //Control text area when input comes
  function handleChange(e){
    const{value}=e.target
    setText(value)
  }
  
  //Calculate how many words have been typed
  function calculateWordCount(text){
    var wordCount = text.trim().split(" ")
    return wordCount.filter(word => word!=="").length
  }

  //Start of the game, start timer , set text area to empty text and focus on text area
  function startGame(){
    setIsGameRunning(true)
    setTimerRemaining(STARTING_TIME)
    setText("")
    textAreaRef.current.disabled=false
    textAreaRef.current.focus()
  }

  function endGame(){
      setIsGameRunning(false)
      setWordCount(calculateWordCount(text))

  }
  //Timer is set up here so it won't go below 0
  useEffect(() => {
    if (isGameRunning && timeRemaining > 0) {
      setTimeout(() => setTimerRemaining(prevState => prevState - 1), 1000)
    } else if (timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isGameRunning])

   return (
     <div>
       <h1>Speed Typing Game</h1>
       <textarea
        ref={textAreaRef}
        value ={text}
        onChange ={handleChange}
        disabled={!isGameRunning}
       />
       <h4>Time Remaining: {timeRemaining}</h4>
       <button disabled={isGameRunning} onClick = {startGame}>Start Game</button>
       <h1>Word Count:{wordCount}</h1>
     </div>
   )
 }

 export default App;