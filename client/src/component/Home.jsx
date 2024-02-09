import React, { useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { addData, getData } from "../API handling";
import { setData } from "../stateHandler";


const Home = () => {
  const {_id} = useSelector((state) => state.user);
  const data = useSelector((state)=> state.data)
  const dispatch = useDispatch();
  const initialValues = {
    title: "",
    text: "",
    userId:'',
  };

  const validation = yup.object().shape({
    title: yup.string().required("required"),
    text: yup.string().required("required"),
  });

  const handleData = async () =>{
    const dataSet = await getData(_id);
    console.log(dataSet);
    dispatch(setData(dataSet.data));
  }

  useEffect(()=>{
    handleData();
  }, [])

  const handleHomeSubmit = async (values) => {   
    values.userId = _id;
    await addData(values);
    handleData();
  };

  console.log(_id);

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
        <div>
        <ul>
            {data.map((item, index)=>(<li key={index}>{item.title}</li>)
            )}
        </ul>
        </div>
    </div>
  );
};

export default Home;
