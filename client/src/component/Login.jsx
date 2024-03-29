import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { login } from "../API handling";
import { useDispatch } from "react-redux";
import { setLogin } from "../stateHandler/index.js";




const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const initialValues = {
    email: "",
    password: "",
  };

  const handleLoginSubmit = async (values) => {
  const loggedIn = await login(values);

    if(loggedIn){
        dispatch(setLogin(loggedIn.data))
      navigate('/home')
    }


  };


  return (
    <div className="login">
      <h1>Login</h1>
      <Formik initialValues={initialValues} onSubmit={handleLoginSubmit}>
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div className="form">
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

export default Login;
