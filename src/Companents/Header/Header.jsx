import React from 'react'
import './header.css'
import BELLIS from '../../assets/header.img/bellissimo-img.svg'
import LOC from '../../assets/header.img/locate.svg'
import NUMBER from '../../assets/header.img/number.svg'
import TIME from '../../assets/header.img/time.svg'
import HALAL from '../../assets/header.img/halal.img.svg'
import UZB from '../../assets/header.img/uzb.svg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink } from 'react-router-dom'



function Header() {
  return (
        <div className='header-qwerty'>
        <div className="left">
            <div className="forimg">
                <img src={BELLIS} alt="" />
            </div>
            <div className="fortash">
                <div className="forimg2">
                  <img src={LOC} alt="" />
                </div>
                <div className="fortash2">
                  <h3>Shahar:</h3>
                  <h2>Andijon <ArrowDropDownIcon className='icon-strelka'/></h2>
                  
                </div>
            </div>
            <div className="fornomer">
              <div className="number-1174">
                <div className="fornumber">
                  <img src={NUMBER} alt="" />
                </div>
                <div className="foraloqa">
                  <h3>Yagona aloqa <br /><span>markazi</span></h3>
                </div>
              </div>
              <div className="time-time">
                <img src={TIME} alt="" />
              </div>
              
            </div>
        </div>
        <div className="right">
          <div className="forlogin">
            <div className="forselect">
            <img src={UZB} alt="" />
              <h4>Uz</h4>
            </div>
            <div className="forimgHALAL">
              <img src={HALAL} alt="" />
            </div>
            <div className="forkirish">
              <div className="gren">
                <NavLink className="header-login" to={'/login'}><h3>Kirish</h3></NavLink>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header