import React, { useState } from "react";
// import CongratulationModal from "../Reusable/Modal/CongratulationModal";
import "../style.css"

const LoginPage = () => {
  const [isPhone, setIsPhone] = useState(true);

  // const onChangeHandler = () => {};

  const sendOtpHandler = (e) => {
    e.preventDefault();
    setIsPhone(false);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setIsPhone(true);
  };

  return (
    <>
      <div className="container loginform">
        <div className="container-wrapper">
          <div className="logo-img">
            <img src="../logo1.png" alt="" className="logo" />
          </div>

          <h3 className="login-text">Login</h3>
          {isPhone ? (
            <form>
              <div className="item">
                <input
                  className="input"
                  type="tel"
                  placeholder="Phone Number"
                />
              </div>
              <div className="item submit">
                <button type="submit" onClick={sendOtpHandler}>
                  Send OTP
                </button>
              </div>
            </form>
          ) : (
            <form>
              <div className="item">
                <input className="input" type="number" placeholder="OTP" />{" "}
              </div>
              <div className="item submit">
                <button type="submit" onClick={loginHandler}>
                  Login
                </button>
                {/* <CongratulationModal/> */}
              </div>
              <span className="remember">
                {" "}
                <a href="#">Resend OTP</a>{" "}
              </span>
            </form>
          )}

          <span className="ac">
            Don't have an Account? <a href="/register">Sign Up</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
