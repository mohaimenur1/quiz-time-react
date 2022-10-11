import React, { useState } from "react";
import "./Options.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Options = ({ option, correctAnswer }) => {
  // console.log(correctAnswer);
  // if(correctAnswer === )
  // const [hover, setHover] = useState(false);
  // const changeColor = () => {
  //   setHover(!hover);
  // };

  // let colorChange = hover ? "new-color" : "option-btn";
  // const buttonSelect= () =>{
  //   const findA = correctAnswer.find(asns=> option === correctAnswer)
  // }

  const notify = (option) => {
    toast(correctAnswer === option ? "correct answer!" : "Wrong Answer");
    console.log(correctAnswer);
  };

  return (
    <div>
      <div className="col mt-3 p-3 d-flex flex-column justify-content-center">
        <button
          onClick={() => notify(option)}
          type="button"
          className="option-btn rounded-pill"
          // data-bs-toggle="button"
        >
          {/* <h4>{option}</h4> */}
          {option}
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Options;
