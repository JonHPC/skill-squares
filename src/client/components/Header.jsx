//src/client/components/Header.jsx
import logo from '/gray-800.png'
import {useState, useEffect} from 'react'
import axios from 'axios'

function Header() {
    

    

    return (
      <div className="header w-screen flex justify-center items-center bg-gray-800 pl-8 pr-8">
        <img src={logo} className="w-48"/>
      </div>
    )
  }
  
  export default Header
  