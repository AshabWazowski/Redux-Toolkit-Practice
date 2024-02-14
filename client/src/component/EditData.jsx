import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import { updateData } from "../API handling";

const EditData = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.auth.data);
  let { id } = useParams();

  const itemData = data.find((item) => item._id === id);

  const initialValues = {
    title: itemData.title,
    text: itemData.text,
  };

  const handleEditSubmit = async (values) => {
          await updateData(values, id)
          navigate('/home')
  };

  console.log(itemData);
    return (
      <div>
        <Formik initialValues={initialValues} onSubmit={handleEditSubmit}>
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

export default EditData;
