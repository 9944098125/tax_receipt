import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <Fragment>
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* sidebar links */}
        <Box
          sx={{
            backgroundColor: "primary.main",
            width: { xs: "20vw", sm: "13vw", md: "20vw" },
          }}
        >
          <Typography sx={{ fontSize: "50px" }}>Hello sidebar</Typography>
        </Box>
        {/* Navbar and main outlet */}
        <Box sx={{ width: "80vw", height: "5vh" }}>
          <Box sx={{ backgroundColor: "#e8eaf6" }}>
            <Typography sx={{ fontSize: "50px" }}>Navbar</Typography>
          </Box>
          {/* scrollable content */}
          <Box
            sx={{
              height: { xs: "86vh", sm: "88vh", md: "88vh" },
              overflowY: "scroll",
              p: 2,
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Sidebar;
