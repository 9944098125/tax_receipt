import { Box, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  };

  const [terms, setTerms] = useState(false);

  const onCheckingInput = (e) => {
    setTerms(!terms);
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

    if (terms === false) {
      return;
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
          backgroundColor: "black",
          p: 4,
          minHeight: "50vh",
          width: { xs: "90vw", md: "35vw" },
          minWidth: { xs: "90vw", md: "30vw" },
          mt: { xs: "none", md: -5 },
          ml: { xs: "none", md: 12 },
        }}
      >
        <div className="form-section">
          <Formik
            initialValues={initialValues}
            validate={(values) => validate(values)}
            onSubmit={(values) => submitRegisterForm(values)}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form-group">
                  <Box sx={{ mb: 2 }}>
                    <Typography sx={{ fontSize: "1.125rem", color: "#234e8e" }}>
                      Your name
                    </Typography>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Enter Your Name"
                      className={
                        errors.name && touched.name
                          ? "register-fields is-invalid form-control"
                          : "form-control register-fields"
                      }
                    />
                    {errors.name && touched.name && (
                      <Typography sx={{ color: "red", fontSize: "13px" }}>
                        {errors.name}
                      </Typography>
                    )}
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography sx={{ fontSize: "1.125rem", color: "#234e8e" }}>
                      Your email
                    </Typography>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter Your Email Address"
                      className={
                        errors.email && touched.email
                          ? "register-fields is-invalid form-control"
                          : "form-control register-fields"
                      }
                    />
                    {errors.email && touched.email && (
                      <Typography sx={{ color: "red", fontSize: "13px" }}>
                        {errors.email}
                      </Typography>
                    )}
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography sx={{ fontSize: "1.125rem", color: "#234e8e" }}>
                      Mobile Number
                    </Typography>
                    <Field
                      name="mobile"
                      type="number"
                      placeholder="Enter Your Phone Number"
                      className={
                        errors.mobile && touched.mobile
                          ? "register-fields is-invalid form-control"
                          : "form-control register-fields"
                      }
                    />
                    {errors.mobile && touched.mobile && (
                      <Typography sx={{ color: "red", fontSize: "13px" }}>
                        {errors.mobile}
                      </Typography>
                    )}
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography sx={{ fontSize: "1.125rem", color: "#234e8e" }}>
                      Choose a password
                    </Typography>
                    <Field
                      name="password"
                      type="password"
                      placeholder="Enter Your Password"
                      className={
                        errors.password && touched.password
                          ? "register-fields is-invalid form-control"
                          : "form-control register-fields"
                      }
                    />
                    {errors.password && touched.password && (
                      <Typography sx={{ color: "red", fontSize: "13px" }}>
                        {errors.password}
                      </Typography>
                    )}
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography sx={{ fontSize: "1.125rem", color: "#234e8e" }}>
                      Confirm Your password
                    </Typography>
                    <Field
                      name="confirmPassword"
                      type="password"
                      placeholder="Enter Your Password again"
                      className={
                        errors.confirmPassword && touched.confirmPassword
                          ? "register-fields is-invalid form-control"
                          : "form-control register-fields"
                      }
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <Typography sx={{ color: "red", fontSize: "13px" }}>
                        {errors.confirmPassword}
                      </Typography>
                    )}
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography sx={{ fontSize: "1.125rem", color: "#234e8e" }}>
                      Organization Name
                    </Typography>
                    <Field
                      name="org"
                      type="text"
                      placeholder="Enter Your Organization Name"
                      className={
                        errors.org && touched.org
                          ? "register-fields is-invalid form-control"
                          : "form-control register-fields"
                      }
                    />
                    {errors.org && touched.org && (
                      <Typography sx={{ color: "red", fontSize: "13px" }}>
                        {errors.org}
                      </Typography>
                    )}
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <input
                        type="checkbox"
                        value={terms}
                        onChange={onCheckingInput}
                      />
                      <label htmlFor="check" className="label">
                        By clicking "Sign Up", you agree to our{" "}
                        <Link to="/terms">Terms of Service</Link> and{" "}
                        <Link to="/privacy">Privacy Plicy</Link>.*
                      </label>
                    </Box>
                  </Box>
                  <button className="primary-button" type="submit">
                    Create My Workspace
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Box>
    </Fragment>
  );
}

export default Registration;
