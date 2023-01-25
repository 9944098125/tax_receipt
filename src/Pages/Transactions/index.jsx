import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import DocumentTitle from "../../Components/DocumentTitle";
import HomeIcon from "@mui/icons-material/Home";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TransactionsTable from "../../Components/Table/TransactionsTable";
import PropTypes from "prop-types";

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

function Transactions() {
  DocumentTitle("Transactions | Tax Receit");

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          TRANSACTIONS
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <HomeIcon />
          <Typography sx={{ color: "primary.dark", fontSize: "0.875rem" }}>
            / Transactions
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 3, py: 2 }}>
        <select className="org-selection" defaultValue="sel">
          <option value="sel">Select Organization</option>
          <option value="tek">Teknotrait</option>
          <option value="rum">Rumango</option>
          <option value="cen">Cenzus</option>
          <option value="cog">Cognizant</option>
          <option value="ibm">IBM</option>
        </select>
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
                label="Customers"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ fontSize: { xs: "8px", md: "16px" }, fontWeight: "600" }}
                label="PDF Generated"
                {...a11yProps(1)}
              />
              <Tab
                sx={{ fontSize: { xs: "8px", md: "16px" }, fontWeight: "600" }}
                label="Sent Mail"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <TransactionsTable cps={"customers"} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TransactionsTable cps={"pdfGen"} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TransactionsTable cps={"sentMail"} />
          </TabPanel>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Transactions;
