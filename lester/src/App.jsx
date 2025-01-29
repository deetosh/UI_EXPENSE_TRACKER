import { useState } from 'react'
import './App.css'
import Footer from './Components/footer'
import Head from './Components/head'
import LoginForm from './Components/login'
import TableExample from './Components/texttable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='form_body'>
      <TableExample/>
    </div>
  )
}

export default App
