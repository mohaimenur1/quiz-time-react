import React from "react";

const QuizCard = ({ question }) => {
  console.log(question);
  //   const { id, question, correctAnswer } = question;
  return (
    <div>
      <div className="col-lg-12">
        <div className="card bg-secondary">
          <div className="card question bg-primary"></div>
          <div className="options">
            <div className="card option bg-light"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
