import { render, screen } from "@testing-library/react";

import cats from "../../mocks/cats.json";
import { PetsContext } from "../../Pets/Pets";

import { CardWrapper } from "../CardWrapper";

describe("CardWrapper component", () => {
  test("should render five card components", () => {
    render(
      <PetsContext.Provider
        value={{
          cats,
          setCats: () => {},
        }}
      >
        <CardWrapper />
      </PetsContext.Provider>
    );

    expect(screen.getAllByRole("article").length).toBe(5);
  });
});
