import React, { Fragment, useState } from "react";
import { Formik, Form, Field } from "formik";
import { Box, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function UpdatePassword() {
  const [values] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  function toggleShowOldPassword() {
    setShowOldPassword(!showOldPassword);
  }

  function toggleShowNewPassword() {
    setShowNewPassword(!showNewPassword);
  }

  function toggleShowConfirmNewPassword() {
    setShowConfirmNewPassword(!showConfirmNewPassword);
  }

  const validate = (values) => {
    let errors = {};

    if (!values.oldPassword) errors.oldPassword = "Old Password is required";
    if (!values.newPassword) errors.newPassword = "New Password is required";
    if (!values.confirmNewPassword)
      errors.confirmNewPassword = "Confirming New Password is required";
    if (values.newPassword !== values.confirmNewPassword)
      errors.confirmNewPassword = "New Passwords are not matching !";
    return errors;
  };

  const updatePassword = (values) => {
    console.log(values);
  };
  return (
    <Fragment>
      <Box
        className="form-section"
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "55vh",
          overflowY: "scroll",
        }}
      >
        <Formik
          initialValues={values}
          validate={(values) => validate(values)}
          onSubmit={(values) => updatePassword(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ mb: 3 }}>
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    Old Password
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Field
                      type={showOldPassword ? "text" : "password"}
                      name="oldPassword"
                      placeholder="Enter Your Old Password"
                      className={
                        errors.oldPassword && touched.oldPassword
                          ? "is-invalid form-control updatePasswordFields"
                          : "form-control updatePasswordFields"
                      }
                    />
                    {showOldPassword ? (
                      <VisibilityOffIcon
                        onClick={toggleShowOldPassword}
                        sx={{
                          ml:
                            errors.oldPassword && touched.oldPassword
                              ? { xs: -6.5, sm: -7.5, md: -7 }
                              : { xs: -4, sm: -5, md: -7 },
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <VisibilityIcon
                        onClick={toggleShowOldPassword}
                        sx={{
                          ml:
                            errors.oldPassword && touched.oldPassword
                              ? { xs: -6.5, sm: -7.5, md: -7 }
                              : { xs: -4, sm: -5, md: -7 },
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </Box>
                  {errors.oldPassword && touched.oldPassword && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.oldPassword}
                    </Typography>
                  )}
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    New Password
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Field
                      type={showNewPassword ? "text" : "password"}
                      name="newPassword"
                      placeholder="Enter Your New Password"
                      className={
                        errors.newPassword && touched.newPassword
                          ? "is-invalid form-control updatePasswordFields"
                          : "form-control updatePasswordFields"
                      }
                    />
                    {showNewPassword ? (
                      <VisibilityOffIcon
                        onClick={toggleShowNewPassword}
                        sx={{
                          ml:
                            errors.newPassword && touched.newPassword
                              ? { xs: -6.5, sm: -7.5, md: -7 }
                              : { xs: -4, sm: -5, md: -7 },
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <VisibilityIcon
                        onClick={toggleShowNewPassword}
                        sx={{
                          ml:
                            errors.newPassword && touched.newPassword
                              ? { xs: -6.5, sm: -7.5, md: -7 }
                              : { xs: -4, sm: -5, md: -7 },
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </Box>
                  {errors.newPassword && touched.newPassword && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.newPassword}
                    </Typography>
                  )}
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    Confirm New Password
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Field
                      type={showConfirmNewPassword ? "text" : "password"}
                      name="confirmNewPassword"
                      placeholder="Enter Your Old Password"
                      className={
                        errors.confirmNewPassword && touched.confirmNewPassword
                          ? "is-invalid form-control updatePasswordFields"
                          : "form-control updatePasswordFields"
                      }
                    />
                    {showConfirmNewPassword ? (
                      <VisibilityOffIcon
                        onClick={toggleShowConfirmNewPassword}
                        sx={{
                          ml:
                            errors.confirmNewPassword &&
                            touched.confirmNewPassword
                              ? { xs: -6.5, sm: -7.5, md: -7 }
                              : { xs: -4, sm: -5, md: -7 },
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <VisibilityIcon
                        onClick={toggleShowConfirmNewPassword}
                        sx={{
                          ml:
                            errors.confirmNewPassword &&
                            touched.confirmNewPassword
                              ? { xs: -6.5, sm: -7.5, md: -7 }
                              : { xs: -4, sm: -5, md: -7 },
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </Box>
                  {errors.confirmNewPassword && touched.confirmNewPassword && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.confirmNewPassword}
                    </Typography>
                  )}
                </Box>
                <button type="submit" className="alternate-button-3">
                  Submit
                </button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Fragment>
  );
}

export default UpdatePassword;
