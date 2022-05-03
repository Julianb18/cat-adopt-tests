import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";

import { Card } from "../Card";
import cats from "../../mocks/cats.json";
import { PetsContext } from "../../Pets/Pets";

const cardProps = {
  name: "Sydney",
  phone: "111-111-1111",
  email: "forrest@gmail.com",
  image: {
    url: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    alt: "cute cat",
  },
  favoured: false,
  updateFavourite: () => {},
  index: 1,
};

const setup = (props) =>
  render(
    <PetsContext.Provider
      value={{
        cats,
        setCats: () => {},
      }}
    >
      <Card {...props} />
    </PetsContext.Provider>
  );

describe("Card component", () => {
  test("should show name of cat", () => {
    setup(cardProps);

    expect(
      screen.getByRole("heading", {
        name: /sydney/i,
      })
    ).toBeInTheDocument();
  });

  test("should show phone number", () => {
    setup(cardProps);

    expect(screen.getByText(/111-111-1111/i)).toBeInTheDocument();
  });

  test("should show email", () => {
    setup(cardProps);

    expect(screen.getByText(/forrest@gmail.com/i)).toBeInTheDocument();
  });

  test("should show image with correct src", () => {
    setup(cardProps);

    expect(screen.getByAltText(/cute cat/i).src).toBe(cardProps.image.url);
  });

  test("should show outlined heart", () => {
    setup(cardProps);

    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });

  test("should show filled heart", () => {
    setup({ ...cardProps, favoured: true });

    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
  });

  test("should toggle heart status", () => {
    setup(cardProps);

    userEvents.click(screen.getByRole("button"));

    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();

    userEvents.click(screen.getByRole("button"));

    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });
});
