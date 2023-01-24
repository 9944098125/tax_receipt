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

function createData(sno, name, customerLimit, pdfLimit, emailLimit, price) {
  return {
    sno,
    name,
    customerLimit,
    pdfLimit,
    emailLimit,
    price,
  };
}

const rows = [
  createData(1, "Premium", 12, 10, 14, 15000),
  createData(1, "Premium", 12, 10, 14, 15000),
  createData(1, "Premium", 12, 10, 14, 15000),
  createData(1, "Premium", 12, 10, 14, 15000),
  createData(1, "Premium", 12, 10, 14, 15000),

  createData(1, "Premium", 12, 10, 14, 15000),
  createData(1, "Premium", 12, 10, 14, 15000),
  createData(1, "Premium", 12, 10, 14, 15000),
  createData(1, "Premium", 12, 10, 14, 15000),
  createData(1, "Premium", 12, 10, 14, 15000),
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

function PackageTable() {
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
                Name
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "800",
                  fontSize: "12px",
                  color: "#00000099",
                }}
              >
                Customer Limit
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "800",
                  fontSize: "12px",
                  color: "#00000099",
                }}
              >
                PDF Limit
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "800",
                  fontSize: "12px",
                  color: "#00000099",
                }}
              >
                Email Limit
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "800",
                  fontSize: "12px",
                  color: "#00000099",
                }}
              >
                Price
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "800",
                  fontSize: "12px",
                  color: "#00000099",
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
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.customerLimit}</TableCell>
                <TableCell component="th" scope="row">
                  {row.pdfLimit}
                </TableCell>
                <TableCell align="left">{row.emailLimit}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell component="th" scope="row">
                  <ModeEditIcon
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
        <Box
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

export default PackageTable;
