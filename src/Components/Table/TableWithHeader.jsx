import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TableHead, Typography } from "@mui/material";

function createData(
  clientId,
  clientName,
  organization,
  email,
  mobileNo,
  status,
  packages,
  startDate,
  expiryDate
) {
  return {
    clientId,
    clientName,
    organization,
    email,
    mobileNo,
    status,
    packages,
    startDate,
    expiryDate,
  };
}

const rows = [
  createData(
    123,
    "Abhik",
    "Teknotrait",
    "tekis@org.com",
    934534534533,
    "Pending",
    35000,
    "12/05/22",
    "12/12/22"
  ),
  createData(
    2342,
    "SomeOne",
    "Some company",
    "someCompany@gmail.com",
    2342342342,
    "Pending",
    45000,
    "15/12/21",
    "12/12/22"
  ),
  createData(
    1245,
    "Abhik",
    "Teknotrait",
    "tekis@org.com",
    934534534533,
    "Pending",
    35000,
    "12/05/22",
    "12/12/22"
  ),
  createData(
    23255,
    "SomeOne",
    "Some company",
    "someCompany@gmail.com",
    2342342342,
    "Pending",
    45000,
    "15/12/21",
    "12/12/22"
  ),
  createData(
    12356,
    "Abhik",
    "Teknotrait",
    "tekis@org.com",
    934534534533,
    "Pending",
    35000,
    "12/05/22",
    "12/12/22"
  ),
  createData(
    234543,
    "SomeOne",
    "Some company",
    "someCompany@gmail.com",
    2342342342,
    "Pending",
    45000,
    "15/12/21",
    "12/12/22"
  ),
  createData(
    1563,
    "Abhik",
    "Teknotrait",
    "tekis@org.com",
    934534534533,
    "Pending",
    35000,
    "12/05/22",
    "12/12/22"
  ),
  createData(
    23175,
    "SomeOne",
    "Some company",
    "someCompany@gmail.com",
    2342342342,
    "Pending",
    45000,
    "15/12/21",
    "12/12/22"
  ),
];

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function TableWithHeader({ status }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [clients, setClients] = React.useState([]);
  const [selectedClients, setSelectedClients] = React.useState([]);
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function handleChange(e) {}

  const deleteRow = () => {};

  return (
    <Fragment>
      <TableContainer sx={{ border: "2px solid #234e8e" }} component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "primary.main" }}>
              <TableCell
                sx={{
                  fontWeight: "600",
                  fontSize: "12px",
                  borderBottom: "2px solid #234e8e",
                  color: "white",
                }}
              >
                Client ID
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "600",
                  fontSize: "12px",
                  borderBottom: "2px solid #234e8e",
                  color: "white",
                }}
              >
                Client Name
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "600",
                  fontSize: "12px",
                  borderBottom: "2px solid #234e8e",
                  color: "white",
                }}
              >
                Organization
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "600",
                  fontSize: "12px",
                  borderBottom: "2px solid #234e8e",
                  color: "white",
                }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "600",
                  fontSize: "12px",
                  borderBottom: "2px solid #234e8e",
                  color: "white",
                }}
              >
                Mobile Number
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "600",
                  fontSize: "12px",
                  borderBottom: "2px solid #234e8e",
                  color: "white",
                }}
              >
                Status
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "600",
                  fontSize: "12px",
                  borderBottom: "2px solid #234e8e",
                  color: "white",
                }}
              >
                Package
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "600",
                  fontSize: "12px",
                  borderBottom: "2px solid #234e8e",
                  color: "white",
                }}
              >
                Start Date
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "600",
                  fontSize: "12px",
                  borderBottom: "2px solid #234e8e",
                  color: "white",
                }}
              >
                Expiry Date
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "600",
                  fontSize: "12px",
                  borderBottom: "2px solid #234e8e",
                  color: "white",
                }}
              >
                Actions
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "600",
                  fontSize: "12px",
                  borderBottom: "2px solid #234e8e",
                  color: "white",
                }}
              >
                <input
                  onChange={(e) => handleChange(e)}
                  type="checkbox"
                  name="allSelect"
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {row.clientId}
                </TableCell>
                <TableCell align="left">{row.clientName}</TableCell>
                <TableCell align="left">{row.organization}</TableCell>
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell align="left">{row.mobileNo}</TableCell>
                <TableCell align="left">{status}</TableCell>
                <TableCell component="th" scope="row">
                  {row.packages}
                </TableCell>
                <TableCell align="left">{row.startDate}</TableCell>
                <TableCell align="left">{row.expiryDate}</TableCell>
                <TableCell component="th" scope="row">
                  <div className="d-flex align-items-center">
                    <ModeEditIcon
                      sx={{
                        color: "primary.dark",
                        fontSize: "14px",
                        cursor: "pointer",
                        mr: 0.5,
                      }}
                    />
                    <DeleteIcon
                      sx={{
                        color: "red",
                        fontSize: "14px",
                        cursor: "pointer",
                        mr: 0.5,
                      }}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <input
                    type="checkbox"
                    className="delete-checkbox"
                    onChange={(e) => handleChange(e)}
                  />
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 1,
          mt: 2,
        }}
      >
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          colSpan={3}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              "aria-label": "rows per page",
            },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
          className="tableFooter"
        />
        <Box
          onClick={deleteRow}
          sx={{
            backgroundColor: "red",
            width: "100px",
            p: 0.4,
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <DeleteIcon sx={{ color: "white" }} />
          <Typography sx={{ color: "white" }}>Delete</Typography>
        </Box>
      </Box>
    </Fragment>
  );
}

export default TableWithHeader;
