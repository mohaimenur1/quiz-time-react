import React, { useState } from "react";
import Options from "../Options/Options";
import "./QuizCard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizCard = ({ question }) => {
  console.log(question);
  const { options, correctAnswer } = question;
  console.log(options);

  const [showOption, setShowOption] = useState(false);
  // const [showOption, setShowOption] = useState(false);

  const correct = (correctAnswer) => {
    toast(correctAnswer);
    // toast(correctAnswer);
    // console.log(correctAnswer);
    // setShowOption(true);
    console.log(correctAnswer);
  };

  //   const { id, question, correctAnswer } = question;
  return (
    <div>
      <div className="col-lg-12 d-flex justify-content-center mt-4">
        <div className="card bg-secondary w-75 rounded-pill">
          <div className="card question text-white d-flex flex-row align-items-center justify-content-evenly">
            <h4 className="p-3">{question.question} ?</h4>

            <i
              // onClick={() => correct(correctAnswer)}
              onClick={() => correct(correctAnswer)}
              className="fa fa-eye-slash me-2"
            ></i>
            <ToastContainer
              position="top-center"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            {/* {showOption && <ToastContainer />} */}
          </div>

          <div className="option p-3">
            {/* <h5 className="d-block">{question.options}</h5> */}
            {options.map((option) => {
              return (
                <Options
                  key={option}
                  option={option}
                  correctAnswer={correctAnswer}
                />
              );
            })}
            {/* <div className="d-flex flex-column">
              <button>{options}</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
