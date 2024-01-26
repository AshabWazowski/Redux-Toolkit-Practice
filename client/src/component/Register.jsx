import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { register } from "../API handling";

const RegisterValidation = yup.object().shape({
  fullName: yup.string().required("required"),
  email: yup.string().required("required"),
  password: yup.string().required("required"),
});

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const handleRegisterSubmit = async (values) => {
    console.log("Register", values);
      await register(values);
      navigate('/login');
  };
  return (
    <div className="register">
      <h1>Registration</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterValidation}
        onSubmit={handleRegisterSubmit}
      >
        {({ values,handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div className="form">
              <div className="form-fields">
                <label>Full Name</label>
                <input
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter full name"
                  
                />
              </div>
              <div className="form-fields">
                <label>Email</label>
                <input
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-fields">
                <label>Password</label>
                <input
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Enter password"
                />
              </div>
              <div className="button">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
