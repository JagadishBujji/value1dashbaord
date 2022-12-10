import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  background: 'linear-gradient(to right bottom, #FFFFFF 0%, #FFFFAC 0%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)',
  border: '2px solid #000',
 borderRadius:"20px",
  boxShadow: 24,
  p: 4,
};

const save = {
    bgcolor: '#000',
    color: '#fff',
    boxShadow: 'none',
    m:2,
    '&:hover': {
      bgcolor: '#000',
      color: '#fff',
    },
  };

  const cancel = {
    border: '1px solid #000',
    color: '#000',
    '&:hover': {
      border: '1px solid #000',
      color: '#000',
    },
  };

  
export default function LoginModal(props) {
  return (
    <div>
      <Modal
        open ={props.open}
        onClose={props.onCancel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <TextField fullWidth id="outlined-basic" label="UserName" variant="outlined" sx ={{mb:3}}/>
        <TextField fullWidth id="outlined-basic" label="Email-Id" variant="outlined" />
        <div className='LoginBtn'>
        <Button variant="contained" onClick={props.onCancel} sx={save}>Save</Button>
         <Button variant="outlined" onClick={props.onCancel} sx={cancel}>Cancel</Button>
         </div>
        </Box>
      </Modal>
    </div>
  );
}
