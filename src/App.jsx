import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Herosec from './Herosec'


const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Herosec />
        <Footer />
      </BrowserRouter>
  )
}

export default App