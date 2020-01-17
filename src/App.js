 import React, { useState } from "react"
 import './styles.css'


 function App() {
  const[text, setText] = useState("")

  function handleChange(e){
    const{value}=e.target
    setText(value)

  }

   return (
     <div>
       <h1>Speed Typing Game</h1>
       <textarea
        value ={text}
        onChange ={handleChange}
       />
       <h4>Time Remaining:</h4>
       <button>Start Game</button>
       <h1>Word Count:</h1>
     </div>
   )
 }

 export default App;