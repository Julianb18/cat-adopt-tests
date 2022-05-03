import React, { useState } from "react";

import "./Card.css";

import heartFilled from "../../svgs/heartFilled.svg";
import heartOutlined from "../../svgs/heartOutlined.svg";

export const Card = ({
  name,
  phone,
  email,
  image,
  favoured,
  updateFavourite,
  index,
}) => {
  const [isFavoured, setIsFavoured] = useState(favoured);

  const toggleFavoured = () => {
    updateFavourite(index, !isFavoured);
    setIsFavoured((prevState) => !prevState);
  };
  return (
    <article className="card">
      <div className="card-header">
        <img src={image.url} alt={image.alt} className="card-img" />
        <button className="heart" onClick={toggleFavoured}>
          {isFavoured ? (
            <img src={heartFilled} alt="filled heart" />
          ) : (
            <img src={heartOutlined} alt="outlined heart" />
          )}
        </button>
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </article>
  );
};
