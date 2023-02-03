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
import { TableHead } from "@mui/material";

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

export function CustomersTable() {
  function createData(receiptNo, name, date) {
    return {
      receiptNo,
      name,
      date,
    };
  }

  const rows = [
    createData("123", "Srini", new Date("12/12/21").toLocaleString()),
    createData("321", "Savithri", new Date("01/01/22").toLocaleString()),
    createData("231", "Simon", new Date("12/12/21").toLocaleString()),
    createData("453", "Naveen", new Date("12/12/21").toLocaleString()),
    createData("345", "Harsha", new Date("12/01/22").toLocaleString()),
    createData("435", "sravan", new Date("12/12/21").toLocaleString()),
    createData("678", "vamsee", new Date("12/02/22").toLocaleString()),
  ];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
                Receipt Number
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#6b778c",
                }}
              >
                Name
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
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {row.receiptNo}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell component="th" scope="row">
                  Mon Jan 30 2023 15:57:08 GMT+0530 (India Standard Time)
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
    </Fragment>
  );
}

export function PdfTable() {
  function createData(receiptNo, customerName, date) {
    return {
      receiptNo,
      customerName,
      date,
    };
  }

  const rows = [
    createData("1245", "Krishna", new Date("12/12/22").toLocaleString()),
    createData("1543", "Priyanka", new Date("15/11/22").toLocaleString()),
    createData("1278", "Sravan", new Date("12/01/23").toLocaleString()),
  ];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
                Receipt Number
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#6b778c",
                }}
              >
                Customer Name
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
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {row.receiptNo}
                </TableCell>
                <TableCell align="left">{row.customerName}</TableCell>
                <TableCell component="th" scope="row">
                  Mon Jan 30 2023 15:57:08 GMT+0530 (India Standard Time)
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
    </Fragment>
  );
}

export function SentMailTable() {
  function createData(receiptNo, customerName, date, emailSentTo, cc, bcc) {
    return {
      receiptNo,
      customerName,
      date,
      emailSentTo,
      cc,
      bcc,
    };
  }

  const rows = [
    createData(
      "12216",
      "Satish",
      new Date("01/01/21").toLocaleString(),
      "Srinivas",
      "Abhik",
      "Chaitra"
    ),
    createData(
      "34532",
      "Deva",
      new Date("01/01/21").toLocaleString(),
      "Praneetha",
      "Abhik",
      "Chaitra"
    ),
    createData(
      "2142",
      "Nani",
      new Date("01/01/21").toLocaleString(),
      "vikram",
      "Abhik",
      "Chaitra"
    ),
    createData(
      "3453",
      "Harsha",
      new Date("01/01/21").toLocaleString(),
      "vineesh",
      "Abhik",
      "Chaitra"
    ),
  ];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
                Receipt Number
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#6b778c",
                }}
              >
                Customer Name
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
                Email sent to
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#6b778c",
                }}
              >
                CC
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#6b778c",
                }}
              >
                BCC
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
                  {row.receiptNo}
                </TableCell>
                <TableCell align="left">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {row.customerName}
                  </Box>
                </TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell component="th" scope="row">
                  {row.emailSentTo}
                </TableCell>
                <TableCell align="left">{row.cc}</TableCell>
                <TableCell component="th" scope="row">
                  {row.bcc}
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
    </Fragment>
  );
}
