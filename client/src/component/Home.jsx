import React, { Fragment, useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { addData, deleteData, getData } from "../API handling";
import { setData, setEditData } from "../stateHandler";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const userData = useSelector((state) => state.auth.user);
  const data = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    title: "",
    text: "",
    userId: "",
  };

  const validation = yup.object().shape({
    title: yup.string().required("required"),
    text: yup.string().required("required"),
  });

  const handleData = async () => {
    const dataSet = await getData(userData._id);
    dispatch(setData(dataSet.data));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    handleData();
    dispatch(setEditData({editData:null}))
  }, []);

  const handleHomeSubmit = async (values) => {
    values.userId = userData._id;
    await addData(values);
    await handleData();
  };
  const handleEdit = (id) =>{
    navigate(`/${id}/edit`)
  }

  const handleDelete = async (id) =>{
        await deleteData(id);
        await handleData();
  }
  return (
    <div className="container">
      <h1>Home Page </h1>
      <Fragment>
        {" "}
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
        <div>
          {loading ? (
            <div className="loading">Loading</div>
          ) : (
            <ul>
              {data.map((item, index) => (
                <div className="list">
                <div >{index}</div>
                  <li key={index}>{item.title}</li>
                  <button className="btn edit" onClick={()=>handleEdit(item._id)}>Edit</button>
                  <button className="btn delete" onClick={()=>handleDelete(item._id)}>Delete</button>
                </div>
              ))}
            </ul>
          )}
        </div>
      </Fragment>
    </div>
  );
};

export default Home;
