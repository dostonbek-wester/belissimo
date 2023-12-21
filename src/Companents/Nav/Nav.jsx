import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className="fornav-pro">
      <div className="qwerty-left">
        <button className='master ab1'><a href="#Kombo">Kombo</a></button>
        <button className='master ab2'><a href="#Pitsa">Pitsa</a></button>
        <button className='master ab3'><a href="#Gazaklar">Gazaklar</a></button>
        <button className='master ab4'><a href="#Ichimliklar">Ichimliklar</a></button>
        <button className='master ab5'><a href="#Salatlar">Salatlar</a></button>
        <button className='master ab6'><a href="#Desertlar">Desertlar</a></button>
        <button className='master ab7'><a href="#Souslar">Souslar</a></button>
      </div>
      <div className="qwerty-right">
      <nav>
          
          <button className='but-qwerty'>
            <NavLink className='navlinks' to='savatcha'>Savatcha | 0</NavLink>
          </button>

        </nav>
        
      </div>
    </div>
  )
}

export default Nav