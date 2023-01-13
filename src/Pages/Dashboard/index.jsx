import React, { Fragment } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import EmailIcon from "@mui/icons-material/Email";
import Person2Icon from "@mui/icons-material/Person2";

function Dashboard() {
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
    </Fragment>
  );
}

export default Dashboard;
