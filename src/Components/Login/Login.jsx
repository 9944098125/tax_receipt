import React, { Fragment, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import saveTree from "../../Assets/saveTree.png";
import loginBg from "../../Assets/loginBg.jpg";
import loginMobileBg from "../../Assets/loginMobileBg.webp";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Login() {
  const formValues = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (isNaN(values.email)) {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        //eslint-disable-line
        errors.email = "Email is invalid";
      }
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/.test(
        //eslint-disable-line
        values.password
      )
    ) {
      errors.password =
        "Password must contain 8 characters along with at least one Capital letter, one number and one special character";
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
            justifyContent: "center",
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
              height: "160px",
              width: "70%",
            }}
          />
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
              color: "secondary.dark",
              fontSize: { xs: "21px", md: "25px" },
              fontWeight: "900",
            }}
          >
            Sign In
          </Typography>
          <Formik
            initialValues={formValues}
            validate={(values) => validate(values)}
            onSubmit={(values) => callLoginApi(values)}
          >
            {({ errors, touched }) => (
              <Form>
                <Box sx={{ mb: 2.5 }}>
                  <Typography
                    sx={{ color: "grey", fontSize: "13px", fontWeight: "700" }}
                  >
                    Email Address
                  </Typography>
                  <Field
                    type="email"
                    placeholder="Enter your Email"
                    className={
                      errors.email && touched.email
                        ? "is-invalid login-fields"
                        : "login-fields"
                    }
                    name="email"
                  />
                  {errors.email && touched.email && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.email}
                    </Typography>
                  )}
                </Box>
                <Box sx={{ mb: 2.5 }}>
                  <Typography
                    sx={{ color: "grey", fontSize: "13px", fontWeight: "700" }}
                  >
                    Password
                  </Typography>
                  <Box
                    sx={{
                      maxWidth: { xs: "200px", md: "350px" },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Field
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your Password"
                        className={
                          errors.password && touched.password
                            ? "is-invalid login-p-fields"
                            : "login-p-fields"
                        }
                        name="password"
                      />
                      {showPassword ? (
                        <VisibilityOff
                          sx={{ cursor: "pointer" }}
                          onClick={toggleShowPassword}
                        />
                      ) : (
                        <Visibility
                          sx={{ cursor: "pointer" }}
                          onClick={toggleShowPassword}
                        />
                      )}
                    </Box>
                    {errors.password && touched.password && (
                      <Typography sx={{ color: "red", fontSize: "13px" }}>
                        {errors.password}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Button
                  sx={{
                    backgroundColor: "#4169e1",
                    color: "white",
                    width: "100%",
                    mb: 2.5,
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "white",
                    },
                  }}
                  type="submit"
                >
                  Login
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#AA4A44",
                    color: "white",
                    width: "100%",
                    "&:hover": { backgroundColor: "red", color: "white" },
                  }}
                >
                  Register
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Login;
