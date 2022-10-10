import React from "react";

const Card = ({ quiz }) => {
  console.log(quiz);
  const { id, name, logo, total } = quiz;
  return (
    <div className="col-lg-3">
      <div className="card">
        <img src={logo} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{total}</p>
          <a href="#" className="btn btn-primary">
            Take over to quiz
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
