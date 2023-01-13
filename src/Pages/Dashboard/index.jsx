import React, { Fragment } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { Typography, Box } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import EmailIcon from "@mui/icons-material/Email";
import Person2Icon from "@mui/icons-material/Person2";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  function createData(name, amount) {
    return { name, amount };
  }

  const rows = [
    createData("Teknotrait", 459333),
    createData("C company", 345343),
    createData("z-company", 345343),
    createData("A company", 5643345),
    createData("Tek Park", 456354),
    createData("SVR & co.", 3445534),
  ];

  const data1 = [
    { name: "Page A", uv: 4000 },
    { name: "Page B", uv: 3000 },
    { name: "Page C", uv: 2000 },
    { name: "Page D", uv: 5000 },
    { name: "Page E", uv: 1890 },
    { name: "Page F", uv: 2390 },
    { name: "Page G", uv: 3490 },
  ];

  const data2 = [
    { name: "JAN", uv: 2000 },
    { name: "FEB", uv: 1000 },
    { name: "MAR", uv: 6000 },
    { name: "APR", uv: 3000 },
    { name: "MAY", uv: 5890 },
    { name: "JUNE", uv: 1390 },
    { name: "JUL", uv: 1490 },
  ];

  return (
    <Fragment>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <DateRangePicker
          initialSettings={{ startDate: "01/01/2020", endDate: "01/15/2020" }}
        >
          <input type="text" className="form-control date" />
        </DateRangePicker>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            color: "#234e8e",
            ml: -30,
            display: { xs: "none", md: "block" },
          }}
        >
          Select start date and end date
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          p: 2,
          gap: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#009688",
            borderRadius: "8px",
            p: 2.5,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{ fontSize: "17px", fontWeight: "600", color: "white" }}
            >
              46
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "500", color: "white" }}
            >
              Donations
            </Typography>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "400", color: "white" }}
            >
              This is transaction status
            </Typography>
          </Box>
          <Person2Icon
            sx={{
              height: "40px",
              width: "40px",
              p: 0.3,
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "#607d8b",
            borderRadius: "8px",
            p: 2.5,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{ fontSize: "17px", fontWeight: "600", color: "white" }}
            >
              30
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "500", color: "white" }}
            >
              Orders
            </Typography>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "400", color: "white" }}
            >
              This is orders status
            </Typography>
          </Box>
          <PaidIcon
            sx={{
              backgroundColor: "white",
              borderRadius: "50%",
              height: "40px",
              width: "40px",
            }}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "#f44336",
            borderRadius: "8px",
            p: 2.5,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{ fontSize: "17px", fontWeight: "600", color: "white" }}
            >
              29
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "500", color: "white" }}
            >
              Clients
            </Typography>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "400", color: "white" }}
            >
              This is client status
            </Typography>
          </Box>
          <Person2Icon
            sx={{
              height: "40px",
              width: "40px",
              p: 0.3,
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "#ffc107",
            borderRadius: "8px",
            p: 2.5,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{ fontSize: "17px", fontWeight: "600", color: "white" }}
            >
              1
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "500", color: "white" }}
            >
              PDF
            </Typography>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "400", color: "white" }}
            >
              This is pdf status
            </Typography>
          </Box>
          <PictureAsPdfIcon
            sx={{
              height: "40px",
              width: "40px",
              backgroundColor: "white",
              borderRadius: "50%",
              p: 0.3,
            }}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "#00bcd4",
            borderRadius: "8px",
            p: 2.5,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{ fontSize: "17px", fontWeight: "600", color: "white" }}
            >
              12
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "500", color: "white" }}
            >
              Emails
            </Typography>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "400", color: "white" }}
            >
              This is emails status
            </Typography>
          </Box>
          <EmailIcon
            sx={{
              height: "40px",
              width: "40px",
              backgroundColor: "white",
              borderRadius: "50%",
              p: 0.3,
            }}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "#ec407a",
            borderRadius: "8px",
            p: 2.5,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{ fontSize: "17px", fontWeight: "600", color: "white" }}
            >
              55
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "500", color: "white" }}
            >
              Revenue
            </Typography>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "400", color: "white" }}
            >
              This is revenue status
            </Typography>
          </Box>
          <EmailIcon
            sx={{
              height: "40px",
              width: "40px",
              backgroundColor: "white",
              borderRadius: "50%",
              p: 0.3,
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          gap: 5,
          mb: 5,
        }}
      >
        <TableContainer sx={{ border: "2px solid #234e8e" }} component={Paper}>
          <Table aria-label="simple table">
            <TableHead sx={{ backgroundColor: "grey" }}>
              <TableRow>
                <TableCell sx={{ color: "white", fontWeight: "700" }}>
                  Client
                </TableCell>
                <TableCell
                  sx={{ color: "white", fontWeight: "700" }}
                  align="right"
                >
                  Donations
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer sx={{ border: "2px solid #234e8e" }} component={Paper}>
          <Table aria-label="simple table">
            <TableHead sx={{ backgroundColor: "grey" }}>
              <TableRow>
                <TableCell sx={{ color: "white", fontWeight: "700" }}>
                  Client
                </TableCell>
                <TableCell
                  sx={{ color: "white", fontWeight: "700" }}
                  align="right"
                >
                  Donations
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        sx={{
          p: 1.5,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          color: "primary.main",
          height: "50vh",
          maxWidth: "1024px",
          gap: 5,
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={200}
            data={data1}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={200}
            data={data2}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              connectNulls
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Fragment>
  );
}

export default Dashboard;
