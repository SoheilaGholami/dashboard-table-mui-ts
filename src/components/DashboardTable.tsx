import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, Pagination } from "@mui/material";
import { DeleteOutline, Edit } from "@mui/icons-material";

export type characterType = {
  name: string;
  status: string;
  gender: string;
  species: string;
  image: string;
};
export type characterInfoType = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export default function DashboardTable() {
  const [characters, setCharacters] = useState<characterType[]>([]);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [characterInfo, setCharacterInfo] = useState<characterInfoType | null>(
    null
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageIndex(value);
  };

  useEffect(() => {
    async function fetchData() {
      console.log(pageIndex);

      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${pageIndex}`
      );
      console.log(data.info);
      setCharacterInfo(data.info);
      setCharacters(data.results);
    }
    fetchData();
  }, [pageIndex]);
  return (
    <>
      {characters && (
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Actions</TableCell>
                <TableCell align="right">Species</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Name Of Character</TableCell>
                <TableCell align="right">Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {characters.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <DeleteOutline htmlColor="red" />
                    &nbsp;&nbsp;&nbsp;
                    <Edit />
                  </TableCell>
                  <TableCell align="right">{row.species}</TableCell>
                  <TableCell align="right">{row.gender}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">
                    <Avatar src={row.image} alt="" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {characterInfo && (
        <Pagination
          count={characterInfo.count}
          page={characterInfo.pages}
          onChange={handlePageChange}
        />
      )}
    </>
  );
}
