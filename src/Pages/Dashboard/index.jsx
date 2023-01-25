import React, { Fragment, useState } from "react";
import DatePicker from "react-date-picker";
import { Typography, Box } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import EmailIcon from "@mui/icons-material/Email";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DocumentTitle from "../../Components/DocumentTitle";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  DocumentTitle("Dashboard | Tax Receit");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          pl: 0,
          position: "relative",
        }}
      >
        <Box
          onClick={toggleCalendar}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <CalendarMonthIcon sx={{ fontSize: "55px", color: "#234e8e" }} />
          <Typography
            sx={{
              fontSize: { xs: "17px", md: "24px" },
              fontWeight: "700",
              color: "#234e8e",
            }}
          >
            {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
              dates[0].endDate,
              "MM/dd/yyyy"
            )}`}
          </Typography>
        </Box>
        {showCalendar && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDates([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            className="date"
          />
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          p: 2,
          pl: 0,
          gap: 1,
        }}
      >
        <Box
          sx={{
            backgroundImage: "linear-gradient(135deg, #f5af19,#f12711)",
            p: 1.5,
            py: 3,
            mr: 1,
            borderRadius: "8px",
            width: { xs: "180px" },
            minHeight: "260px",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <LibraryAddIcon
              sx={{
                height: "60px",
                width: "60px",
                color: "white",
                p: 1.3,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #f12711 50%,#f5af19 50%)",
              }}
            />
            <Typography
              sx={{ fontSize: "20px", fontWeight: "700", color: "white" }}
            >
              46
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "600",
                color: "white",
              }}
            >
              Donations
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "600",
                color: "white",
                textAlign: "center",
              }}
            >
              This is transactions status
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(130deg, #8a2387, #e94057, #f27121)",
            p: 1.5,
            py: 3,
            mr: 1,
            borderRadius: "8px",
            width: { xs: "180px" },
            minHeight: "260px",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <BorderColorIcon
              sx={{
                height: "60px",
                width: "60px",
                color: "white",
                p: 1.3,
                backgroundImage:
                  "linear-gradient(130deg, #e94057 50%, #8a2387 50%)",
                borderRadius: "50%",
              }}
            />
            <Typography
              sx={{ fontSize: "20px", fontWeight: "700", color: "white" }}
            >
              35
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "600",
                color: "white",
              }}
            >
              Orders
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "600",
                color: "white",
                textAlign: "center",
              }}
            >
              This is orders status
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(130deg, #0f2027, #203a43, #2c5364)",
            p: 1.5,
            py: 3,
            mr: 1,
            borderRadius: "8px",
            width: { xs: "180px" },
            minHeight: "260px",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <AssignmentIndIcon
              sx={{
                height: "60px",
                width: "60px",
                color: "white",
                p: 1.3,
                backgroundImage:
                  "linear-gradient(130deg, #2653c4 50%, #203a43 50%)",
                borderRadius: "50%",
              }}
            />
            <Typography
              sx={{ fontSize: "20px", fontWeight: "700", color: "white" }}
            >
              65
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "600",
                color: "white",
              }}
            >
              Clients
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "600",
                color: "white",
                textAlign: "center",
              }}
            >
              This is clients status
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage: "linear-gradient(130deg, #b92b27, #1565C0)",
            p: 1.5,
            py: 3,
            mr: 1,
            borderRadius: "8px",
            width: { xs: "180px" },
            minHeight: "260px",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <PictureAsPdfIcon
              sx={{
                height: "60px",
                width: "60px",
                color: "white",
                p: 1.3,
                backgroundImage:
                  "linear-gradient(130deg, #b29b27 50%, #1565C0 50%)",
                borderRadius: "50%",
              }}
            />
            <Typography
              sx={{ fontSize: "20px", fontWeight: "700", color: "white" }}
            >
              23
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "600",
                color: "white",
              }}
            >
              PDF
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "600",
                color: "white",
                textAlign: "center",
              }}
            >
              This is the Pdf status
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage: "linear-gradient(120deg, #009FFF, #ec2F4B)",
            p: 1.5,
            py: 3,
            mr: 1,
            borderRadius: "8px",
            width: { xs: "180px" },
            minHeight: "260px",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <EmailIcon
              sx={{
                height: "60px",
                width: "60px",
                color: "white",
                p: 1.3,
                backgroundImage:
                  "linear-gradient(120deg, #ec2F4B 50%, #009FFF 50%)",
                borderRadius: "50%",
              }}
            />
            <Typography
              sx={{ fontSize: "20px", fontWeight: "700", color: "white" }}
            >
              43
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "600",
                color: "white",
              }}
            >
              Emails
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "600",
                color: "white",
                textAlign: "center",
              }}
            >
              This is emails status
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(130deg, #03001e, #7303c0, #ec38bc)",
            p: 1.5,
            py: 3,
            mr: 1,
            borderRadius: "8px",
            width: { xs: "180px" },
            minHeight: "260px",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <CurrencyExchangeIcon
              sx={{
                height: "60px",
                width: "60px",
                color: "white",
                p: 1.3,
                backgroundImage:
                  "linear-gradient(130deg, #ec38bc 50%, #8bc34a 50%)",
                borderRadius: "50%",
              }}
            />
            <Typography
              sx={{ fontSize: "20px", fontWeight: "700", color: "white" }}
            >
              46
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "600",
                color: "white",
              }}
            >
              Revenue
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "600",
                color: "white",
                textAlign: "center",
              }}
            >
              This is revenue status
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* tables */}
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
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "grey", fontWeight: "700" }}>
                  Client
                </TableCell>
                <TableCell
                  sx={{ color: "grey", fontWeight: "700" }}
                  align="right"
                >
                  Donations
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{ color: "primary.main", fontWeight: "600" }}
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "grey", fontWeight: "700" }}>
                  Client
                </TableCell>
                <TableCell
                  sx={{ color: "grey", fontWeight: "700" }}
                  align="right"
                >
                  Donations
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{ color: "primary.main", fontWeight: "600" }}
                    component="th"
                    scope="row"
                  >
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
          height: "40vh",
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
