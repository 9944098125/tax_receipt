import React, { Fragment, useState } from "react";
import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CustomerTable from "../../Components/UserTables/CustomerManagementDatatable";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditCustomerModal from "../../Components/EditModals/EditCustomerModal";
import CSVModal from "../../Components/EditModals/CSVModal";
import DeleteIcon from "@mui/icons-material/Delete";
import DocumentTitle from "../../Components/DocumentTitle";

function CustomerManagement() {
  DocumentTitle("Customer Management | Tax Receit");
  const [showCSVModal, setShowCSVModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function openShowModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  const openShowCSVModal = () => {
    setShowCSVModal(true);
    console.log("clicked");
  };

  const closeCSVModal = () => {
    setShowCSVModal(false);
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
          CUSTOMER MANAGEMENT
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <HomeIcon />
          <Typography sx={{ fontSize: "0.875rem" }}>
            / Customer Management
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
        }}
      >
        <Box sx={{ height: "80px", mb: 5 }}>
          <button onClick={openShowModal} className="packageBtn">
            <AddCircleIcon sx={{ mr: 2, height: "16px", width: "16px" }} />
            Add New Customer
          </button>
          <EditCustomerModal
            show={showModal}
            close={closeModal}
            title="Add New Customer"
          />
        </Box>
        <Box
          sx={{
            height: "80px",
            mb: { xs: 10, sm: 5 },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <div>
            <button onClick={openShowCSVModal} className="packageBtn">
              Import CSV
            </button>
            <CSVModal showCSV={showCSVModal} closeCSV={closeCSVModal} />
          </div>
          <button className="packageBtn">Generate PDF</button>
          <button className="packageBtn">Sent Mail</button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "60px",
          mt: { xs: 5, sm: 1 },
        }}
      >
        <button style={{ width: "100px" }} className="register-button">
          <DeleteIcon sx={{ color: "white" }} />
          Delete
        </button>
      </Box>
      <CustomerTable />
    </Fragment>
  );
}

export default CustomerManagement;
