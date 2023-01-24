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
import DeleteIcon from "@mui/icons-material/Delete";
import { TableHead, Typography } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function createData(
  sno,
  transactionId,
  date,
  clientName,
  organization,
  packageName,
  startDate,
  expiryDate,
  amount,
  viewInvoice
) {
  return {
    sno,
    transactionId,
    date,
    clientName,
    organization,
    packageName,
    startDate,
    expiryDate,
    amount,
  };
}

const rows = [
  createData(
    1,
    123,
    "1/12/22",
    "Random Person",
    "Random organization",
    "Random package",
    "23/12/22",
    "23/12/23",
    15000
  ),
  createData(
    2,
    123,
    "1/12/22",
    "Random Person",
    "Random organization",
    "Random package",
    "23/12/22",
    "23/12/23",
    15000
  ),
  createData(
    3,
    123,
    "1/12/22",
    "Random Person",
    "Random organization",
    "Random package",
    "23/12/22",
    "23/12/23",
    15000
  ),
  createData(
    4,
    123,
    "1/12/22",
    "Random Person",
    "Random organization",
    "Random package",
    "23/12/22",
    "23/12/23",
    15000
  ),
  createData(
    5,
    123,
    "1/12/22",
    "Random Person",
    "Random organization",
    "Random package",
    "23/12/22",
    "23/12/23",
    15000
  ),
  createData(
    6,
    123,
    "1/12/22",
    "Random Person",
    "Random organization",
    "Random package",
    "23/12/22",
    "23/12/23",
    15000
  ),
  createData(
    7,
    123,
    "1/12/22",
    "Random Person",
    "Random organization",
    "Random package",
    "23/12/22",
    "23/12/23",
    15000
  ),
  createData(
    8,
    123,
    "1/12/22",
    "Random Person",
    "Random organization",
    "Random package",
    "23/12/22",
    "23/12/23",
    15000
  ),
  createData(
    9,
    123,
    "1/12/22",
    "Random Person",
    "Random organization",
    "Random package",
    "23/12/22",
    "23/12/23",
    15000
  ),
  createData(
    10,
    123,
    "1/12/22",
    "Random Person",
    "Random organization",
    "Random package",
    "23/12/22",
    "23/12/23",
    15000
  ),
  createData(
    11,
    123,
    "1/12/22",
    "Random Person",
    "Random organization",
    "Random package",
    "23/12/22",
    "23/12/23",
    15000
  ),
  createData(
    12,
    123,
    "1/12/22",
    "Random Person",
    "Random organization",
    "Random package",
    "23/12/22",
    "23/12/23",
    15000
  ),
  createData(
    13,
    123,
    "1/12/22",
    "Random Person",
    "Random organization",
    "Random package",
    "23/12/22",
    "23/12/23",
    15000
  ),
  createData(
    14,
    123,
    "1/12/22",
    "Random Person",
    "Random organization",
    "Random package",
    "23/12/22",
    "23/12/23",
    15000
  ),
  createData(
    15,
    123,
    "1/12/22",
    "Random Person",
    "Random organization",
    "Random package",
    "23/12/22",
    "23/12/23",
    15000
  ),
  createData(
    16,
    123,
    "1/12/22",
    "Random Person",
    "Random organization",
    "Random package",
    "23/12/22",
    "23/12/23",
    15000
  ),
  createData(
    17,
    123,
    "1/12/22",
    "Random Person",
    "Random organization",
    "Random package",
    "23/12/22",
    "23/12/23",
    15000
  ),
  createData(
    18,
    123,
    "1/12/22",
    "Random Person",
    "Random organization",
    "Random package",
    "23/12/22",
    "23/12/23",
    15000
  ),
  createData(
    19,
    123,
    "1/12/22",
    "Random Person",
    "Random organization",
    "Random package",
    "23/12/22",
    "23/12/23",
    15000
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

function OrdersTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "800",
                  fontSize: "12px",
                  color: "#00000099",
                }}
              >
                SLNO.
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "800",
                  fontSize: "12px",
                  color: "#00000099",
                }}
              >
                Transaction ID
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "800",
                  fontSize: "12px",
                  color: "#00000099",
                }}
              >
                Date
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "800",
                  fontSize: "12px",
                  color: "#00000099",
                }}
              >
                Client Name
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "800",
                  fontSize: "12px",
                  color: "#00000099",
                }}
              >
                Organization
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "800",
                  fontSize: "12px",
                  color: "#00000099",
                }}
              >
                Package Name
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "800",
                  fontSize: "12px",
                  color: "#00000099",
                }}
              >
                Start Date
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "800",
                  fontSize: "12px",
                  color: "#00000099",
                }}
              >
                Expiry Date
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "800",
                  fontSize: "12px",
                  color: "#00000099",
                }}
              >
                Amount
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "800",
                  fontSize: "12px",
                  color: "#00000099",
                }}
              >
                View Invoice
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
                  {row.sno}
                </TableCell>
                <TableCell align="left">{row.transactionId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell component="th" scope="row">
                  {row.clientName}
                </TableCell>
                <TableCell align="left">{row.organization}</TableCell>
                <TableCell align="left">{row.packageName}</TableCell>
                <TableCell align="left">{row.startDate}</TableCell>
                <TableCell align="left">{row.expiryDate}</TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell component="th" scope="row">
                  <RemoveRedEyeIcon sx={{ color: "blue", cursor: "pointer" }} />
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
        />
        {/* <Box
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
        </Box> */}
      </Box>
    </Fragment>
  );
}

export default OrdersTable;
