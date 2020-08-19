import React from "react";
import LikeButton from "./LikeButton";

export default function CardItem({ title, description, imageURL }) {
  return (
    <div className="col-md-3">
      <div className="card text-center">
        <img className="card-img-top" src={imageURL} alt={imageURL} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text ">{description}</p>
          <a className="text-center" href={imageURL}>
            Download image
          </a>
          <LikeButton />
        </div>
      </div>
    </div>
  );
}
