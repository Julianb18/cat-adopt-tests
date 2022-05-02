import React from "react";
import "./CardWrapper.css";

import { Card } from "../Card/Card";

export const CardWrapper = ({ cats }) => {
  return (
    <div className="pet-card-container">
      {cats.map((cat) => {
        return (
          <Card
            key={cat.id}
            name={cat.name}
            phone={cat.phone}
            email={cat.email}
            image={cat.image}
            favoured={cat.favoured}
          />
        );
      })}
    </div>
  );
};
