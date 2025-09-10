import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Botao } from './components/Botao'
import { Digitar } from './components/Digitar'

function App() {
  const [visibil, setvisibile] = useState(true)


  return (
    <>
      <Botao/>
      <Digitar />
        {  visibil &&
        <div>
            <h1>Boa Prova :)</h1>
        </div>
        }
        <button onClick={() => {setvisibile(visibil == true? false: true )}}>visibilidade</button>
      
    </>
  )
}

export default App
