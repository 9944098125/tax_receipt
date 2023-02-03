import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function EmailSettings() {
  const [values] = React.useState({
    subject: "",
  });

  const [textInput, setTextInput] = React.useState({
    rawData: "",
    formattedData: "",
  });

  const handleTextInputChange = (inputData, delta, source, editor) => {
    setTextInput({ formattedData: inputData, rawData: editor.getText() });
  };

  const validate = (values) => {
    let errors = {};
    if (!values.subject) errors.subject = "Mention some subject for the mail";
    if (!values.textInput) errors.textInput = "Content is required";

    return errors;
  };

  const onSubmit = (values) => {
    if (values) {
      console.log(values);
    }
  };

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "55vh",
          overflowY: "scroll",
          pt: 4,
        }}
        className="form-section"
      >
        <Formik
          initialValues={values}
          validate={(values) => validate(values)}
          onSubmit={(values) => onSubmit(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <Box sx={{ mb: 3 }} className="form-group">
                <Typography
                  sx={{ color: "@00254d", fontWeight: "700", fontSize: "16px" }}
                >
                  Subject
                </Typography>
                <Field
                  type="text"
                  name="subject"
                  placeholder="Some subject for your mail..."
                  className={
                    errors.subject && touched.subject
                      ? "is-invalid form-control updatePasswordFields"
                      : "form-control updatePasswordFields"
                  }
                />
                {touched.subject && errors.subject && (
                  <Typography sx={{ color: "red", fontSize: "13px" }}>
                    {errors.subject}
                  </Typography>
                )}
              </Box>

              <Box sx={{ mb: 3 }} className="form-group">
                <Typography
                  sx={{ color: "@00254d", fontWeight: "700", fontSize: "16px" }}
                >
                  Email-Content
                </Typography>
                <ReactQuill
                  placeholder="Enter your Content here"
                  value={textInput.formattedData}
                  onChange={handleTextInputChange}
                  fontSize={"25px"}
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    border: `2px solid ${errors.textInput ? "red" : "white"}`,
                  }}
                />
                {errors.textInput && (
                  <Typography sx={{ color: "red", fontSize: "13px" }}>
                    {errors.textInput}
                  </Typography>
                )}
              </Box>

              <button type="submit" className="alternate-button-3">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </Box>
    </Fragment>
  );
}

export default EmailSettings;
