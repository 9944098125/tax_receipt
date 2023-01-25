import React, { Fragment } from "react";
import HomeIcon from "@mui/icons-material/Home";
import DocumentTitle from "../../Components/DocumentTitle";
import { Box, Typography } from "@mui/material";
import {
  ActiveTable,
  InactiveTable,
  PendingTable,
} from "../../Components/Table/TableWithHeader";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";

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

function ClientManagement() {
  DocumentTitle("Client Management | Tax Receit");

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
          CLIENT MANAGEMENT
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <HomeIcon />
          <Typography sx={{ color: "#00254d", fontSize: "0.875rem" }}>
            / Client Management
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: 0, mt: 4 }}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ fontSize: { xs: "8px", md: "16px" }, fontWeight: "600" }}
                label="Pending"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ fontSize: { xs: "8px", md: "16px" }, fontWeight: "600" }}
                label="Active"
                {...a11yProps(1)}
              />
              <Tab
                sx={{ fontSize: { xs: "8px", md: "16px" }, fontWeight: "600" }}
                label="In Active"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <PendingTable />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ActiveTable status="Active" />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <InactiveTable status="Inactive" />
          </TabPanel>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <button className="delete-btn">
          <DeleteIcon />
          Delete All
        </button>
      </Box>
    </Fragment>
  );
}

export default ClientManagement;
