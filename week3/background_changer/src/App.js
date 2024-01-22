import './App.css';
import { useState } from 'react';

function App() {
    const [color, setColor] = useState("olive") 

    document.body.style.backgroundColor = color
  return (
    <>
    <div className="container">
            <h1>Hello react</h1>
            <div className="container-sm">
              <button id="Red" onClick={(e) => setColor(e.target.id)} style={{backgroundColor:"red"}}>Red</button>
              <button id="Yellow" onClick={(e) => setColor(e.target.id)} style={{backgroundColor:"yellow"}}>Yellow</button>
              <button id="Orange" onClick={(e) => setColor(e.target.id)} style={{backgroundColor:"orange"}}>Orange</button>
              <button id="Olive" onClick={(e) => setColor(e.target.id)} style={{backgroundColor:"olive"}}>Olive</button>
       
              <button id="Green" onClick={(e) => setColor(e.target.id)} style={{backgroundColor:"green"}}>Green</button>
            </div>
    </div>
  </>
  );
}

export default App;
