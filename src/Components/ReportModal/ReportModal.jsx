import React, { Fragment, useState } from "react";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import { Formik, Form, Field } from "formik";
import DatePicker from "react-date-picker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  width: { xs: "90vw", md: "40vw" },
  maxHeight: { xs: "90vh", sm: "95vh" },
  overflowY: "scroll",
  overflowX: "hidden",
};

function ReportModal({ title, show, close, showEditor }) {
  const [value, onChange] = useState(
    showEditor ? showEditor.dataWithId.date : new Date()
  );
  const [formValues] = useState({
    name: showEditor ? showEditor.dataWithId.name : "",
    paymentMode: showEditor ? showEditor.dataWithId.paymentMode : "",
  });

  function validate(values) {
    let errors = {};
    if (!values.name) {
      errors.name = "Report Name is required";
    } else if (values.name.length <= 2) {
      errors.name = "Report Name required to be more than 2 characters";
    }
    if (!values.paymentMode) errors.paymentMode = "Payment Mode is required";

    return errors;
  }

  const submitAddPackageForm = (values) => {
    if (values) {
      console.log("values are : ", values);
    }
  };

  return (
    <Fragment>
      <Box sx={{}}>
        <Modal
          id="packageModal"
          open={show}
          onClose={close}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          hideBackdrop
        >
          <Box sx={style}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                pt: 2,
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  color: "#234e8e",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                {title}
              </Typography>
              <CloseIcon sx={{ cursor: "pointer" }} onClick={close} />
            </Box>
            <div className="form-section">
              <Formik
                initialValues={formValues}
                validate={(values) => validate(values)}
                onSubmit={(values) => submitAddPackageForm(values)}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group">
                      <Box sx={{ mb: 2.5 }}>
                        <Typography
                          sx={{
                            color: "#234e8e",
                            fontSize: "1.125rem",
                            fontWeight: "600",
                          }}
                        >
                          Report Name
                        </Typography>
                        <Field
                          type="text"
                          placeholder="Enter your Report Name"
                          className={
                            errors.name && touched.name
                              ? "is-invalid add-package-fields form-control"
                              : "add-package-fields form-control"
                          }
                          name="name"
                        />
                        {errors.name && touched.name && (
                          <Typography sx={{ color: "red", fontSize: "13px" }}>
                            {errors.name}
                          </Typography>
                        )}
                      </Box>
                    </div>
                    <div className="form-group">
                      <Box sx={{ mb: 2.5 }}>
                        <Typography
                          sx={{
                            color: "#234e8e",
                            fontSize: "1.125rem",
                            fontWeight: "600",
                          }}
                        >
                          Date
                        </Typography>
                        <DatePicker
                          className="form-control add-package-fields"
                          value={value}
                          onChange={onChange}
                        />
                      </Box>
                    </div>
                    <div className="form-group">
                      <Box sx={{ mb: 2.5 }}>
                        <Typography
                          sx={{
                            color: "#234e8e",
                            fontSize: "1.125rem",
                            fontWeight: "600",
                          }}
                        >
                          Payment Mode
                        </Typography>
                        <Field
                          as="select"
                          type="text"
                          className={
                            errors.paymentMode && touched.paymentMode
                              ? "is-invalid add-package-fields form-control"
                              : "add-package-fields form-control"
                          }
                          name="paymentMode"
                        >
                          <option value="">--Payment Mode--</option>
                          <option value="online">Online</option>
                          <option value="cash">Cash</option>
                          <option value="cheque">Cheque</option>
                        </Field>
                        {errors.paymentMode && touched.paymentMode && (
                          <Typography sx={{ color: "red", fontSize: "13px" }}>
                            {errors.paymentMode}
                          </Typography>
                        )}
                      </Box>
                    </div>
                    <button className="primary-button" type="submit">
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </Box>
        </Modal>
      </Box>
    </Fragment>
  );
}

export default ReportModal;
