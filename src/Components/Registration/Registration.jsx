import { Box } from "@mui/material";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import saveTree from "../../Assets/saveTree.png";

function Registration() {
  const navigate = useNavigate();

  const navigateToHomeScreen = () => {
    navigate("/home");
  };
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "primary.dark",
        }}
      >
        <Box
          sx={{
            height: { xs: "30px", md: "50px" },
            width: { xs: "60px", md: "100px" },
            ml: 2,
            mt: 2,
          }}
        >
          <img
            src={saveTree}
            alt="logo"
            onClick={navigateToHomeScreen}
            className="logo"
          />
        </Box>
      </Box>
    </Fragment>
  );
}

export default Registration;
