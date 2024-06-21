import { useState } from 'react'
import Calculadora from './componentes/Calculadora'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calculadora />
    </>
  )
}

export default App
