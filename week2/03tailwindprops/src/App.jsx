// import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const myobj = {
    chai:"its chai with code",
    age:25
  }
  return (
    <>
      <h1 className='bg-green-400 text-white p-4 rounded-lg mb-4' > Tailwind Test</h1>
      <Card username="Chai" />
      <Card username="Shreyash" someobj={myobj}/>
    </>
  )
}

export default App
