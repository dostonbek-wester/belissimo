import React from 'react'
import './savatcha.css'
import { useNavigate } from 'react-router-dom'

function Savatcha() {
  const navigate = useNavigate()
  return (
    <div className="savatcha-asosiy">
      <div className="savatcha-box">
        <div className="savatcha-img">
          <img src="https://bellissimo.uz/images/emptystate/empty-cart-icon.svg" alt="" />
        </div>
        <div className="savatcha-title">
          <h2>Hozircha sizning savatchangiz bo'sh 😕</h2>
          <button onClick={()=>navigate('/')}>Menyuni ko'rish</button>
        </div>
      </div>
    </div>
  )
}

export default Savatcha