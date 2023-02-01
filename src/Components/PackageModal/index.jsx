import { Box, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import { Formik, Form, Field } from "formik";

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

function PackageModal({ show, close }) {
  const [formValues, setFormValues] = useState({
    name: "",
    customerLimit: "",
    emailLimit: "",
    pdfLimit: "",
    price: "",
  });

  function validate(values) {
    let errors = {};
    if (!values.name) {
      errors.name = "Package Name is required";
    } else if (values.name.length <= 2) {
      errors.name = "Package Name required to be more than 2 characters";
    }
    if (!values.customerLimit) {
      errors.customerLimit = "Customer Limit is required";
    }
    if (!values.pdfLimit) {
      errors.pdfLimit = "PDF Limit is required";
    }
    if (!values.emailLimit) {
      errors.emailLimit = "Email Limit is required";
    }
    if (!values.price) {
      errors.price = "Price is required";
    }

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
                Add New Package
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
                          Package Name
                        </Typography>
                        <Field
                          type="text"
                          placeholder="Enter your package name"
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
                          Customer Limit
                        </Typography>
                        <Field
                          type="text"
                          placeholder="Enter the limit of customers"
                          className={
                            errors.customerLimit && touched.customerLimit
                              ? "is-invalid add-package-fields form-control"
                              : "add-package-fields form-control"
                          }
                          name="customerLimit"
                        />
                        {errors.customerLimit && touched.customerLimit && (
                          <Typography sx={{ color: "red", fontSize: "13px" }}>
                            {errors.customerLimit}
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
                          Email Limit
                        </Typography>
                        <Field
                          type="text"
                          placeholder="Enter the limit of emails"
                          className={
                            errors.emailLimit && touched.emailLimit
                              ? "is-invalid add-package-fields form-control"
                              : "add-package-fields form-control"
                          }
                          name="emailLimit"
                        />
                        {errors.emailLimit && touched.emailLimit && (
                          <Typography sx={{ color: "red", fontSize: "13px" }}>
                            {errors.emailLimit}
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
                          PDF Limit
                        </Typography>
                        <Field
                          type="text"
                          placeholder="Enter the limit of PDF's"
                          className={
                            errors.pdfLimit && touched.pdfLimit
                              ? "is-invalid add-package-fields form-control"
                              : "add-package-fields form-control"
                          }
                          name="pdfLimit"
                        />
                        {errors.pdfLimit && touched.pdfLimit && (
                          <Typography sx={{ color: "red", fontSize: "13px" }}>
                            {errors.pdfLimit}
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
                          Price
                        </Typography>
                        <Field
                          type="text"
                          placeholder="Enter the Price of Package"
                          className={
                            errors.price && touched.price
                              ? "is-invalid add-package-fields form-control"
                              : "add-package-fields form-control"
                          }
                          name="price"
                        />
                        {errors.price && touched.price && (
                          <Typography sx={{ color: "red", fontSize: "13px" }}>
                            {errors.price}
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

export default PackageModal;
