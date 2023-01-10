import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import saveTree from "../../Assets/saveTree.png";
import { Formik, Form, Field } from "formik";

function Registration() {
  const navigate = useNavigate();

  const navigateToHomeScreen = () => {
    navigate("/home");
  };

  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    org: "",
    terms: false,
  };

  function validate(values) {
    let errors = {};

    if (!values.name) {
      errors.name = "Your Full Name is required";
    }
    if (!values.email) {
      errors.email = "Your Email is required";
    }
    if (!values.mobile) {
      errors.mobile = "Your Phone Number is required";
    }
    if (!values.password) {
      errors.password = "Your Password is required";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "You must COnfirm Your Password";
    }
    if (!values.org) {
      errors.org = "Your Organization name is required";
    }
    if (!values.terms) {
      errors.terms = "You must accept the Terms and Privacy Policy to continue";
    }

    return errors;
  }

  function submitRegisterForm(values) {
    console.log("Register form values are", values);
  }

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          p: 3,
          background: "linear-gradient(to left, #673ab7 1%, #3f51b5, #ffffff)",
          minHeight: "45vh",
        }}
      >
        <Box
          sx={{
            height: { xs: "40px", md: "60px" },
            width: { xs: "80px", md: "150px" },
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <img
            src={saveTree}
            alt="logo"
            onClick={navigateToHomeScreen}
            className="logo"
          />
        </Box>
        {/* heading box */}
        <Box
          sx={{
            pt: { xs: 2, md: 10 },
            pb: 7,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "42px", md: "65px" },
              color: "white",
              fontWeight: "700",
            }}
          >
            Sign Up Instantly
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "21px" },
              color: "#bbdefb",
              fontWeight: "500",
            }}
          >
            Free for 14 days, no credit card required...
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <Typography sx={{ color: "white", fontSize: "13px" }}>
            Already have an account ? Then
          </Typography>
          <button className="register-button">Sign In</button>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          p: 4,
          maxHeight: "50vh",
          maxWidth: { xs: "95vw", md: "45vw" },
          minWidth: { xs: "90vw", md: "30vw" },
          mt: { xs: "none", md: -5 },
          ml: { xs: "none", md: 12 },
        }}
      >
        <Formik
          initialValues={initialValues}
          validate={(values) => validate(values)}
          onSubmit={(values) => submitRegisterForm(values)}
        ></Formik>
      </Box>
    </Fragment>
  );
}

export default Registration;
