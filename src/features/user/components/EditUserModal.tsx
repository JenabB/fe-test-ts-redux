import * as React from "react";
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  Input,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { actions } from "../UserSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

export default function EditUserModal({ userId }: any) {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddUser = (e: any) => {
    e.preventDefault();
    dispatch(actions.editUser({ id: userId, name: value }));
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              sx={{ textAlign: "center" }}
              component="h2"
            >
              Edit User
            </Typography>
            <form className="" onSubmit={handleAddUser}>
              <Input
                sx={{ margin: "20px" }}
                type="text"
                placeholder="new name"
                value={value}
                onChange={handleChange}
              />
              <br />
              <Box sx={{ textAlign: "center" }}>
                <Button variant="contained" type="submit">
                  Edit
                </Button>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
