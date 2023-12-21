import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './minicard.css';

export default function AlertDialog({ open, setOpen, item }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        style: {
          maxWidth: '63%',
          height: '500px', // Set the height to 20px
          borderRadius: '15px', // Set the border radius to 12px
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">
        <div className="box">
          <div className='minicard-img'>
          <img src={item.image} alt="" className="dialog-image" />
          </div> 
          <div className="box2">
            <h1>{item.name}</h1>
            <p>{item.tarkibi}</p>
            <h2>Pitsa kattaligi</h2>
            <div className="button_div">
            <button>Kichkina</button>
            <button>O'rtacha</button>
            <button>Katta</button>
          </div>
          <h2>Qalinligi</h2>
          <div className="button_div2">
            <button>Yupqa</button>
            <button>Qalin</button>
          </div>
          <div className="narx_but">
          <b>{item.narxi}</b>
          <button className='savat'>Savatga qo'shish</button>
          </div>
          
          </div>
          
        </div>
       
        
      </DialogTitle>
      
    </Dialog>
  );
}

