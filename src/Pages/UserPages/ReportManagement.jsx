import React, { Fragment, useState } from "react";
import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ReportModal from "../../Components/ReportModal/ReportModal";
import ReportTable from "../../Components/UserTables/ReportTable";
import DocumentTitle from "../../Components/DocumentTitle";

function ReportManagement() {
  DocumentTitle("Report Management | Tax Receit");
  const [showModal, setShowModal] = useState(false);

  function openShowModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }
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
          REPORT MANAGEMENT
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <HomeIcon />
          <Typography sx={{ fontSize: "0.875rem" }}>
            / Report Management
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "100px",
          display: "flex",
          justifyContent: { xs: "none", sm: "flex-end" },
          pr: 2,
          pb: 2,
        }}
      >
        <button onClick={openShowModal} className="packageBtn">
          <AddCircleIcon sx={{ mr: 2, height: "15px", width: "15px" }} />
          Add New Report
        </button>
        <ReportModal
          title="Add New Report"
          show={showModal}
          close={closeModal}
        />
      </Box>
      <Box sx={{}}>
        <ReportTable />
      </Box>
    </Fragment>
  );
}

export default ReportManagement;
