import React, { Fragment, useState } from "react";
import { Formik, Form, Field } from "formik";
import "./forms.css";
import { Box, Typography } from "@mui/material";

function EditClient() {
  const [values] = useState({
    name: "",
    org: "",
    state: "",
    mobileNo: "",
    gst: "",
    email: "",
  });
  // ES5 function
  function validate(values) {
    let errors = {};

    if (!values.name) errors.name = "Name is required";
    if (!values.org) errors.org = "Organization Name is required";
    if (!values.state) errors.state = "Select a state";
    if (!values.mobileNo) errors.mobileNo = "Mobile Number is required";
    if (!values.gst) errors.gst = "GST is required";
    if (!values.email) errors.email = "Email is required";

    return errors;
  }
  // arrow function
  const callEditClientApi = (values) => {
    console.log("values", values);
  };

  return (
    <Fragment>
      {/* it contains name, organization name, email, state, mobile no, gst */}
      <div className="form-section">
        <Formik
          initialValues={values}
          validate={(values) => validate(values)}
          onSubmit={(values) => callEditClientApi(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  gap: "25px",
                  mb: 3,
                }}
              >
                <Box sx={{}} className="form-group">
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  >
                    Name
                  </Typography>
                  <Field
                    type="text"
                    className={
                      touched.name && errors.name
                        ? "is-invalid form-control edit-fields"
                        : "edit-fields form-control"
                    }
                    name="name"
                    placeholder="Edit Client Name"
                  />
                  {errors.name && touched.name && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.name}
                    </Typography>
                  )}
                </Box>
                <Box sx={{}} className="form-group">
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  >
                    Organization Name
                  </Typography>
                  <Field
                    type="text"
                    placeholder="Edit The Organization Name"
                    name="org"
                    className={
                      touched.org && errors.org
                        ? "is-invalid form-control edit-fields"
                        : "edit-fields form-control"
                    }
                  />
                  {errors.org && touched.org && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.org}
                    </Typography>
                  )}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  gap: "25px",
                  mb: 3,
                }}
              >
                <Box sx={{}} className="form-group">
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  >
                    Email
                  </Typography>
                  <Field
                    type="email"
                    className={
                      touched.email && errors.email
                        ? "is-invalid form-control edit-fields"
                        : "edit-fields form-control"
                    }
                    name="email"
                    placeholder="Edit Client Email"
                  />
                  {errors.email && touched.email && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.email}
                    </Typography>
                  )}
                </Box>
                <Box sx={{}} className="form-group">
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  >
                    Mobile Number
                  </Typography>
                  <Field
                    type="number"
                    placeholder="Edit The Mobile Number"
                    name="mobileNo"
                    className={
                      touched.mobileNo && errors.mobileNo
                        ? "is-invalid form-control edit-fields"
                        : "edit-fields form-control"
                    }
                  />
                  {errors.mobileNo && touched.mobileNo && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.mobileNo}
                    </Typography>
                  )}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  gap: "25px",
                  mb: 3,
                }}
              >
                <Box sx={{}} className="form-group">
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  >
                    State
                  </Typography>
                  <Field
                    type="text"
                    className={
                      touched.state && errors.state
                        ? "is-invalid form-control edit-fields"
                        : "edit-fields form-control"
                    }
                    name="state"
                    placeholder="Edit The State"
                  />
                  {errors.state && touched.state && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.state}
                    </Typography>
                  )}
                </Box>
                <Box sx={{}} className="form-group">
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  >
                    GST
                  </Typography>
                  <Field
                    type="text"
                    placeholder="Edit The Organization GST"
                    name="gst"
                    className={
                      touched.gst && errors.gst
                        ? "is-invalid form-control edit-fields"
                        : "edit-fields form-control"
                    }
                  />
                  {errors.gst && touched.gst && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.gst}
                    </Typography>
                  )}
                </Box>
              </Box>
              <button className="primary-button" type="submit">
                Edit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
}

export default EditClient;
