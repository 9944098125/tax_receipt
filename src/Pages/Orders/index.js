import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import React, { Fragment } from "react";
import OrdersTable from "../../Components/Table/OrdersTable";
import DocumentTitle from "../../Components/DocumentTitle";

function Orders() {
  DocumentTitle("Orders | Tax Receit");
  return (
    <Fragment>
      <Box
        sx={{
          backgroundColor: "primary.bg",
          color: "primary.dark",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
        }}
      >
        <Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>
          Orders
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <HomeIcon />
          <Typography sx={{ color: "primary.dark", fontSize: "0.875rem" }}>
            / orders
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 1 }}>
        <OrdersTable />
      </Box>
    </Fragment>
  );
}

export default Orders;
