import * as React from "react";
import { useQuery } from '@apollo/client';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GET_ALL_NOTES } from '../graphql/Queries';

function GetNotes() {
  const { loading, data } = useQuery(GET_ALL_NOTES);

  return (
    <TableContainer component={Paper} style={{width: 800, marginLeft: "auto", marginRight: "auto"}}>
      <Table aria-label="simple table">
        <TableHead style={{backgroundColor: "#000"}}>
          <TableRow>
            <TableCell style={{color: "#fff"}}>S.No</TableCell>
            <TableCell  style={{color: "#fff"}}>Title</TableCell>
            <TableCell   style={{color: "#fff"}}>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data?.events?.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell >{row?.title}</TableCell>
              <TableCell >{row?.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GetNotes;
