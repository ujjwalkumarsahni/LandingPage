import React from 'react'
import './App.css'
import Header from './components/Header';
import About from './components/About';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';


function App() {

  return (
    <>
      <div>
        <Header />
        <About />
        <Card />
        <Footer />
      </div>
    </>
  )
}

export default App
