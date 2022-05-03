import React, { useEffect, useState } from "react";
import axios from "axios";

import { Filter } from "../Filter/Filter";
import { CardWrapper } from "../CardWrapper/CardWrapper";

import "./Pets.css";

export const Pets = () => {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [filters, setFilters] = useState({
    gender: "any",
    favoured: "any",
  });

  console.log("CATS", cats);
  console.log("FILTERED CATS====>", filteredCats);
  const fetchCats = async () => {
    const response = await axios.get("http://localhost:4000/cats");

    setCats(response.data);
    setFilteredCats(response.data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  useEffect(() => {
    let catsFiltered = [...cats];

    if (filters.gender !== "any") {
      catsFiltered = catsFiltered.filter(
        (cat) => cat.gender === filters.gender
      );
    }
    if (filters.favoured !== "any") {
      catsFiltered = catsFiltered.filter(
        (cat) =>
          cat.favoured === (filters.favoured === "favoured" ? true : false)
      );
    }
    setFilteredCats(catsFiltered);
  }, [filters]);

  return (
    <div className="container">
      <div className="app-container">
        <Filter filters={filters} setFilters={setFilters} />
        <CardWrapper cats={filteredCats} setCats={setCats} />
      </div>
    </div>
  );
};
