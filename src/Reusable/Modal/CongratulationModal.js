import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import '../../style.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#111116',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};

export default function CongratulationModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ color: '#ccc' }} id="modal-modal-title" variant="h6" component="h2">
            Congratulation
          </Typography>
          <p style={{ color: '#ccc' }}>Your Neupass is now more Powerful Than ever</p>
          <div className="row">
            <div className="col-md-12">
              <p className="para">Earn Minimum 5% NeuCoins on tata Neu.1 Neucoins= 1</p>
            </div>
          </div>
          <div className="row delivery">
            <div className="col-md-5 ">
              <p className="para">Get free Delivery </p>
            </div>
            <div className="col-md-7">
              <p className="para">Earn Minimum 5% NeuCoins on tata Neu.1 Neucoins= 1</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="para">No-cost EMI on electronic</p>
            </div>
          </div>
          <div className="button">
            <Button href="/dashboard/app">Next</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
