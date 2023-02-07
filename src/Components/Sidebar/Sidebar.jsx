import { Typography, Box, Avatar, InputBase } from "@mui/material";
import React, { Fragment, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";

import { Link } from "react-router-dom";

function Sidebar() {
  const user = {
    isAdmin: false,
  };
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    navigate("/login");
  };

  const ITEM_HEIGHT = 48;
  return (
    <Fragment>
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* sidebar links */}
        <Box
          className="sidebar"
          sx={{
            backgroundColor: "primary.main",
            width: { xs: "15vw", sm: "12vw", md: "17vw" },
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            pl: 0.5,
            // p: "8px 12px",
          }}
        >
          {user.isAdmin ? (
            <>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    pt: 2,
                    px: { xs: 1.5, sm: 4, md: 2 },
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#e6f2ff",
                      fontSize: "20px",
                      fontWeight: "600",
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    D
                  </Typography>
                  <Typography
                    sx={{
                      color: "#e6f2ff",
                      fontSize: "1.125rem",
                      display: { xs: "none", md: "block" },
                      fontWeight: "600",
                    }}
                  >
                    Demo Agency
                  </Typography>
                </Box>
              </Link>
              <Box
                sx={{
                  mt: 2,
                  pl: 2,
                  alignSelf: "flex-start",
                  display: { xs: "none", md: "block" },
                }}
              >
                <Typography
                  sx={{
                    color: "#ffffff59",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                  }}
                >
                  ACTIVITY
                </Typography>
              </Box>
              <Box sx={{ p: 1, pt: 1 }}>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      cursor: "pointer",
                      p: 0.8,
                      py: 1,
                      "&:hover": {
                        backgroundColor: "primary.light",
                        borderRadius: "4px",
                      },
                    }}
                  >
                    <CottageIcon
                      sx={{
                        color: "#ffffff55",
                        fontSize: "20px",
                        ml: { xs: -0.7, sm: 1.6, md: "none" },
                      }}
                    />
                    <Typography
                      sx={{
                        display: {
                          xs: "none",
                          md: "block",
                        },
                        fontSize: "15px",
                        color: "#e6f2ff",
                        fontWeight: "500",
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
                      gap: 1,
                      cursor: "pointer",
                      p: 0.8,
                      py: 1,
                      "&:hover": {
                        backgroundColor: "primary.light",
                        borderRadius: "4px",
                      },
                    }}
                  >
                    <PersonIcon
                      sx={{
                        color: "#ffffff59",
                        fontSize: "20px",
                        ml: { xs: -0.7, sm: 1.6, md: "none" },
                      }}
                    />
                    <Typography
                      sx={{
                        display: {
                          xs: "none",
                          md: "block",
                        },
                        fontSize: "15px",
                        color: "#e6f2ff",
                        fontWeight: "500",
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
                      gap: 1,
                      cursor: "pointer",
                      p: 0.8,
                      py: 1,
                      "&:hover": {
                        backgroundColor: "primary.light",
                        borderRadius: "4px",
                      },
                    }}
                  >
                    <Inventory2Icon
                      sx={{
                        color: "#ffffff59",
                        fontSize: "20px",
                        ml: { xs: -0.7, sm: 1.6, md: "none" },
                      }}
                    />
                    <Typography
                      sx={{
                        display: {
                          xs: "none",
                          md: "block",
                        },
                        fontSize: "15px",
                        color: "#e6f2ff",
                        fontWeight: "500",
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
                      gap: 1,
                      cursor: "pointer",
                      p: 0.8,
                      py: 1,
                      "&:hover": {
                        backgroundColor: "primary.light",
                        borderRadius: "4px",
                      },
                    }}
                  >
                    <FilterFramesIcon
                      sx={{
                        color: "#ffffff59",
                        fontSize: "20px",
                        ml: { xs: -0.7, sm: 1.6, md: "none" },
                      }}
                    />
                    <Typography
                      sx={{
                        display: {
                          xs: "none",
                          md: "block",
                        },
                        fontSize: "15px",
                        color: "#e6f2ff",
                        fontWeight: "500",
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
                      gap: 1,
                      cursor: "pointer",
                      p: 0.8,
                      py: 1,
                      "&:hover": {
                        backgroundColor: "primary.light",
                        borderRadius: "4px",
                      },
                    }}
                  >
                    <PaidIcon
                      sx={{
                        color: "#ffffff59",
                        fontSize: "20px",
                        ml: { xs: -0.7, sm: 1.6, md: "none" },
                      }}
                    />
                    <Typography
                      sx={{
                        display: {
                          xs: "none",
                          md: "block",
                        },
                        fontSize: "15px",
                        color: "#e6f2ff",
                        fontWeight: "500",
                      }}
                    >
                      Transactions
                    </Typography>
                  </Box>
                </Link>
                <Box
                  onClick={logout}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                    p: 0.8,
                    py: 1,
                    "&:hover": {
                      backgroundColor: "primary.light",
                      borderRadius: "4px",
                    },
                  }}
                >
                  <ExitToAppIcon
                    sx={{
                      color: "#ffffff59",
                      fontSize: "20px",
                      ml: { xs: -0.7, sm: 1.6, md: "none" },
                    }}
                  />
                  <Typography
                    sx={{
                      display: {
                        xs: "none",
                        md: "block",
                      },
                      fontSize: "15px",
                      color: "#e6f2ff",
                      fontWeight: "500",
                    }}
                  >
                    Logout
                  </Typography>
                </Box>
              </Box>
            </>
          ) : (
            <>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    pt: 2,
                    px: { xs: 1.5, sm: 4, md: 2 },
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#e6f2ff",
                      fontSize: "20px",
                      fontWeight: "600",
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    U
                  </Typography>
                  <Typography
                    sx={{
                      color: "#e6f2ff",
                      fontSize: "1.125rem",
                      display: { xs: "none", md: "block" },
                      fontWeight: "600",
                    }}
                  >
                    Demo User Name
                  </Typography>
                </Box>
              </Link>
              <Box
                sx={{
                  mt: 2,
                  pl: 2,
                  alignSelf: "flex-start",
                  display: { xs: "none", md: "block" },
                }}
              >
                <Typography
                  sx={{
                    color: "#ffffff59",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                  }}
                >
                  ACTIVITY
                </Typography>
              </Box>
              <Box sx={{ p: 1, pt: 1 }}>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      cursor: "pointer",
                      p: 0.8,
                      py: 1,
                      "&:hover": {
                        backgroundColor: "primary.light",
                        borderRadius: "4px",
                      },
                    }}
                  >
                    <CottageIcon
                      sx={{
                        color: "#ffffff55",
                        fontSize: "25px",
                        ml: { xs: -0.7, sm: 1.6, md: "none" },
                      }}
                    />
                    <Typography
                      sx={{
                        display: {
                          xs: "none",
                          md: "block",
                        },
                        fontSize: "16px",
                        color: "#e6f2ff",
                        fontWeight: "500",
                      }}
                    >
                      Dashboard
                    </Typography>
                  </Box>
                </Link>
                <Link
                  to="/user/reportManagement"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      cursor: "pointer",
                      p: 0.8,
                      py: 1,
                      "&:hover": {
                        backgroundColor: "primary.light",
                        borderRadius: "4px",
                      },
                    }}
                  >
                    <ReportGmailerrorredIcon
                      sx={{
                        color: "#ffffff59",
                        fontSize: "25px",
                        ml: { xs: -0.7, sm: 1.6, md: "none" },
                      }}
                    />
                    <Typography
                      sx={{
                        display: {
                          xs: "none",
                          md: "block",
                        },
                        fontSize: "16px",
                        color: "#e6f2ff",
                        fontWeight: "500",
                      }}
                    >
                      Report Management
                    </Typography>
                  </Box>
                </Link>
                <Link
                  to="/user/emailSettings"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      cursor: "pointer",
                      p: 0.8,
                      py: 1,
                      "&:hover": {
                        backgroundColor: "primary.light",
                        borderRadius: "4px",
                      },
                    }}
                  >
                    <MarkEmailReadIcon
                      sx={{
                        color: "#ffffff59",
                        fontSize: "25px",
                        ml: { xs: -0.7, sm: 1.6, md: "none" },
                      }}
                    />
                    <Typography
                      sx={{
                        display: {
                          xs: "none",
                          md: "block",
                        },
                        fontSize: "16px",
                        color: "#e6f2ff",
                        fontWeight: "500",
                      }}
                    >
                      Email Settings
                    </Typography>
                  </Box>
                </Link>
                <Link
                  to="/user/subscriptions"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      cursor: "pointer",
                      p: 0.8,
                      py: 1,
                      "&:hover": {
                        backgroundColor: "primary.light",
                        borderRadius: "4px",
                      },
                    }}
                  >
                    <FilterFramesIcon
                      sx={{
                        color: "#ffffff59",
                        fontSize: "25px",
                        ml: { xs: -0.7, sm: 1.6, md: "none" },
                      }}
                    />
                    <Typography
                      sx={{
                        display: {
                          xs: "none",
                          md: "block",
                        },
                        fontSize: "16px",
                        color: "#e6f2ff",
                        fontWeight: "500",
                      }}
                    >
                      My Subscriptions
                    </Typography>
                  </Box>
                </Link>
                <Link
                  to="/user/payments"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      cursor: "pointer",
                      p: 0.8,
                      py: 1,
                      "&:hover": {
                        backgroundColor: "primary.light",
                        borderRadius: "4px",
                      },
                    }}
                  >
                    <PaidIcon
                      sx={{
                        color: "#ffffff59",
                        fontSize: "25px",
                        ml: { xs: -0.7, sm: 1.6, md: "none" },
                      }}
                    />
                    <Typography
                      sx={{
                        display: {
                          xs: "none",
                          md: "block",
                        },
                        fontSize: "16px",
                        color: "#e6f2ff",
                        fontWeight: "500",
                      }}
                    >
                      My Payments
                    </Typography>
                  </Box>
                </Link>
                <Link
                  to="/user/profile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      cursor: "pointer",
                      p: 0.8,
                      py: 1,
                      "&:hover": {
                        backgroundColor: "primary.light",
                        borderRadius: "4px",
                      },
                    }}
                  >
                    <AccountCircleIcon
                      sx={{
                        color: "#ffffff59",
                        fontSize: "25px",
                        ml: { xs: -0.7, sm: 1.6, md: "none" },
                      }}
                    />
                    <Typography
                      sx={{
                        display: {
                          xs: "none",
                          md: "block",
                        },
                        fontSize: "16px",
                        color: "#e6f2ff",
                        fontWeight: "500",
                      }}
                    >
                      My Profile
                    </Typography>
                  </Box>
                </Link>
                <Link
                  to="/user/transactions"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      cursor: "pointer",
                      p: 0.8,
                      py: 1,
                      "&:hover": {
                        backgroundColor: "primary.light",
                        borderRadius: "4px",
                      },
                    }}
                  >
                    <MultipleStopIcon
                      sx={{
                        color: "#ffffff59",
                        fontSize: "25px",
                        ml: { xs: -0.7, sm: 1.6, md: "none" },
                      }}
                    />
                    <Typography
                      sx={{
                        display: {
                          xs: "none",
                          md: "block",
                        },
                        fontSize: "16px",
                        color: "#e6f2ff",
                        fontWeight: "500",
                      }}
                    >
                      Transactions
                    </Typography>
                  </Box>
                </Link>
                <Box
                  onClick={logout}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                    p: 0.8,
                    py: 1,
                    "&:hover": {
                      backgroundColor: "primary.light",
                      borderRadius: "4px",
                    },
                  }}
                >
                  <ExitToAppIcon
                    sx={{
                      color: "#ffffff59",
                      fontSize: "25px",
                      ml: { xs: -0.7, sm: 1.6, md: "none" },
                    }}
                  />
                  <Typography
                    sx={{
                      display: {
                        xs: "none",
                        md: "block",
                      },
                      fontSize: "16px",
                      color: "#e6f2ff",
                      fontWeight: "500",
                    }}
                  >
                    Logout
                  </Typography>
                </Box>
              </Box>
            </>
          )}
        </Box>
        {/* Navbar and main outlet */}
        <Box
          sx={{
            width: {
              xs: "85vw",
              sm: "88vw",
              md: "85vw",
            },
          }}
        >
          <Box
            sx={{
              backgroundColor: "#FAF9F6",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 3,
              p: "8px 12px",
              boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)",
            }}
          >
            <Typography
              sx={{ color: "#9fa8da", fontSize: "14.4px", fontWeight: "600" }}
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
              <Avatar sx={{ height: "30px", width: "30px" }} src="" />
              <ArrowDropDownIcon />
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
                  width: "30ch",
                },
              }}
            >
              <MenuItem key="profile" onClick={handleClose}>
                Your Profile
              </MenuItem>
              <MenuItem key="billing" onClick={handleClose}>
                Billing Address and Information
              </MenuItem>
              <MenuItem key="out" onClick={logout}>
                Sign Out
              </MenuItem>
            </Menu>
          </Box>
          {/* scrollable content */}
          <Box
            sx={{
              height: { xs: "84vh", sm: "88vh", md: "88vh" },
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
