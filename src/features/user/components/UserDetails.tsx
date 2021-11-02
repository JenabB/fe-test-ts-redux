import { FC, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../UserSelectors";
import { actions } from "../UserSlice";

import { Table, TableBody, TableHead, TableRow, Button } from "@mui/material";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import AddUserModal from "./AddUserModal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(id: number, name: "string") {
  return { id, name };
}

const UserDetails: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUsers);

  const rows = user.map((u: any) => createData(u.id, u.name));

  const handleDeleteUser = (id: any) => {
    dispatch(actions.deleteUser(id));
  };

  useEffect(() => {
    dispatch(actions.loadUsers());
  }, [dispatch]);

  return (
    <div>
      <h1> User Details </h1>
      <AddUserModal />
      <div>
        <Table
          sx={{ maxWidth: "50%", margin: "0 auto" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>id</StyledTableCell>
              <StyledTableCell align="right">name</StyledTableCell>
              <StyledTableCell align="right">action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    color="error"
                    onClick={() => handleDeleteUser(row.id)}
                  >
                    delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserDetails;
