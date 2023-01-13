import { Typography, Box, Avatar, InputBase } from "@mui/material";
import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import saveTree from "../../Assets/saveTree.png";
import CottageIcon from "@mui/icons-material/Cottage";
import PersonIcon from "@mui/icons-material/Person";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PaidIcon from "@mui/icons-material/Paid";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { Link } from "react-router-dom";

function Sidebar() {
  const options = ["Your Profile", "Billings and Information", "Sign out"];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 48;
  return (
    <Fragment>
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* sidebar links */}
        <Box
          sx={{
            backgroundColor: "primary.main",
            width: { xs: "20vw", sm: "13vw", md: "20vw" },
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                pt: 2,
                cursor: "pointer",
                pl: { xs: 1, sm: 1.5, md: 2 },
              }}
            >
              <img
                src={saveTree}
                alt="logo"
                style={{ height: "28px", width: "50px" }}
              />
              <Typography
                sx={{
                  color: "white",
                  fontSize: "1.5rem",
                  display: { xs: "none", md: "block" },
                  fontWeight: "600",
                }}
              >
                Demo Agency
              </Typography>
            </Box>
          </Link>
          <Box sx={{ p: 1, pt: 5 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  cursor: "pointer",
                  px: 1,
                  py: 2,
                  "&:hover": {
                    backgroundColor: "primary.dark",
                    borderRadius: "4px",
                  },
                }}
              >
                <CottageIcon
                  sx={{
                    color: "#9fa8da",
                    ml: { xs: -0.7, sm: 1.6, md: "none" },
                  }}
                />
                <Typography
                  sx={{
                    display: {
                      xs: "none",
                      md: "block",
                    },
                    fontSize: "1.125rem",
                    color: "white",
                    fontWeight: "500",
                    mb: -0.7,
                  }}
                >
                  Dashboard
                </Typography>
              </Box>
            </Link>
            <Link
              to="/clientManagement"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  cursor: "pointer",
                  px: 1,
                  py: 2,
                  "&:hover": {
                    backgroundColor: "primary.dark",
                    borderRadius: "4px",
                  },
                }}
              >
                <PersonIcon
                  sx={{
                    color: "#9fa8da",
                    ml: { xs: -0.7, sm: 1.6, md: "none" },
                  }}
                />
                <Typography
                  sx={{
                    display: {
                      xs: "none",
                      md: "block",
                    },
                    fontSize: "1.125rem",
                    color: "white",
                    fontWeight: "500",
                    mb: -0.7,
                  }}
                >
                  Client Management
                </Typography>
              </Box>
            </Link>
            <Link
              to="/packageManagement"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  cursor: "pointer",
                  px: 1,
                  py: 2,
                  "&:hover": {
                    backgroundColor: "primary.dark",
                    borderRadius: "4px",
                  },
                }}
              >
                <Inventory2Icon
                  sx={{
                    color: "#9fa8da",
                    ml: { xs: -0.7, sm: 1.6, md: "none" },
                  }}
                />
                <Typography
                  sx={{
                    display: {
                      xs: "none",
                      md: "block",
                    },
                    fontSize: "1.125rem",
                    color: "white",
                    fontWeight: "500",
                    mb: -0.7,
                  }}
                >
                  Package Management
                </Typography>
              </Box>
            </Link>
            <Link
              to="/orders"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  cursor: "pointer",
                  px: 1,
                  py: 2,
                  "&:hover": {
                    backgroundColor: "primary.dark",
                    borderRadius: "4px",
                  },
                }}
              >
                <FilterFramesIcon
                  sx={{
                    color: "#9fa8da",
                    ml: { xs: -0.7, sm: 1.6, md: "none" },
                  }}
                />
                <Typography
                  sx={{
                    display: {
                      xs: "none",
                      md: "block",
                    },
                    fontSize: "1.125rem",
                    color: "white",
                    fontWeight: "500",
                    mb: -0.7,
                  }}
                >
                  Orders
                </Typography>
              </Box>
            </Link>
            <Link
              to="/transactions"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  cursor: "pointer",
                  px: 1,
                  py: 2,
                  "&:hover": {
                    backgroundColor: "primary.dark",
                    borderRadius: "4px",
                  },
                }}
              >
                <PaidIcon
                  sx={{
                    color: "#9fa8da",
                    ml: { xs: -0.7, sm: 1.6, md: "none" },
                  }}
                />
                <Typography
                  sx={{
                    display: {
                      xs: "none",
                      md: "block",
                    },
                    fontSize: "1.125rem",
                    color: "white",
                    fontWeight: "500",
                    mb: -0.7,
                  }}
                >
                  Transactions
                </Typography>
              </Box>
            </Link>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                cursor: "pointer",
                px: 1,
                py: 2,
                "&:hover": {
                  backgroundColor: "primary.dark",
                  borderRadius: "4px",
                },
              }}
            >
              <ExitToAppIcon
                sx={{ color: "#9fa8da", ml: { xs: -0.7, sm: 1.6, md: "none" } }}
              />
              <Typography
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                  },
                  fontSize: "1.125rem",
                  color: "white",
                  fontWeight: "500",
                  mb: -0.7,
                }}
              >
                Logout
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Navbar and main outlet */}
        <Box
          sx={{
            width: {
              xs: "80vw",
              sm: "87vw",
              md: "80vw",
            },
          }}
        >
          <Box
            sx={{
              backgroundColor: "#e8eaf6",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 3,
              p: 2,
            }}
          >
            <Typography
              sx={{ color: "#9fa8da", fontSize: "1.125rem", fontWeight: "600" }}
            >
              Feedback ?
            </Typography>
            <Badge color="secondary" badgeContent={5}>
              <NotificationsIcon />
            </Badge>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <Avatar src="" />
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* scrollable content */}
          <Box
            sx={{
              height: { xs: "84vh", sm: "88vh", md: "85vh" },
              overflowY: "scroll",
              p: 2,
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Sidebar;
