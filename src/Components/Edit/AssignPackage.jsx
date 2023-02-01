import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import StarIcon from "@mui/icons-material/Star";
import AdbIcon from "@mui/icons-material/Adb";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function AssignPackage() {
  const [select] = React.useState(false);
  return (
    <Fragment>
      <Box
        sx={{
          p: 2,
          mb: 3,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          flexWrap: "wrap",
          gapX: 3,
        }}
      >
        <Box
          sx={{
            border: "2px solid #234e8e",
            borderRadius: "5px",
            minHeight: "150px",
            minWidth: "150px",
            maxHeight: { xs: "190px", md: "170px" },
            maxWidth: { xs: "300px", md: "290px" },
            mr: 2,
            mb: 2,
            backgroundColor: "primary.bg",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ width: "40%" }}>
              <Typography
                sx={{ color: "#00254d", fontWeight: "700", fontSize: "14px" }}
              >
                Premium Package
              </Typography>
              <WorkspacePremiumIcon sx={{ fontSize: "70px" }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "16px" },
                  fontWeight: "600",
                  color: "#6b778c",
                }}
              >
                Customer Limit: 15
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "16px" },
                  fontWeight: "600",
                  color: "#6b778c",
                }}
              >
                Email Limit: 15
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "16px" },
                  fontWeight: "600",
                  color: "#6b778c",
                }}
              >
                PDF Limit: 15
              </Typography>
            </Box>
          </Box>
          <input
            style={{ cursor: "pointer" }}
            type="checkbox"
            className="checkbox"
            id="checkbox"
            value={select}
          />
        </Box>
        <Box
          sx={{
            border: "2px solid #234e8e",
            borderRadius: "5px",
            minHeight: "150px",
            minWidth: "150px",
            maxHeight: { xs: "190px", md: "170px" },
            maxWidth: { xs: "300px", md: "290px" },
            mr: 2,
            mb: 2,
            backgroundColor: "primary.bg",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ width: "40%" }}>
              <Typography
                sx={{ color: "#00254d", fontWeight: "700", fontSize: "14px" }}
              >
                Higher Package
              </Typography>
              <StarIcon sx={{ fontSize: "70px" }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "16px" },
                  fontWeight: "600",
                  color: "#6b778c",
                }}
              >
                Customer Limit: 15
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "16px" },
                  fontWeight: "600",
                  color: "#6b778c",
                }}
              >
                Email Limit: 15
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "16px" },
                  fontWeight: "600",
                  color: "#6b778c",
                }}
              >
                PDF Limit: 15
              </Typography>
            </Box>
          </Box>
          <input
            style={{ cursor: "pointer" }}
            type="checkbox"
            className="checkbox"
            id="checkbox"
            value={select}
          />
        </Box>
        <Box
          sx={{
            border: "2px solid #234e8e",
            borderRadius: "5px",
            minHeight: "150px",
            minWidth: "150px",
            maxHeight: { xs: "190px", md: "170px" },
            maxWidth: { xs: "300px", md: "290px" },
            mr: 2,
            mb: 2,
            backgroundColor: "primary.bg",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ width: "40%" }}>
              <Typography
                sx={{ color: "#00254d", fontWeight: "700", fontSize: "14px" }}
              >
                Advanced Package
              </Typography>
              <AdbIcon sx={{ fontSize: "70px" }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "16px" },
                  fontWeight: "600",
                  color: "#6b778c",
                }}
              >
                Customer Limit: 15
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "16px" },
                  fontWeight: "600",
                  color: "#6b778c",
                }}
              >
                Email Limit: 15
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "16px" },
                  fontWeight: "600",
                  color: "#6b778c",
                }}
              >
                PDF Limit: 15
              </Typography>
            </Box>
          </Box>
          <input
            style={{ cursor: "pointer" }}
            type="checkbox"
            className="checkbox"
            id="checkbox"
            value={select}
          />
        </Box>
        <Box
          sx={{
            border: "2px solid #234e8e",
            borderRadius: "5px",
            minHeight: "150px",
            minWidth: "150px",
            maxHeight: { xs: "190px", md: "170px" },
            maxWidth: { xs: "300px", md: "290px" },
            mr: 2,
            mb: 2,
            backgroundColor: "primary.bg",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ width: "40%" }}>
              <Typography
                sx={{ color: "#00254d", fontWeight: "700", fontSize: "14px" }}
              >
                Mid Level Package
              </Typography>
              <BrightnessMediumIcon sx={{ fontSize: "70px" }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "16px" },
                  fontWeight: "600",
                  color: "#6b778c",
                }}
              >
                Customer Limit: 15
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "16px" },
                  fontWeight: "600",
                  color: "#6b778c",
                }}
              >
                Email Limit: 15
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "16px" },
                  fontWeight: "600",
                  color: "#6b778c",
                }}
              >
                PDF Limit: 15
              </Typography>
            </Box>
          </Box>
          <input
            style={{ cursor: "pointer" }}
            type="checkbox"
            className="checkbox"
            id="checkbox"
            value={select}
          />
        </Box>
        <Box
          sx={{
            border: "2px solid #234e8e",
            borderRadius: "5px",
            minHeight: "150px",
            minWidth: "150px",
            maxHeight: { xs: "190px", md: "170px" },
            maxWidth: { xs: "300px", md: "290px" },
            mr: 2,
            mb: 2,
            backgroundColor: "primary.bg",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ width: "40%" }}>
              <Typography
                sx={{ color: "#00254d", fontWeight: "700", fontSize: "14px" }}
              >
                Basic Level Package
              </Typography>
              <ShoppingBasketIcon sx={{ fontSize: "70px" }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "16px" },
                  fontWeight: "600",
                  color: "#6b778c",
                }}
              >
                Customer Limit: 15
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "16px" },
                  fontWeight: "600",
                  color: "#6b778c",
                }}
              >
                Email Limit: 15
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "16px" },
                  fontWeight: "600",
                  color: "#6b778c",
                }}
              >
                PDF Limit: 15
              </Typography>
            </Box>
          </Box>
          <input
            style={{ cursor: "pointer" }}
            type="checkbox"
            className="checkbox"
            id="checkbox"
            value={select}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 3, pb: 4 }}>
        <button style={{ margin: "0 0 0 0" }} className="register-button">
          Remove
        </button>
        <button style={{ margin: "0 0 0 0" }} className="primary-button">
          Submit
        </button>
      </Box>
    </Fragment>
  );
}

export default AssignPackage;
