import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../UserSelectors";
import { actions } from "../UserSlice";

import Container from "@mui/material/Container";
import AddUserModal from "./AddUserModal";

import Box from "@mui/material/Box";

const UserDetails: FC = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const dispatch = useDispatch();
  const user = useSelector(selectUsers);

  const handleAddUser = (e: any) => {
    e.preventDefault();
    dispatch(actions.addUser({ id: user.length + 1, name: value }));
  };

  const handleDeleteUser = (id: any) => {
    dispatch(actions.deleteUser(id));
  };

  useEffect(() => {
    dispatch(actions.loadUsers());
  }, [dispatch]);

  return (
    <Container>
      <h1> User Details </h1>

      <Box sx={{ bgcolor: "#cfe8fc" }}>
        {user.map((u: any) => (
          <div key={u.id}>
            {u.id} - {u.name}
            <button onClick={() => handleDeleteUser(u.id)}>delete</button>
          </div>
        ))}
      </Box>
      <form className="" onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="new name"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">add user</button>
      </form>
      {/* <AddUserModal /> */}
    </Container>
  );
};

export default UserDetails;
