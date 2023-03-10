import { Box, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import saveTree from "../../Assets/saveTree.png";
import tick from "../../Assets/svgFiles/tick.svg";
import { Formik, Form, Field } from "formik";
import DocumentTitle from "../DocumentTitle";
import { IoIosArrowRoundBack } from "react-icons/io";

function Registration() {
  DocumentTitle("Sign Up | Tax Receit");
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
          pb: { xs: 5, md: 3 },
          background: "linear-gradient(to left, #673ab7, #241571, #52b2bf)",
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
            mr: { xs: "none", md: -5 },
            mt: { xs: "none", md: -2 },
          }}
        >
          <Typography
            sx={{
              fontSize: "4.75rem",
              color: "white",
              fontWeight: "700",
            }}
          >
            Sign Up Instantly
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
              color: "#ffffff",
              fontWeight: "500",
              opacity: ".8",
            }}
          >
            Free for 14 days, no credit card required...
          </Typography>
        </Box>
        <Box
          sx={{
            alignSelf: "flex-end",
          }}
        >
          <Typography sx={{ color: "white", fontSize: "13px" }}>
            Already have an account ? Then{" "}
            <Link
              to="/login"
              style={{
                color: "inherit",
                textDecoration: "none",
                padding: "4px 10px 4px 10px",
                border: "1px solid white",
                borderRadius: "2px",
                marginLeft: "5px",
              }}
            >
              Sign In
            </Link>
          </Typography>
        </Box>
      </Box>
      <div className="registrationFormContainer">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
              borderRadius: "7px",
              px: 5,
              py: 5,
              minHeight: "50vh",
              width: { xs: "90vw", md: "35vw" },
              minWidth: { xs: "90vw", md: "30vw" },
              mt: { xs: -3, md: -5 },
              ml: { xs: 1, md: 22 },
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
                        <Typography
                          sx={{
                            fontSize: "1.125rem",
                            color: "#234e8e",
                            fontWeight: "600",
                          }}
                        >
                          Your name
                        </Typography>
                        <Field
                          name="name"
                          type="text"
                          placeholder="Jim Smith"
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
                        <Typography
                          sx={{
                            fontSize: "1.125rem",
                            color: "#234e8e",
                            fontWeight: "600",
                          }}
                        >
                          Your email
                        </Typography>
                        <Field
                          name="email"
                          type="email"
                          placeholder="jim@agency.com"
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
                        <Typography
                          sx={{
                            fontSize: "1.125rem",
                            color: "#234e8e",
                            fontWeight: "600",
                          }}
                        >
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
                        <Typography
                          sx={{
                            fontSize: "1.125rem",
                            color: "#234e8e",
                            fontWeight: "600",
                          }}
                        >
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
                        <Typography
                          sx={{
                            fontSize: "1.125rem",
                            color: "#234e8e",
                            fontWeight: "600",
                          }}
                        >
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
                        <Typography
                          sx={{
                            fontSize: "1.125rem",
                            color: "#234e8e",
                            fontWeight: "600",
                          }}
                        >
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
                            className="checkbox"
                          />
                          <label htmlFor="check" className="label">
                            {/* By clicking "Sign Up", you agree to our{" "} */}
                            I agree to
                            <Link
                              style={{
                                color: "inherit",
                                fontWeight: "600",
                              }}
                              to="/terms"
                            >
                              {" "}
                              Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                              style={{
                                color: "inherit",
                                fontWeight: "600",
                              }}
                              to="/privacy"
                            >
                              Privacy Policy
                            </Link>
                            .
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
          <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              sx={{
                color: "#234e8e",
                fontSize: "1.125rem",
                transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
                ml: 22,
                display: { xs: "none", md: "flex" },
              }}
            >
              ??? return
            </Typography>
          </Link>
        </div>
        <Box
          sx={{
            p: { xs: 2.5, sm: 3.8, md: 1 },
            pt: { xs: 3, md: 7 },
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "column" },
            alignItems: "center",
            gap: 0,
          }}
        >
          <Box sx={{ pl: 0, pr: { xs: 0, sm: 3, md: 0 } }}>
            <Typography
              sx={{
                fontSize: { xs: "23px", sm: "25px", md: "30px" },
                backgroundImage: "linear-gradient(to right, #00e0ff, #00069a)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontWeight: "600",
              }}
            >
              Professional Plan Includes
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2, pt: 0.5 }}>
              <img src={tick} alt="ticks" className="tick" />
              <Typography sx={{ fontSize: "1.125rem", color: "#234e8e" }}>
                Manage Report
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pt: 0.5 }}>
              <img src={tick} alt="ticks" className="tick" />
              <Typography sx={{ fontSize: "1.125rem", color: "#234e8e" }}>
                Manage Customer
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pt: 0.5 }}>
              <img src={tick} alt="ticks" className="tick" />
              <Typography sx={{ fontSize: "1.125rem", color: "#234e8e" }}>
                80G Tax Report {"<"} 250
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pt: 0.5 }}>
              <img src={tick} alt="ticks" className="tick" />
              <Typography sx={{ fontSize: "1.125rem", color: "#234e8e" }}>
                Automated email {"<"} 250
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pt: 0.5 }}>
              <img src={tick} alt="ticks" className="tick" />
              <Typography sx={{ fontSize: "1.125rem", color: "#234e8e" }}>
                Collect online payment
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pt: 0.5, mb: 3 }}>
              <img src={tick} alt="ticks" className="tick" />
              <Typography sx={{ fontSize: "1.125rem", color: "#234e8e" }}>
                Transaction fee {"<"} 2%
              </Typography>
            </Box>
          </Box>
          <Box sx={{ ml: { xs: "none", md: -3 } }}>
            <Typography
              sx={{
                fontSize: { xs: "23px", sm: "25px", md: "30px" },
                backgroundImage: "linear-gradient(to right, #00e0ff, #00069a)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontWeight: "600",
              }}
            >
              EnterPrise Plan Includes
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2, pt: 0.5 }}>
              <img src={tick} alt="ticks" className="tick" />
              <Typography sx={{ fontSize: "1.125rem", color: "#234e8e" }}>
                Manage Report
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pt: 0.5 }}>
              <img src={tick} alt="ticks" className="tick" />
              <Typography sx={{ fontSize: "1.125rem", color: "#234e8e" }}>
                Manage Customer
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pt: 0.5 }}>
              <img src={tick} alt="ticks" className="tick" />
              <Typography sx={{ fontSize: "1.125rem", color: "#234e8e" }}>
                80G Tax Report {"<"} 250
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pt: 0.5 }}>
              <img src={tick} alt="ticks" className="tick" />
              <Typography sx={{ fontSize: "1.125rem", color: "#234e8e" }}>
                Automated email {"<"} 250
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pt: 0.5 }}>
              <img src={tick} alt="ticks" className="tick" />
              <Typography sx={{ fontSize: "1.125rem", color: "#234e8e" }}>
                Collect online payment
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pt: 0.5, mb: 3 }}>
              <img src={tick} alt="ticks" className="tick" />
              <Typography sx={{ fontSize: "1.125rem", color: "#234e8e" }}>
                Transaction fee {"<"} 2%
              </Typography>
            </Box>
          </Box>
        </Box>
        <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography
            sx={{
              color: "#234e8e",
              fontSize: "1.125rem",
              transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
              display: { xs: "flex", md: "none" },
              ml: { xs: -18, sm: -45 },
            }}
          >
            ??? return
          </Typography>
        </Link>
      </div>
    </Fragment>
  );
}

export default Registration;
