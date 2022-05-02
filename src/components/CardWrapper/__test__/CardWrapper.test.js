import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import cats from "../../mocks/cats.json";

import { CardWrapper } from "../CardWrapper";

describe("CardWrapper component", () => {
  test("should render five card components", () => {
    render(<CardWrapper cats={cats} />);

    expect(screen.getAllByRole("article").length).toBe(5);
  });
});
