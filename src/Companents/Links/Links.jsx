import React from 'react'
import './links.css'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function Links() {
  return (
    <div className="foraddres-user">
      <button className='button-user'>Yetkazib berish</button>
      <div className='right-user'>
        <input className='inp-user' type="text" placeholder='Yetkazib berish manzilini tanlang ' />
        <EditOutlinedIcon className='icon-user'/>

      </div>
    </div>
  )
}

export default Links