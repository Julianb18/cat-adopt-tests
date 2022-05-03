import React, { useContext } from "react";
import "./CardWrapper.css";

import { Card } from "../Card/Card";
import { PetsContext } from "../Pets/Pets";

export const CardWrapper = () => {
  const { cats } = useContext(PetsContext);

  return (
    <div className="pet-card-container">
      {cats.map((cat, index) => {
        return (
          <Card
            key={cat.id}
            name={cat.name}
            phone={cat.phone}
            email={cat.email}
            image={cat.image}
            favoured={cat.favoured}
            index={index}
          />
        );
      })}
    </div>
  );
};
