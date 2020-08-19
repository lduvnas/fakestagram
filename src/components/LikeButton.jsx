import React from "react";
import { useState } from "react";

export default function LikeButton() {
  const randomLikeValue = Math.floor(Math.random() * Math.floor(999));

  let [likes, setLikes] = useState(randomLikeValue); //Start värde, retunerar en variabel och en metod

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <button onClick={handleClick} className="btn btn-primary w-100">
      Like
      <span role="img" aria-label="heart">
        ♥️
      </span>
      {likes}
    </button>
  );
}
