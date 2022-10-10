import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="row">
      <div className="col-lg-6 header-img">
        <lottie-player
          src="https://assets8.lottiefiles.com/private_files/lf30_46kycmnm.json"
          background="transparent"
          speed="1"
          //   style={{ width: 700, height: 700 }}
          loop
          autoplay
        ></lottie-player>
      </div>
      <div className="header-details col-lg-6 d-flex flex-column align-items-center justify-content-center">
        <h1 className="display-3">
          Time for <span className="fw-bold header-text-color">Quizes</span>
        </h1>
        <h1 className="display-6 fw-bolder header-text-color">
          Verfiy Your Knowledge About Those Fields
        </h1>
      </div>
    </div>
  );
};

export default Header;
