import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
const [clickVal, setClickVal] = useState(false)

  return (
    <div id="main">
      <button id="click" onClick={()=> {setClickVal(true)}}>
        Start
      </button>
      { clickVal ? (<p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
        </p>): null
      }
    </div>
  );
}


export default App;
