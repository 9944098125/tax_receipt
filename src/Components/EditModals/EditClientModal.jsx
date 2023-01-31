import React, { Fragment } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import { Box, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditClient from "../Edit/EditClient";
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "85vw", sm: "70vw", md: "60vw" },
  backgroundColor: "white",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "space-between",
  maxHeight: { xs: "90vh", sm: "80vh" },
  overflowY: "scroll",
  overflowX: "hidden",
};

function EditClientModal({ show, close }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Modal open={show} onClose={close} hideBackdrop disableScrollLock="true">
        <Box sx={style}>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <Tabs
                sx={{ p: 0 }}
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  sx={{
                    fontSize: { xs: "5px", md: "16px" },
                    fontWeight: "700",
                  }}
                  label="Edit client"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{
                    fontSize: { xs: "5px", md: "16px" },
                    fontWeight: "700",
                  }}
                  label="Assign package"
                  {...a11yProps(1)}
                />

                <Tab
                  sx={{
                    fontSize: { xs: "5px", md: "16px" },
                    fontWeight: "700",
                  }}
                  label="Password settings"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{
                    fontSize: { xs: "5px", ms: "16px" },
                    fontWeight: "700",
                  }}
                  label="Add more"
                  {...a11yProps(3)}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <EditClient />
            </TabPanel>
            <TabPanel value={value} index={1}>
              Assign package
            </TabPanel>
            <TabPanel value={value} index={2}>
              Password settings
            </TabPanel>
            <TabPanel value={value} index={3}>
              Add more
            </TabPanel>
          </Box>
          <CloseIcon sx={{ cursor: "pointer" }} onClick={close} />
        </Box>
      </Modal>
    </Fragment>
  );
}

export default EditClientModal;
