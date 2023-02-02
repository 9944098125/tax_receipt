import React, { Fragment, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import states from "./states.json";
import Dropzone from "react-dropzone";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

function EditAccount() {
  const [values] = useState({
    name: "",
    org: "",
    email: "",
    mobileNo: "",
    registrationNo: "",
    panNo: "",
    stamp: "",
    logo: "",
    waterMark: "",
    address: "",
    state: "",
    gst: "",
    website: "",
    paymentLink: "",
  });

  function validate(values) {
    let errors = {};

    if (!values.name) errors.name = "Name is required";
    if (!values.org) errors.org = "Organization Name is required";
    if (!values.email) errors.email = "Email is required";
    if (!values.mobileNo) errors.mobileNo = "Mobile Number is required";
    if (!values.registrationNo)
      errors.registrationNo = "Registration Number is required";
    if (!values.panNo) errors.panNo = "PAN Number is required";
    if (!values.stamp) errors.stamp = "Stamp is required";
    if (!values.logo) errors.logo = "Logo is required";

    if (!values.waterMark) errors.waterMark = "Water Mark is required";
    if (!values.address) errors.address = "Address is required";
    if (!values.state) errors.state = "State is required";
    if (!values.gst) errors.gst = "GST is required";
    if (!values.website) errors.website = "Website is required";
    if (!values.paymentLink) errors.paymentLink = "Payment Link is required";

    return errors;
  }

  function submitSuccess(values) {
    console.log(values);
  }

  const onDropStamp = () => {};

  const onDropLogo = () => {};

  const onDropWaterMark = () => {};

  return (
    <Fragment>
      <Box
        sx={{ p: 3, height: "55vh", overflowY: "scroll" }}
        className="form-section"
      >
        <Formik
          initialValues={values}
          validate={(values) => validate(values)}
          onSubmit={(values) => submitSuccess(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  gap: { xs: 2, sm: 5, md: 10 },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    Name
                  </Typography>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className={
                      errors.name && touched.name
                        ? "is-invalid form-control edit-fields"
                        : "form-control edit-fields"
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
                      color: "#00254d",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    Organization Name
                  </Typography>
                  <Field
                    type="text"
                    name="org"
                    placeholder="Enter Your Organization Name"
                    className={
                      errors.org && touched.org
                        ? "is-invalid form-control edit-fields"
                        : "form-control edit-fields"
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
                  gap: { xs: 2, sm: 5, md: 10 },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    Email
                  </Typography>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    className={
                      errors.email && touched.email
                        ? "is-invalid form-control edit-fields"
                        : "form-control edit-fields"
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
                      color: "#00254d",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    Mobile Number
                  </Typography>
                  <Field
                    type="text"
                    name="mobileNo"
                    placeholder="Enter Your Mobile Number"
                    className={
                      errors.mobileNo && touched.mobileNo
                        ? "is-invalid form-control edit-fields"
                        : "form-control edit-fields"
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
                  gap: { xs: 2, sm: 5, md: 10 },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    Registration Number
                  </Typography>
                  <Field
                    type="text"
                    name="registrationNo"
                    placeholder="Enter Your Registration Number"
                    className={
                      errors.registrationNo && touched.registrationNo
                        ? "is-invalid form-control edit-fields"
                        : "form-control edit-fields"
                    }
                  />
                  {errors.registrationNo && touched.registrationNo && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.registrationNo}
                    </Typography>
                  )}
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    PAN Number
                  </Typography>
                  <Field
                    type="text"
                    name="panNo"
                    placeholder="Enter Your PAN Number"
                    className={
                      errors.panNo && touched.panNo
                        ? "is-invalid form-control edit-fields"
                        : "form-control edit-fields"
                    }
                  />
                  {errors.panNo && touched.panNo && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.panNo}
                    </Typography>
                  )}
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  gap: { xs: 2, sm: 5, md: 10 },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    Stamp
                  </Typography>
                  <Dropzone onDrop={onDropStamp}>
                    {({ getRootProps, getInputProps }) => (
                      <div
                        className="d-flex align-items-center edit-fields form-control"
                        {...getRootProps()}
                      >
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop (or) select files by clicking here</p>
                        <CloudDownloadIcon
                          sx={{ fontSize: "25px", cursor: "pointer", mt: -2 }}
                        />
                      </div>
                    )}
                  </Dropzone>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    Logo
                  </Typography>
                  <Dropzone onDrop={onDropLogo}>
                    {({ getRootProps, getInputProps }) => (
                      <div
                        className="d-flex align-items-center edit-fields form-control"
                        {...getRootProps()}
                      >
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop (or) select files by clicking here</p>
                        <CloudDownloadIcon
                          sx={{ fontSize: "25px", cursor: "pointer", mt: -2 }}
                        />
                      </div>
                    )}
                  </Dropzone>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  gap: { xs: 2, sm: 5, md: 10 },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    Water Mark
                  </Typography>
                  <Dropzone onDrop={onDropWaterMark}>
                    {({ getRootProps, getInputProps }) => (
                      <div
                        className="d-flex align-items-center edit-fields form-control"
                        {...getRootProps()}
                      >
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop (or) select files by clicking here</p>
                        <CloudDownloadIcon
                          sx={{ fontSize: "25px", cursor: "pointer", mt: -2 }}
                        />
                      </div>
                    )}
                  </Dropzone>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    Address
                  </Typography>
                  <Field
                    as="textarea"
                    type="text"
                    name="address"
                    placeholder="Enter Your Address"
                    className={
                      errors.address && touched.address
                        ? "is-invalid form-control edit-fields"
                        : "form-control edit-fields"
                    }
                  />
                  {errors.address && touched.address && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.address}
                    </Typography>
                  )}
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  gap: { xs: 2, sm: 5, md: 10 },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    State
                  </Typography>
                  <Field
                    as="select"
                    type="text"
                    name="state"
                    className={
                      errors.state && touched.state
                        ? "is-invalid form-control edit-fields"
                        : "form-control edit-fields"
                    }
                  >
                    <option value="">--state--</option>
                    {states.map((state, idx) => (
                      <option key={idx} value={state}>
                        {state}
                      </option>
                    ))}
                  </Field>
                  {errors.state && touched.state && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.state}
                    </Typography>
                  )}
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    GST
                  </Typography>
                  <Field
                    type="text"
                    name="gst"
                    placeholder="Enter Your GST"
                    className={
                      errors.gst && touched.gst
                        ? "is-invalid form-control edit-fields"
                        : "form-control edit-fields"
                    }
                  />
                  {errors.gst && touched.gst && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.gst}
                    </Typography>
                  )}
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  gap: { xs: 2, sm: 5, md: 10 },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    Website
                  </Typography>
                  <Field
                    type="text"
                    name="website"
                    placeholder="Enter Your Website"
                    className={
                      errors.website && touched.website
                        ? "is-invalid form-control edit-fields"
                        : "form-control edit-fields"
                    }
                  />
                  {errors.website && touched.website && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.website}
                    </Typography>
                  )}
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    Payment Link
                  </Typography>
                  <Field
                    type="text"
                    name="paymentLink"
                    placeholder="Enter Your Payment Link"
                    className={
                      errors.paymentLink && touched.paymentLink
                        ? "is-invalid form-control edit-fields"
                        : "form-control edit-fields"
                    }
                  />
                  {errors.paymentLink && touched.paymentLink && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.paymentLink}
                    </Typography>
                  )}
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                <button type="submit" className="alternate-button">
                  Submit
                </button>
                <button type="button" className="alternate-button-2">
                  Generate Payment Link
                </button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Fragment>
  );
}

export default EditAccount;
