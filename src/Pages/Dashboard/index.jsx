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
  AreaChart,
  Area,
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
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const data2 = [
    {
      name: "Page A",
      uv: 2000,
      pv: 5400,
      amt: 3400,
    },
    {
      name: "Page B",
      uv: 6000,
      pv: 3398,
      amt: 4210,
    },
    {
      name: "Page C",
      uv: 8000,
      pv: 10800,
      amt: 3290,
    },
    {
      name: "Page D",
      uv: 8780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 9890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 10390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 11490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "#00254D",
              fontSize: "0.875rem",
              fontWeight: "700",
              ml: 1,
            }}
          >
            Choose A Date
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CalendarMonthIcon
              onClick={toggleCalendar}
              sx={{
                fontSize: "45px",
                color: "#00254d",
                cursor: "pointer",
                mt: -0.3,
              }}
            />
            <Typography
              onClick={toggleCalendar}
              sx={{
                fontSize: { xs: "15px", md: "19px" },
                fontWeight: "700",
                color: "#00254d",
                border: "2px solid #234e8e",
                p: 0.3,
                borderRadius: "9px",
                cursor: "pointer",
              }}
            >
              {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                dates[0].endDate,
                "MM/dd/yyyy"
              )}`}
            </Typography>
          </Box>
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
            backgroundImage:
              "linear-gradient(135deg, #2196f3 30%, #ff80ab, #e91e63)",
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
                background: "linear-gradient(135deg, #2196f3 50%,#e91e63 50%)",
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
            backgroundImage: "linear-gradient(130deg, #1b5e20, #66bb6a)",
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
                  "linear-gradient(130deg, #66bb6a 50%, #1b5e20 50%)",
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
              "linear-gradient(130deg, #ff8a80, #f44336, #b71c1c)",
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
                  "linear-gradient(130deg, #b71c1c 50%, #ff8a80 50%)",
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
            backgroundImage: "linear-gradient(130deg, #e91e63, #2196f3)",
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
                  "linear-gradient(130deg, #2196f3 50%, #e91e63 50%)",
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
            backgroundImage: "linear-gradient(120deg, #ff9800, #ffeb3b)",
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
                  "linear-gradient(120deg, #ffeb3b 50%, #ff9800 50%)",
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
                  "linear-gradient(130deg, #ec38bc 50%, #7303c0 50%)",
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
                <TableCell>
                  <Typography sx={{ color: "#6b778c", fontWeight: "700" }}>
                    Client
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography sx={{ color: "#6b778c", fontWeight: "700" }}>
                    Donations
                  </Typography>
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
                    sx={{ color: "#00254d", fontWeight: "600" }}
                    component="th"
                    scope="row"
                  >
                    <Typography sx={{ color: "#00254d", fontSize: "14.5px" }}>
                      {row.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ color: "#00254d", fontSize: "14.5px" }}>
                      {row.amount}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography sx={{ color: "#6b778c", fontWeight: "700" }}>
                    Clients
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography sx={{ color: "#6b778c", fontWeight: "700" }}>
                    Donations
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography sx={{ color: "#00254d", fontSize: "14.5px" }}>
                      {row.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ color: "#00254d", fontSize: "14.5px" }}>
                      {row.amount}
                    </Typography>
                  </TableCell>
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
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
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
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
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
            <Area
              connectNulls
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Fragment>
  );
}

export default Dashboard;
