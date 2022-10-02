import { useState } from 'react'
import Header from './components/Header'
import SquareContainer from './components/SquareContainer'
import Footer from './components/Footer'
function App() {

  return (
    <div className="App flex flex-col w-screen h-screen justify-between bg-gray-900">
      <Header />
      <SquareContainer />
      <Footer />
    </div>
  )
}

export default App
