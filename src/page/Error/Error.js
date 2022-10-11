import React from "react";

const Error = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h1>SomeThing Went Wrong!</h1>
      <lottie-player
        src="https://assets4.lottiefiles.com/packages/lf20_6nmazhqu.json"
        background="transparent"
        speed="1"
        style={{ width: 500, height: 500 }}
        loop
        // controls
        autoplay
      ></lottie-player>
    </div>
  );
};

export default Error;
