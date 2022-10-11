import React from "react";
import "./Options.css";

const Options = ({ option }) => {
  return (
    <div>
      <div className="col mt-3 p-3 d-flex flex-column justify-content-center">
        <button className="option-btn rounded-pill">
          <h4>{option}</h4>
        </button>
      </div>
    </div>
  );
};

export default Options;
