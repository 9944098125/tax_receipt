import React, { Fragment, useState } from "react";
import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Field, Form, Formik } from "formik";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import DocumentTitle from "../../Components/DocumentTitle";

function EmailSettings() {
  DocumentTitle("Email Settings | Tax Receit");
  const [values, setValues] = useState({
    cc: "",
    bcc: "",
  });

  const validate = (values) => {
    let errors = {};
    if (!values.cc) errors.cc = "CC is required";
    if (!values.bcc) errors.bcc = "BCC is required";
    return errors;
  };

  const callEmailSettingsApi = (values) => {
    if (values) {
      console.log(values);
    }
  };

  return (
    <Fragment>
      <Box
        sx={{
          color: "#00254d",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
        }}
      >
        <Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>
          EMAIL SETTINGS
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <HomeIcon />
          <Typography sx={{ fontSize: "0.875rem" }}>
            / Email Settings
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: { xs: 3, sm: 5, md: 7 },
        }}
        className="form-section"
      >
        <Formik
          initialValues={values}
          validate={(values) => validate(values)}
          onSubmit={(values) => callEmailSettingsApi(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <Box sx={{ width: "70%" }}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    CC
                  </Typography>
                  <Field
                    type="text"
                    name="cc"
                    placeholder="Enter CC"
                    className={
                      errors.cc && touched.cc
                        ? "is-invalid edit-fields form-control"
                        : "form-control edit-fields"
                    }
                  />
                  {errors.cc && touched.cc && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.cc}
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
                    BCC
                  </Typography>
                  <Field
                    type="text"
                    name="bcc"
                    placeholder="Enter BCC"
                    className={
                      errors.bcc && touched.bcc
                        ? "is-invalid edit-fields form-control"
                        : "form-control edit-fields"
                    }
                  />
                  {errors.bcc && touched.bcc && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.bcc}
                    </Typography>
                  )}
                </Box>
                <button type="submit" className="emailSettingsBtn">
                  <BeenhereIcon sx={{ color: "white" }} />
                  Save
                </button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Fragment>
  );
}

export default EmailSettings;
