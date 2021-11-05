import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Detailmodal = ({ open, setOpen, handleOpen, city }) => {
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h5' component='h2'>
            {city.title}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {city.description}
          </Typography>
          <Button
            sx={{ mt: 2, mx: "auto" }}
            onClick={handleClose}
            variant='contained'>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Detailmodal;
