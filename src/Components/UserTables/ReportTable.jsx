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
import ReportModal from "../ReportModal/ReportModal";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import { Link } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function createData(sno, name, date, customerCount, paymentMode) {
  return {
    sno,
    name,
    date,
    customerCount,
    paymentMode,
  };
}

const rows = [
  createData("1", "report 1", "12/04/22", "5", "online"),
  createData("2", "report 2", "1/04/22", "7", "cash"),
  createData("3", "report 3", "17/04/22", "51", "online"),
  createData("4", "report 4", "14/04/22", "50", "online"),
  createData("5", "report 5", "13/04/22", "15", "cheque"),
  createData("6", "report 6", "19/04/22", "25", "cash"),
  createData("7", "report 7", "17/04/22", "55", "online"),
  createData("8", "report 8", "11/04/22", "65", "cash"),
  createData("9", "report 9", "1/04/22", "58", "online"),
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

function ReportTable() {
  const oldData = {
    sno: "",
    name: "",
    date: "",
    customerCount: "",
    paymentMode: "",
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [show, setShow] = React.useState(false);

  const [showEditor, setShowEditor] = React.useState({
    id: "",
    boolean: false,
    dataWithId: { ...oldData },
  });

  function updateRow(row) {
    setShowEditor({
      id: row.sno,
      boolean: !showEditor.boolean,
      dataWithId: { ...row },
    });
    console.log("report row: ", row);
  }

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

  const showModal = (row) => {
    setShow(true);
    updateRow(row);
  };

  const closeModal = () => {
    setShow(false);
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
                Report Name
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#6b778c",
                }}
              >
                Customer Count
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#6b778c",
                }}
              >
                Payment Mode
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#6b778c",
                }}
              >
                Actions
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
                    {row.name} (<CalendarMonthIcon sx={{ fontSize: "15px" }} />
                    {row.date})
                  </Box>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.customerCount}
                </TableCell>
                <TableCell align="left">{row.paymentMode}</TableCell>
                <TableCell component="th" scope="row">
                  <ModeEditIcon
                    onClick={() => showModal(row)}
                    sx={{
                      color: "primary.dark",
                      fontSize: "17px",
                      cursor: "pointer",
                      mr: 1,
                    }}
                  />
                  <DeleteIcon
                    sx={{ color: "red", fontSize: "17px", cursor: "pointer" }}
                  />
                  <Link
                    to="/user/customerManagement"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <FolderCopyIcon
                      sx={{
                        color: "primary.main",
                        fontSize: "17px",
                        cursor: "pointer",
                      }}
                    />
                  </Link>
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
      {show && (
        <ReportModal
          title="Edit Report"
          show={show}
          close={closeModal}
          showEditor={showEditor}
        />
      )}
    </Fragment>
  );
}

export default ReportTable;
