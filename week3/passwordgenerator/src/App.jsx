import { useState, useCallback, useEffect, useRef } from 'react';

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [charte, setCharte] = useState(false)
  const [password, setPassword] =useState(" ")
  
  //ref
  const passwordRef = useRef(null)

  const copyPasswordGenerator = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,15);
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(()=>{
    let stri = 
    "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if (num) stri += "0123456789"
    if (charte) stri += "!@#$^&*()_-+={}|[]:~`{}"
    let pass = " "
    for (let i = 0; i <= length; i++) {
      
      let char = stri[Math.floor(Math.random() * stri.length)]
      pass += char
    }
    setPassword(pass)
  },[length,num,charte,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,num,charte,setPassword,passwordGenerator])



  return (
    <>
      <div className='container'>
        <h1 style={{WebkitTextFillColor:'white'}} >Password Generator</h1>
        <div className="container-sm">
        <input className='passwo' value={password}
         type="text" placeholder='password' readOnly
         ref={passwordRef}
         />
        <button className="button" type="button" onClick={copyPasswordGenerator}>copy</button>
        </div>
        <div className="container-sm">
        <input type="range" min={6} max={100} value={length} 
        onChange={(e)=> setLength(e.target.value)}
        ref={passwordRef}/>
        <label className='lenmset mx-2'>Lenghts: {length}</label>
        <input type="checkbox" onChange={()=> setNum((prev)=> !prev)} /> 
        <label className='Numset mx-2'>Number</label> 
        <input type="checkbox" onChange={()=> setCharte((prev)=> !prev)} />
        <label className='Charmset mx-2'>Character</label>
        </div>      
      </div>
     
    </>
  )
}

export default App
