import React, { Component } from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import * as exampleActions from "../../actions/example/actions";
import Textbox from "../../components/Textbox/Textbox";
import Button from "../../components/Button/Button";

class ExampleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginMessage: ""
    };
  }

  render() {
    const { getExamples } = this.props;
    return (
      <Formik
        initialValues={{ email: "example@gmail.com", password: "test1" }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required("Required"),
          password: Yup.string()
            .min(4)
            .max(12)
            .required("Required")
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await getExamples(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <Textbox
              direction="row"
              labelText="Email"
              type="text"
              name={"email"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.email}
              error={errors.email}
              touched={touched.email}
            />
            <Textbox
              direction="row"
              labelText="Password"
              type="text"
              name={"password"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.password}
              error={errors.password}
              touched={touched.password}
            />
            <Button
              type="submit"
              text="Submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
            />
            WELCOME TO CREATE REACT APP REDUX STARTER KIT
          </form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => ({
  getExamples: data => dispatch(exampleActions.getExamples(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleForm);
