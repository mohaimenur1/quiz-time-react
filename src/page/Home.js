import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card/Card";

const Home = () => {
  const quizData = useLoaderData();
  const data = quizData.data;
  console.log(data);

  return (
    <div className="row">
      {data.map((quiz) => {
        return <Card key={quiz.id} quiz={quiz} />;
      })}
    </div>
  );
};

export default Home;
