import React, { Fragment, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import saveTree from "../../Assets/saveTree.png";
import loginBg from "../../Assets/loginBg.jpg";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Login() {
  const [formValues] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validate = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length <= 2) {
      errors.password =
        "Password must contain 8 characters along with at least one capital letter, one number and one special character";
    }
    return errors;
  };

  const callLoginApi = (values) => {
    if (values) {
      console.log(values);
    }
  };

  return (
    <Fragment>
      {/* Login container */}
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          maxWidth: "100vw",
        }}
      >
        {/* left part visible only in md devices */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            alignItems: "center",
            backgroundImage: `url(${loginBg})`,
            backgroundSize: "cover",
            height: "100%",
            width: "60%",
          }}
        >
          <img
            src={saveTree}
            alt="brand"
            style={{
              height: "150px",
              width: "60%",
              marginTop: "250px",
            }}
          />
          <Typography
            sx={{
              alignSelf: "flex-start",
              mt: 29.2,
              fontSize: "13px",
              fontWeight: "600",
              color: "white",
            }}
          >
            Designed And Developed By | Teknotrait Solutions PVT LTD
          </Typography>
        </Box>
        {/* right part */}
        <Box
          sx={{
            width: { xs: "100vw", md: "40%" },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Typography
            sx={{
              color: "#234e8e",
              fontSize: { xs: "25px", md: "1.875rem" },
              lineHeight: "2.25rem",
              fontWeight: "1000",
              letterSpacing: "-1px",
            }}
          >
            Sign In
          </Typography>
          <div className="form-section">
            <Formik
              initialValues={formValues}
              validate={(values) => validate(values)}
              onSubmit={(values) => callLoginApi(values)}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="form-group">
                    <Box sx={{ mb: 2.5 }}>
                      <Typography
                        sx={{
                          color: "#234e8e",
                          fontSize: "15px",
                          fontWeight: "600",
                        }}
                      >
                        Your Email
                      </Typography>
                      <Field
                        type="email"
                        placeholder="Jimmy@gmail.com"
                        className={
                          errors.email && touched.email
                            ? "is-invalid login-fields form-control"
                            : "login-fields form-control"
                        }
                        name="email"
                      />
                      {errors.email && touched.email && (
                        <Typography sx={{ color: "red", fontSize: "13px" }}>
                          {errors.email}
                        </Typography>
                      )}
                    </Box>
                  </div>
                  <div className="form-group">
                    <Box sx={{ mb: 2.5 }}>
                      <Typography
                        sx={{
                          color: "#234e8e",
                          fontSize: "15px",
                          fontWeight: "600",
                        }}
                      >
                        Your Password
                      </Typography>
                      <Box
                        sx={{
                          maxWidth: { xs: "200px", md: "350px" },
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Field
                            type={showPassword ? "text" : "password"}
                            placeholder="JimmyWalen@10"
                            className={
                              errors.password && touched.password
                                ? "form-control is-invalid login-p-fields"
                                : "form-control login-p-fields"
                            }
                            name="password"
                            style={{ borderRight: "none" }}
                          />
                          {showPassword ? (
                            <div className="eye">
                              <VisibilityOff
                                sx={{ cursor: "pointer" }}
                                onClick={toggleShowPassword}
                              />
                            </div>
                          ) : (
                            <div className="eye">
                              <Visibility
                                sx={{ cursor: "pointer" }}
                                onClick={toggleShowPassword}
                              />
                            </div>
                          )}
                        </Box>
                        {errors.password && touched.password && (
                          <Typography sx={{ color: "red", fontSize: "13px" }}>
                            {errors.password}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  </div>
                  <div className="hoverParent">
                    <button type="submit" className="primary-button">
                      Login
                    </button>
                    <button className="register-button" type="button">
                      Register
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Login;
