import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import {
  CustomersTable,
  PdfTable,
  SentMailTable,
} from "../../Components/UserTables/TransactionsTables";
import DocumentTitle from "../../Components/DocumentTitle";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0, mt: 2 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function UserTransactions() {
  DocumentTitle("Transactions | Tax Receit");
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          TRANSACTIONS
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <HomeIcon />
          <Typography sx={{ fontSize: "0.875rem" }}>/ Transactions</Typography>
        </Box>
      </Box>

      <Box sx={{ p: 0, mt: 4 }}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="scrollable"
            >
              <Tab
                sx={{
                  fontSize: { xs: "8px", md: "16px" },
                  fontWeight: "700",
                }}
                label="customers"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  fontSize: { xs: "8px", md: "16px" },
                  fontWeight: "700",
                }}
                label="pdf transactions"
                {...a11yProps(1)}
              />
              <Tab
                sx={{
                  fontSize: { xs: "8px", md: "16px" },
                  fontWeight: "700",
                }}
                label="sent mail"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <CustomersTable />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PdfTable />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <SentMailTable />
          </TabPanel>
        </Box>
      </Box>
    </Fragment>
  );
}

export default UserTransactions;
