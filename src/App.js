 import React, { useState, useEffect } from "react"
 import './styles.css'


 function App() {
  const[text, setText] = useState("")
  const[timeRemaining, setTimerRemaining] = useState(5)
  const[isGameRunning, setIsGameRunning] = useState(false)
  const[wordCount, setWordCount] = useState(0)
   
  //Control text area when input comes
  function handleChange(e){
    const{value}=e.target
    setText(value)
  }
  //Timer is set up here so it won't go below 0
  
  //Calculate how many words have been typed
  function calculateWordCount(text){
    var wordCount = text.trim().split(" ")
    return wordCount.filter(word => word!=="").length
  }
  function startGame(){
    setIsGameRunning(true)
    setTimerRemaining(5)
    setText("")
  }

  function endGame(){
      setIsGameRunning(false)
      setWordCount(calculateWordCount(text))

  }
  
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