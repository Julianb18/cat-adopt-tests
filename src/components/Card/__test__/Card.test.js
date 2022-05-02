import { render, screen } from "@testing-library/react";
import { Card } from "../Card";

const cardProps = {
  name: "Sydney",
  phone: "111-111-1111",
  email: "forrest@gmail.com",
  image: {
    url: "https://unsplash.com/photos/rW-I87aPY5Y",
    alt: "cute cat",
  },
  favoured: false,
};

describe("Card component", () => {
  test("should show name of cat", () => {
    render(<Card {...cardProps} />);

    expect(
      screen.getByRole("heading", {
        name: /sydney/i,
      })
    ).toBeInTheDocument();
  });

  test("should show phone number", () => {
    render(<Card {...cardProps} />);

    expect(screen.getByText(/111-111-1111/i)).toBeInTheDocument();
  });

  test("should show email", () => {
    render(<Card {...cardProps} />);

    expect(screen.getByText(/forrest@gmail.com/i)).toBeInTheDocument();
  });

  test("should show image with correct src", () => {
    render(<Card {...cardProps} />);

    expect(screen.getByAltText(/cute cat/i).src).toBe(cardProps.image.url);
  });
});
