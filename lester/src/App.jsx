import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Head from './Components/head';
import Home from './Components/Pages/Home';
import LoginForm from './Components/Elements/login';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>

      <div>
        <Head/>
      </div>

    </Router>
    
  )
}

export default App;
