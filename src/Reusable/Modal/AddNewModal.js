import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Dropdown from '../Dropdown/Dropdown';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
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
  color: '#111116',
  '&:hover': {
    border: '1px solid #FABB04',
    color: '#111116',
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

export default function AddNewModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <div>
      {/* <Button onClick={handleOpen}>Add New</Button>  */}
      
      <Button sx={button} onClick={handleOpen}>
        Add New
      </Button>
         
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {/* <div className="formHeadBtn"> */}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Title
          </Typography>
          {/* <h5 className="CloseButton">
            <span onClick={handleClose}>X</span>
          </h5>
          </div> */}
          <Dropdown value1="Organ" value2="Blood" value3="others" title="Good Deed Type" />
          <Dropdown value1="Pledge" value2="Action" title="Type" />
          <Dropdown value1="Complete" value2="Incomplete" title="Status" />
          {/* <UploadFile /> */}
          <Typography sx={{ mb: 2 }} id="modal-modal-title" variant="h6" component="h2">
            Form
          </Typography>
          <Dropdown value1="Organ" value2="Blood" value3="others" title="Good Deed Type" />
          <Dropdown value1="Pledge" value2="Action" title="Type" />
          <Dropdown value1="Complete" value2="Incomplete" title="Status" />
          <div className="row FormBtn">
            <Button variant="contained" sx={save} onClick={handleClose}>
              Submit
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
