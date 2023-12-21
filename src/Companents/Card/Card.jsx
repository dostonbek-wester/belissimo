import React from 'react'
import './card.css'
import AlertDialog from '../MiniCard/MiniCrad'

function Card({ item }) {
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  function reduce_title(title) { 
    if(title?.length > 50){ 
      return title.slice(0,50) + "..." 
    }else{ 
      return title 
    } 
  }

  return (
    <>
    <AlertDialog open={open} setOpen={setOpen} item={item} />
    <div className="card" onClick={handleClickOpen}>
      <div >
        <img className="imgcard" src={item.image} alt="" />
      </div>
      <div className="yozuv">
        <div>{item.name}</div>
       <p>{reduce_title(item.tarkibi)}</p>
        
      </div>
      <div className='narx'>{item.narxi}</div>
      
    </div>
    </>
  )
}

export default Card