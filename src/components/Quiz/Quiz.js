import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../QuizCard/QuizCard";
import "./Quiz.css";

const Quiz = () => {
  const quizDetails = useLoaderData();

  const quizs = quizDetails.data;
  const questions = quizs.questions;
  console.log(questions);
  return (
    <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
      <div className="logo d-flex justify-content-center align-items-center">
        <img className="img-fluid logo-resize" src={quizs.logo} alt="" />
      </div>
      <h1 className="mt-3">
        Quiz For <span>{quizs.name}</span>{" "}
      </h1>
      <div className="">
        {questions.map((question) => {
          return <QuizCard key={question.id} question={question} />;
        })}
      </div>
    </div>
  );
};

export default Quiz;
