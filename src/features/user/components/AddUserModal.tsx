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
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../UserSelectors";
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

export default function AddUserModal() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const user = useSelector(selectUsers);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddUser = (e: any) => {
    e.preventDefault();
    dispatch(actions.addUser({ id: user.length + 1, name: value }));
  };

  return (
    <div>
      <Button
        style={{ textAlign: "center", margin: "0 20px" }}
        variant="contained"
        onClick={handleOpen}
      >
        Add User
      </Button>
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
              Add User
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
                  add
                </Button>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
