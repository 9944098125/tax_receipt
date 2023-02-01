import React, { Fragment, useState } from "react";
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
import "./cardsStyles.css";
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
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          flexWrap: "wrap",
          pt: 4,
          pb: 4,
          pl: 0,
          gap: { xs: "20px", sm: "30px", md: "25px" },
        }}
      >
        <div className="counter parent">
          <div className="counter-icon">
            <LibraryAddIcon
              className="child"
              sx={{
                height: "40px",
                width: "50px",
                color: "white",
              }}
            />
          </div>
          <div className="counter-content">
            <h3>46</h3>
            <span className="counter-value">Donations</span>
            <Typography sx={{ fontSize: "12px" }}>
              This is the donations status
            </Typography>
          </div>
        </div>

        <div className="counterP parent">
          <div className="counterP-icon">
            <BorderColorIcon
              className="child"
              sx={{
                height: "40px",
                width: "50px",
                color: "white",
              }}
            />
          </div>
          <div className="counterP-content">
            <h3>35</h3>
            <span className="counterP-value">Orders</span>
            <Typography sx={{ fontSize: "12px" }}>
              This is the orders status
            </Typography>
          </div>
        </div>

        <div className="counterPink parent">
          <div className="counterPink-icon">
            <AssignmentIndIcon
              className="child"
              sx={{
                height: "40px",
                width: "50px",
                color: "white",
              }}
            />
          </div>
          <div className="counterPink-content">
            <h3>54</h3>
            <span className="counterPink-value">Clients</span>
            <Typography sx={{ fontSize: "12px" }}>
              This is the clients status
            </Typography>
          </div>
        </div>

        <div className="counterAmber parent">
          <div className="counterAmber-icon">
            <PictureAsPdfIcon
              className="child"
              sx={{
                height: "40px",
                width: "50px",
                color: "white",
              }}
            />
          </div>
          <div className="counterAmber-content">
            <h3>23</h3>
            <span className="counterAmber-value">PDF</span>
            <Typography sx={{ fontSize: "12px" }}>
              This is the pdf status
            </Typography>
          </div>
        </div>

        <div className="counterTeal parent">
          <div className="counterTeal-icon">
            <EmailIcon
              className="child"
              sx={{
                height: "40px",
                width: "50px",
                color: "white",
              }}
            />
          </div>
          <div className="counterTeal-content">
            <h3>67</h3>
            <span className="counterTeal-value">Emails</span>
            <Typography sx={{ fontSize: "12px" }}>
              This is the emails status
            </Typography>
          </div>
        </div>

        <div className="counterRed parent">
          <div className="counterRed-icon">
            <CurrencyExchangeIcon
              className="child"
              sx={{
                height: "40px",
                width: "50px",
                color: "white",
              }}
            />
          </div>
          <div className="counterRed-content">
            <h3>36</h3>
            <span className="counterRed-value">Revenue</span>
            <Typography sx={{ fontSize: "12px" }}>
              This is the revenue status
            </Typography>
          </div>
        </div>
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
