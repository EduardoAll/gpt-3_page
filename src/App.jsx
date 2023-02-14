import React from 'react';
import { Brand, Cta, Navbar } from './components';
import { Blog, Possibility, Footer, Header, WhatGPT3, Features } from './containers';
import './App.css';


function App() {
  

  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
