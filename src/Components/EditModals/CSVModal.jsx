import React, { Fragment } from "react";
import { Box, Typography, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Dropzone from "react-dropzone";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

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
  width: { xs: "70vw", md: "30vw" },
  maxHeight: { xs: "90vh", sm: "95vh" },
  overflowY: "scroll",
  overflowX: "hidden",
};

export default function CSVModal({ showCSV, closeCSV }) {
  const [CSV, setCSV] = React.useState("");

  const onDrop = (file) => {};

  return (
    <Fragment>
      <Modal id="editModal" open={showCSV} onClose={closeCSV} hideBackdrop>
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                color: "primary.main",
                fontSize: "22px",
                fontWeight: "700",
              }}
            >
              Import CSV
            </Typography>
            <CloseIcon onClick={closeCSV} sx={{ cursor: "pointer" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 5,
            }}
          >
            <Dropzone onDrop={onDrop}>
              {({ getRootProps, getInputProps }) => (
                <div
                  style={{ curosr: "pointer", width: "50%" }}
                  className="d-flex flex-column align-items-center"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                  <CloudDownloadIcon
                    sx={{ fontSize: "55px", cursor: "pointer" }}
                  />
                </div>
              )}
            </Dropzone>
          </Box>
        </Box>
      </Modal>
    </Fragment>
  );
}
