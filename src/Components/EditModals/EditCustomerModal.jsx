import React, { Fragment, useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form, Field } from "formik";
import DatePicker from "react-date-picker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "85vw", sm: "70vw", md: "60vw" },
  backgroundColor: "white",
  boxShadow: 24,
  p: 4,
  // maxHeight: { xs: "90vh", sm: "80vh" },
  overflowX: "hidden",
};

function EditClientModal({ show, close, showEditor, title }) {
  const [value, onChange] = useState(new Date());
  const [values] = useState({
    name: showEditor.dataWithId.customerName,
    email: showEditor.dataWithId.email,
    mobileNo: showEditor.dataWithId.mobileNo,
    date: showEditor.dataWithId.date,
    amount: showEditor.dataWithId.amount,
    paymentId: "",
    paymentMode: showEditor.dataWithId.payment,
  });
  // ES5 function
  function validate(values) {
    let errors = {};

    return errors;
  }
  // arrow function
  const callEditClientApi = (values) => {
    console.log("values", values);
  };

  return (
    <Fragment>
      <Modal id="editModal" open={show} onClose={close} hideBackdrop>
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
                          color: "primary.main",
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
                        placeholder="Edit Customer Name"
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
                          color: "primary.main",
                          fontSize: "15px",
                          fontWeight: "700",
                        }}
                      >
                        Email
                      </Typography>
                      <Field
                        type="email"
                        placeholder="Edit The Customer Email"
                        name="email"
                        className={
                          touched.email && errors.email
                            ? "is-invalid form-control edit-fields"
                            : "edit-fields form-control"
                        }
                      />
                      {errors.email && touched.email && (
                        <Typography sx={{ color: "red", fontSize: "13px" }}>
                          {errors.email}
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
                          color: "primary.main",
                          fontSize: "15px",
                          fontWeight: "700",
                        }}
                      >
                        MobileNo
                      </Typography>
                      <Field
                        type="text"
                        className={
                          touched.mobileNo && errors.mobileNo
                            ? "is-invalid form-control edit-fields"
                            : "edit-fields form-control"
                        }
                        name="mobileNo"
                        placeholder="Edit Customer mobileNo"
                      />
                      {errors.mobileNo && touched.mobileNo && (
                        <Typography sx={{ color: "red", fontSize: "13px" }}>
                          {errors.mobileNo}
                        </Typography>
                      )}
                    </Box>
                    <Box sx={{}} className="form-group">
                      <Typography
                        sx={{
                          color: "primary.main",
                          fontSize: "15px",
                          fontWeight: "700",
                        }}
                      >
                        Date
                      </Typography>
                      <DatePicker
                        className={
                          errors.value && touched.value
                            ? "is-invalid edit-fields form-control"
                            : "form-control edit-fields"
                        }
                        value={value}
                        onChange={onChange}
                      />
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
                          color: "primary.main",
                          fontSize: "15px",
                          fontWeight: "700",
                        }}
                      >
                        Amount
                      </Typography>
                      <Field
                        type="text"
                        placeholder="Edit The Amount"
                        name="amount"
                        className={
                          touched.amount && errors.amount
                            ? "is-invalid form-control edit-fields"
                            : "edit-fields form-control"
                        }
                      />
                      {errors.amount && touched.amount && (
                        <Typography sx={{ color: "red", fontSize: "13px" }}>
                          {errors.amount}
                        </Typography>
                      )}
                    </Box>
                    <Box sx={{}} className="form-group">
                      <Typography
                        sx={{
                          color: "primary.main",
                          fontSize: "15px",
                          fontWeight: "700",
                        }}
                      >
                        Payment Mode
                      </Typography>
                      <Field
                        as="select"
                        type="text"
                        placeholder="Edit The Payment Mode"
                        name="paymentMode"
                        className={
                          touched.paymentMode && errors.paymentMode
                            ? "is-invalid form-control edit-fields"
                            : "edit-fields form-control"
                        }
                      >
                        <option value="cash">Cash</option>
                        <option value="cheque">Cheque</option>
                        <option value="online">Online</option>
                      </Field>
                      {errors.paymentMode && touched.paymentMode && (
                        <Typography sx={{ color: "red", fontSize: "13px" }}>
                          {errors.paymentMode}
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
                          color: "primary.main",
                          fontSize: "15px",
                          fontWeight: "700",
                        }}
                      >
                        Payment ID
                      </Typography>
                      <Field
                        type="text"
                        placeholder="Edit The Payment ID"
                        name="paymentId"
                        className={
                          touched.paymentId && errors.paymentId
                            ? "is-invalid form-control edit-fields"
                            : "edit-fields form-control"
                        }
                      />
                      {errors.paymentId && touched.paymentId && (
                        <Typography sx={{ color: "red", fontSize: "13px" }}>
                          {errors.paymentId}
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
        </Box>
      </Modal>
    </Fragment>
  );
}

export default EditClientModal;
