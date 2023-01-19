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

function TransactionsTable({ cps }) {
  function createData(clientId, clientName, receiptNo, name, date) {
    return { clientId, clientName, receiptNo, name, date };
  }

  const rows =
    cps === "customers"
      ? [
          createData(
            3242,
            "Random guy",
            143,
            "mike",
            "Wed Dec 14 2022 17:03:27 GMT+0530 (India Standard Time)"
          ),
          createData(
            3242,
            "Random guy",
            143,
            "mike",
            "Wed Dec 14 2022 17:03:27 GMT+0530 (India Standard Time)"
          ),
          createData(
            3242,
            "Random guy",
            143,
            "mike",
            "Wed Dec 14 2022 17:03:27 GMT+0530 (India Standard Time)"
          ),
          createData(
            3242,
            "Random guy",
            143,
            "mike",
            "Wed Dec 14 2022 17:03:27 GMT+0530 (India Standard Time)"
          ),
          createData(
            3242,
            "Random guy",
            143,
            "mike",
            "Wed Dec 14 2022 17:03:27 GMT+0530 (India Standard Time)"
          ),
          createData(
            3242,
            "Random guy",
            143,
            "mike",
            "Wed Dec 14 2022 17:03:27 GMT+0530 (India Standard Time)"
          ),
          createData(
            3242,
            "Random guy",
            143,
            "mike",
            "Wed Dec 14 2022 17:03:27 GMT+0530 (India Standard Time)"
          ),
          createData(
            3242,
            "Random guy",
            143,
            "mike",
            "Wed Dec 14 2022 17:03:27 GMT+0530 (India Standard Time)"
          ),
          createData(
            3242,
            "Random guy",
            143,
            "mike",
            "Wed Dec 14 2022 17:03:27 GMT+0530 (India Standard Time)"
          ),
        ]
      : cps === "pdfGen"
      ? [
          createData(
            3242,
            "PDF Generated",
            143,
            "mike",
            "Wed Dec 14 2022 17:03:27 GMT+0530 (India Standard Time)"
          ),
        ]
      : cps === "sentMail"
      ? [
          createData(
            3242,
            "sent mail",
            143,
            "mike",
            "Wed Dec 14 2022 17:03:27 GMT+0530 (India Standard Time)"
          ),
        ]
      : null;

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
                Receipt Number
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "600",
                  fontSize: "12px",
                  borderBottom: "2px solid #234e8e",
                  color: "white",
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "600",
                  fontSize: "12px",
                  borderBottom: "2px solid #234e8e",
                  color: "white",
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
                  {row.clientId}
                </TableCell>
                <TableCell align="left">{row.clientName}</TableCell>
                <TableCell align="left">{row.receiptNo}</TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.date}</TableCell>
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
          // backgroundColor: "primary.bg",
          px: 1,
          mt: 2,
          // borderBottom: "2px solid #234e8e",
          // borderLeft: "2px solid #234e8e",
          // borderRight: "2px solid #234e8e",
          // borderRadius: "4px",
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

export default TransactionsTable;
