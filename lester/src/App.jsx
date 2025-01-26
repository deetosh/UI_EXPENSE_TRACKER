import { useState } from 'react'
import './App.css'
import Footer from './Components/footer'
import Head from './Components/head'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <Head />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
