import * as React from "react";
import { useQuery, useMutation } from "@apollo/client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DELETE_NOTE, GET_ALL_NOTES } from "../graphql/Queries";
import { toast } from "react-toastify";

function GetNotes() {
  const { data } = useQuery(GET_ALL_NOTES);
  console.log(data);
  const [deleteEvent, { loading, data: deletid, error }] = useMutation(
    DELETE_NOTE,
    { refetchQueries: [{ query: GET_ALL_NOTES }] }
  );
  return (
    <>
      <TableContainer
        component={Paper}
        style={{ width: 800, marginLeft: "auto", marginRight: "auto" }}
      >
        <Table aria-label="simple table">
          <TableHead style={{ backgroundColor: "#0da2ff" }}>
            <TableRow>
              <TableCell style={{ color: "#fff" }}>S.No</TableCell>
              <TableCell style={{ color: "#fff" }}>Title</TableCell>
              <TableCell style={{ color: "#fff" }}>Description</TableCell>
              <TableCell style={{ color: "#fff" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data?.events?.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>{row?.title}</TableCell>
                  <TableCell>{row?.description}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      disabled={loading}
                      color="error"
                      onClick={async () => {
                        await deleteEvent({ variables: { eventId: row?.id } });
                        toast.error("Deleted Successfully!!!")
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default GetNotes;
