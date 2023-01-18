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
          backgroundColor: "primary.bg",
          color: "primary.dark",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
        }}
      >
        <Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>
          Package Management
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <HomeIcon />
          <Typography sx={{ color: "primary.dark", fontSize: "0.875rem" }}>
            / Package Management
          </Typography>
        </Box>
      </Box>
      {/* don't touch this box, don't put anything else except package button in this box */}
      <Box sx={{ height: "100px" }}>
        <button onClick={openShowModal} className="packageBtn">
          <AddCircleIcon sx={{ mr: 2, height: "15px", width: "15px" }} />
          Add New Package
        </button>
        <PackageModal show={showModal} close={closeModal} />
      </Box>
      <Box sx={{ mt: 0 }}>
        <PackageTable />
      </Box>
    </Fragment>
  );
}

export default PackageManagement;
