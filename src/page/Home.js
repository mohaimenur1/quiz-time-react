import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";

const Home = () => {
  const quizData = useLoaderData();
  const data = quizData.data;
  console.log(data);

  return (
    <div className="container">
      <Header />
      <div className="row mt-5">
        {data.map((quiz) => {
          return <Card key={quiz.id} quiz={quiz} />;
        })}
      </div>
    </div>
  );
};

export default Home;
