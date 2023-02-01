import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  width: { xs: "90vw", md: "40vw" },
  maxHeight: { xs: "90vh", sm: "95vh" },
  overflowY: "scroll",
  overflowX: "hidden",
};

export default function CSVModal({ showCSV, closeCSV }) {
  const [CSV, setCSV] = React.useState("");
  return (
    <Fragment>
      <Modal show={showCSV} onClose={closeCSV} hideBackdrop>
        <Box sx={style}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ color: "primary.main", fontSize: "22px" }}>
              Import CSV
            </Typography>
            <CloseIcon onClick={closeCSV} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <input type="file" onChange={(e) => setCSV(e.target.files[0])} />
          </Box>
        </Box>
      </Modal>
    </Fragment>
  );
}
