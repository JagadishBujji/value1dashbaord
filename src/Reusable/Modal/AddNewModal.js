import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Dropdown from '../Dropdown/Dropdown';
import UploadFile from '../Upload/UploadFile';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '10px',
  p: 4,
  background:"#000",
  color:"#fff"
};
const save = {
  bgcolor: '#FABB04',
  color: '#111116',
  mr: 5,
  '&:hover': {
    bgcolor: '#FABB04',
    color: '#111116',
  },
};
const cancel = {
  border: '1px solid #FABB04',
  color: '#fff',
  '&:hover': {
    border: '1px solid #FABB04',
    color: '#fff',
  },
};

const button = {
  background: '#fabb04',
  color: '#111116',
  '&:hover': {
    background: '#fabb04',
    color: '#111116',
  },
};

export default function AddNewModal({ isOpen, handleClose, submitHandler, isButtonDisabled }) {
  
  return (
    <div>
      {/* <Button onClick={handleOpen}>Add New</Button>  */}

      {/* <Button sx={button} onClick={handleOpen}>
        Add New
      </Button> */}

      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <div className="formHeadBtn"> */}

          <Typography sx={{ mb: 2 }} id="modal-modal-title" variant="h6" component="h2">
            Good Deeds
          </Typography>
          <Dropdown value1="Organ" value2="Blood" value3="others" title="Good Deed Type" />
          <Dropdown value1="Pledge" value2="Action" title="Type" />
          <UploadFile />
          <div className="row FormBtn">
            <Button variant="contained" sx={save} onClick={submitHandler} disabled={isButtonDisabled}>
              {isButtonDisabled ? "Loading..." : 'Submit'}
            </Button>
            <Button variant="outlined" sx={cancel} onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
