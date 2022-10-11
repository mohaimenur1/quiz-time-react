import React from "react";
import Options from "../Options/Options";
import "./QuizCard.css";

const QuizCard = ({ question }) => {
  console.log(question);
  const { options, correctAnswer } = question;
  console.log(options);
  //   const { id, question, correctAnswer } = question;
  return (
    <div>
      <div className="col-lg-12 d-flex justify-content-center mt-4">
        <div className="card bg-secondary w-75 rounded-pill">
          <div className="card question text-white">
            <h4 className="p-3">{question.question} ?</h4>
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
