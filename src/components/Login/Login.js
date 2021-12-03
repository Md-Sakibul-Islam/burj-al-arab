import React, { useContext } from "react";
import logo from "../../images/login.png";
import './Login.css'
import "bootstrap/dist/css/bootstrap.min.css";
const Login = () => {
  return (
    <div className="container">
      <h4 className="mt-5">
        Please <span className="text-danger">Login Here</span>
      </h4>
      <div className="row">
        <div className="col-md-6 col-lg-6 col-12">
          <img src={logo} alt="" />
        </div>
        <div className="col-md-6 col-lg-6 col-12">
          <div className="login-from">
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <br />
          <input type="password" name="" id="" placeholder="Your Password" />
          <br /><br />
          <div>
          <button className="btn btn-danger login-btn">Login</button>
          <button className="btn btn-danger login-btn">Google</button>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
