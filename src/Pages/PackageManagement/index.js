import React, { Fragment, useState } from "react";
import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PackageTable from "../../Components/Table/PackageTable";
import DocumentTitle from "../../Components/DocumentTitle";
import PackageModal from "../../Components/PackageModal";

function PackageManagement() {
  DocumentTitle("Package Management | Tax Receit");

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
          PACKAGE MANAGEMENT
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <HomeIcon />
          <Typography sx={{ fontSize: "0.875rem" }}>
            / Package Management
          </Typography>
        </Box>
      </Box>
      {/* don't touch this box, don't put anything else except package button in this box */}
      <Box
        sx={{
          height: "100px",
          display: "flex",
          justifyContent: "flex-end",
          pr: 2,
          pb: 2,
        }}
      >
        <button onClick={openShowModal} className="packageBtn">
          <AddCircleIcon sx={{ mr: 2, height: "15px", width: "15px" }} />
          Add New Package
        </button>
        <PackageModal show={showModal} close={closeModal} />
      </Box>
      <PackageTable />
    </Fragment>
  );
}

export default PackageManagement;
