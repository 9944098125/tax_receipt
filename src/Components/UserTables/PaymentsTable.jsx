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
import { TableHead } from "@mui/material";
import ReportModal from "../ReportModal/ReportModal";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function createData(
  sno,
  transactionId,
  date,
  packageName,
  startDate,
  expiryDate,
  amount
) {
  return {
    sno,
    transactionId,
    date,
    packageName,
    startDate,
    expiryDate,
    amount,
  };
}

const rows = [
  createData(
    "1",
    "124561",
    "22/04/22",
    "premium",
    "12/02/21",
    "12/02/23",
    "50000"
  ),
  createData(
    "2",
    "124562",
    "2/04/22",
    "higher",
    "31/01/21",
    "23/01/22",
    "40000"
  ),
  createData(
    "3",
    "124563",
    "27/04/22",
    "basic",
    "12/02/21",
    "12/02/23",
    "50000"
  ),
  createData(
    "4",
    "124564",
    "24/04/22",
    "premium",
    "12/02/21",
    "12/02/23",
    "50000"
  ),
  createData(
    "5",
    "124565",
    "23/04/22",
    "basic",
    "21/12/21",
    "21/12/22",
    "20000"
  ),
  createData(
    "6",
    "124566",
    "29/04/22",
    "midLevel",
    "31/01/21",
    "23/01/22",
    "40000"
  ),
  createData(
    "7",
    "124567",
    "27/04/22",
    "midLevel",
    "12/02/21",
    "12/02/23",
    "50000"
  ),
  createData(
    "8",
    "124568",
    "21/04/22",
    "premium",
    "31/01/21",
    "23/01/22",
    "40000"
  ),
  createData(
    "9",
    "124569",
    "2/04/22",
    "higher",
    "12/02/21",
    "12/02/23",
    "50000"
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
    <Fragment>
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
    </Fragment>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function PaymentsTable() {
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
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#6b778c",
                }}
              >
                SLNO.
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#6b778c",
                }}
              >
                Transaction ID
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#6b778c",
                }}
              >
                Date
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#6b778c",
                }}
              >
                Package Name
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#6b778c",
                }}
              >
                Start date
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#6b778c",
                }}
              >
                Expiry date
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#6b778c",
                }}
              >
                Amount
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#6b778c",
                }}
              >
                Action
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
                <TableCell align="left">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {row.transactionId}
                  </Box>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="left">{row.packageName}</TableCell>
                <TableCell align="left">{row.startDate}</TableCell>
                <TableCell align="left">{row.expiryDate}</TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell component="th" scope="row">
                  <RemoveRedEyeIcon sx={{ color: "primary.main" }} />
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
      </Box>
    </Fragment>
  );
}

export default PaymentsTable;
