import React, { Fragment, useState } from "react";
import { Box, Typography } from "@mui/material";

import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "../Dashboard/cardsStyles.css";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import EmailIcon from "@mui/icons-material/Email";
import DocumentTitle from "../../Components/DocumentTitle";

function UserDashboard() {
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
            <h3>12</h3>
            <span className="counter-value">Donor</span>
            <Typography sx={{ fontSize: "12px" }}>
              This is the donations status
            </Typography>
          </div>
        </div>

        <div className="counterP parent">
          <div className="counterP-icon">
            <PictureAsPdfIcon
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
            <span className="counterP-value">PDF Added</span>
            <Typography sx={{ fontSize: "12px" }}>
              This is the pdf status
            </Typography>
          </div>
        </div>

        <div className="counterPink parent">
          <div className="counterPink-icon">
            <EmailIcon
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
            <span className="counterPink-value">Emails sent</span>
            <Typography sx={{ fontSize: "12px" }}>
              This is the emails status
            </Typography>
          </div>
        </div>
      </Box>
    </Fragment>
  );
}

export default UserDashboard;
