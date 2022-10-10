import React from "react";
import "./Card.css";

const Card = ({ quiz }) => {
  console.log(quiz);
  const { id, name, logo, total } = quiz;
  return (
    <div className="col-lg-3">
      <div className="card rounded-4">
        <img
          src={logo}
          className="card-img-top img-fluid p-2 rounded-4"
          alt="..."
        />
        <div className="card-body d-flex justify-content-between">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-text fw-semibold">Total: {total}</p>
        </div>
        <button className="btn card-btn text-white fw-bold rounded-pill">
          Go through quiz
        </button>
      </div>
    </div>
  );
};

export default Card;
