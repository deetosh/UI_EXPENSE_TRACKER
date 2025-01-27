import { useState } from 'react'
import './App.css'
import Footer from './Components/footer'
import Head from './Components/head'
import LoginForm from './Components/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Head/>
    </div>
  )
}

export default App
