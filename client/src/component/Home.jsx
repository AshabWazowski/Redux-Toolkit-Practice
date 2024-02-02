import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

const Home = () => {
  const initialValues = {
    title: "",
    text: "",
  };

  const validation = yup.object().shape({
    title: yup.string().required("required"),
    text: yup.string().required("required"),
  });

  const handleHomeSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="container">
      <h1>Home Page </h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleHomeSubmit}
          validationSchema={validation}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="home">
              <div className="form-fields">
                <label>Title</label>
                <input
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Title"
                />
              </div>
              <div className="form-fields">
                <label>Text</label>
                <input
                  name="text"
                  value={values.text}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Text..."
                />
              </div>

              <button type="submit">Submit</button>
          </div>
            </form>
          )}
        </Formik>
    </div>
  );
};

export default Home;
