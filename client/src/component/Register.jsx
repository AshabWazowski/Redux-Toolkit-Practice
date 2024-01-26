import React from "react";



const Register = () => {
  return (
    <div className="register">
      <h1>Registration</h1>
      <form>
        <div className="form">
          <div className="form-fields">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" />
          </div>
          <div className="form-fields">
            <label>Email</label>
            <input type="email" placeholder="Enter Email" />
          </div>
          <div className="form-fields">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>
          <div className="button">
          <button type='submit'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
