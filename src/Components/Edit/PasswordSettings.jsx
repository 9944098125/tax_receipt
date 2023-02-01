import { Typography, Box } from "@mui/material";
import { Field, Formik, Form } from "formik";
import React, { Fragment, useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./forms.css";

function PasswordSettings() {
  const [values] = useState({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function toggleShowConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  const validate = (values) => {
    let errors = {};
    if (!values.password) errors.password = "Password is required";
    if (!values.confirmPassword)
      errors.confirmPassword = "Confirm Your Password";

    return errors;
  };

  function changePassword(values) {
    console.log(values);
  }

  return (
    <Fragment>
      <Formik
        initialValues={values}
        validate={(values) => validate(values)}
        onSubmit={(values) => changePassword(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: "45px",
                mb: 3,
              }}
            >
              <Box sx={{}} className="form-group">
                <Typography
                  sx={{ color: "#00254d", fontSize: "15px", fontWeight: "700" }}
                >
                  Password*
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter Your Password"
                    className={
                      errors.password && touched.password
                        ? "is-invalid form-control password-fields"
                        : "form-control password-fields"
                    }
                  />
                  {showPassword ? (
                    <RemoveRedEyeIcon
                      sx={{ ml: errors.password && touched.password ? -7 : -5 }}
                      onClick={toggleShowPassword}
                    />
                  ) : (
                    <VisibilityOffIcon
                      sx={{ ml: errors.password && touched.password ? -7 : -5 }}
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
              <Box sx={{}} className="form-group">
                <Typography
                  sx={{ color: "#00254d", fontSize: "15px", fontWeight: "700" }}
                >
                  Confirm Password*
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Field
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Enter Your Password"
                    className={
                      errors.confirmPassword && touched.confirmPassword
                        ? "is-invalid form-control password-fields"
                        : "form-control password-fields"
                    }
                  />
                  {showConfirmPassword ? (
                    <RemoveRedEyeIcon
                      sx={{
                        ml:
                          errors.confirmPassword && touched.confirmPassword
                            ? -7
                            : -5,
                      }}
                      onClick={toggleShowConfirmPassword}
                    />
                  ) : (
                    <VisibilityOffIcon
                      sx={{
                        ml:
                          errors.confirmPassword && touched.confirmPassword
                            ? -7
                            : -5,
                      }}
                      onClick={toggleShowConfirmPassword}
                    />
                  )}
                </Box>
                {errors.confirmPassword && touched.confirmPassword && (
                  <Typography sx={{ color: "red", fontSize: "13px" }}>
                    {errors.confirmPassword}
                  </Typography>
                )}
              </Box>
            </Box>
            <button className="primary-button" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}

export default PasswordSettings;
