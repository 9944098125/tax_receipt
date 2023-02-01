import React, { Fragment } from "react";
import { Formik, Form, Field } from "formik";
import { Box, Typography } from "@mui/material";
import "./forms.css";

function AddMore() {
  const [values] = React.useState({
    regNo: "",
    payment: "",
    pan: "",
    address: "",
  });
  const [stampFile, setStampFile] = React.useState("");
  const [waterMark, setWaterMark] = React.useState("");
  const [logo, setLogo] = React.useState("");

  function validate(values) {
    let errors = {};
    if (!values.regNo) errors.regNo = "Registration Number is required";
    if (!values.payment) errors.payment = "Select an option";
    if (!values.pan) errors.pan = "PAN Number is required";
    if (!values.address) errors.address = "Address is required";
    return errors;
  }

  function submitAddMore(values) {
    console.log(values);
  }

  return (
    <Fragment>
      <div style={{ overflowX: "hidden" }} className="form-section">
        <Formik
          initialValues={values}
          validate={(values) => validate(values)}
          onSubmit={(values) => submitAddMore(values)}
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
                    Registration No'
                  </Typography>
                  <Field
                    type="text"
                    name="regNo"
                    placeholder="Enter Client Registration Number"
                    className={
                      errors.regNo && touched.regNo
                        ? "is-invalid edit-fields form-control"
                        : "edit-fields form-control"
                    }
                  />
                  {errors.regNo && touched.regNo && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.regNo}
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
                    PAN No'
                  </Typography>
                  <Field
                    type="text"
                    name="pan"
                    placeholder="Enter Client PAN Number"
                    className={
                      errors.pan && touched.pan
                        ? "is-invalid edit-fields form-control"
                        : "edit-fields form-control"
                    }
                  />
                  {errors.pan && touched.pan && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.pan}
                    </Typography>
                  )}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: { xs: "none", sm: "space-between" },
                  mb: 3,
                  pr: { xs: 0, md: 20 },
                }}
              >
                <Box sx={{ width: "200px", mb: 3 }} className="form-group">
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  >
                    Stamp
                  </Typography>
                  <input
                    type="file"
                    onChange={(e) => setStampFile(e.target.files[0])}
                  />
                </Box>
                <Box sx={{ width: "200px" }} className="form-group">
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  >
                    Logo
                  </Typography>
                  <input
                    type="file"
                    onChange={(e) => setLogo(e.target.files[0])}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 3,
                }}
              >
                <Box sx={{ width: "200px", mb: 3 }} className="form-group">
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  >
                    Water Mark
                  </Typography>
                  <input
                    type="file"
                    onChange={(e) => setWaterMark(e.target.files[0])}
                  />
                </Box>
                <Box sx={{}} className="form-group">
                  <Typography
                    sx={{
                      color: "#00254d",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  >
                    Address
                  </Typography>
                  <Field
                    type="text"
                    name="address"
                    placeholder="Enter Client Address"
                    className={
                      errors.address && touched.address
                        ? "is-invalid edit-fields form-control"
                        : "edit-fields form-control"
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
                    Own Payment
                  </Typography>
                  <Field
                    type="text"
                    name="payment"
                    placeholder="Enter Client Payment Type"
                    className={
                      errors.payment && touched.payment
                        ? "is-invalid edit-fields form-control"
                        : "edit-fields form-control"
                    }
                  />
                  {errors.payment && touched.payment && (
                    <Typography sx={{ color: "red", fontSize: "13px" }}>
                      {errors.payment}
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
      </div>
    </Fragment>
  );
}

export default AddMore;
