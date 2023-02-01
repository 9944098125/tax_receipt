import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CustomerTable from "../../Components/UserTables/CustomerManagementDatatable";

function CustomerManagement() {
  return (
    <Fragment>
      <Box
        sx={{
          color: "#00254d",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
        }}
      >
        <Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>
          CUSTOMER MANAGEMENT
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <HomeIcon />
          <Typography sx={{ fontSize: "0.875rem" }}>
            / Customer Management
          </Typography>
        </Box>
      </Box>
      <CustomerTable />
    </Fragment>
  );
}

export default CustomerManagement;
