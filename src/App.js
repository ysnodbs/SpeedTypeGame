 import React from "react"
 import './styles.css'
 import useGame from "./useGame"


 function App() {
   const {
     textAreaRef,
     text,
     handleChange,
     timeRemaining,
     isGameRunning,
     startGame,
     wordCount
   }= useGame()
  
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