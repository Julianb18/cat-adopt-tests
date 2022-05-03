import { render, screen, within } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";

import { Pets } from "../Pets";
import catsMock from "../../mocks/cats.json";

const server = setupServer(
  rest.get("http://localhost:4000/cats", (req, res, ctx) => {
    return res(ctx.json(catsMock));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Pets component", () => {
  test("should render the correct amount of cards", async () => {
    render(<Pets />);
    const cards = await screen.findAllByRole("article");

    expect(cards.length).toBe(5);
  });

  test("should filter for male cats", async () => {
    render(<Pets />);
    const cards = await screen.findAllByRole("article");

    userEvent.selectOptions(screen.getByLabelText(/gender/i), "male");
    const maleCards = screen.getAllByRole("article");
    expect(maleCards).toStrictEqual([cards[1], cards[3]]);
  });

  test("should filter for female cats", async () => {
    render(<Pets />);
    const cards = await screen.findAllByRole("article");

    userEvent.selectOptions(screen.getByLabelText(/gender/i), "female");
    const femaleCards = screen.getAllByRole("article");
    expect(femaleCards).toStrictEqual([cards[0], cards[2], cards[4]]);
  });

  test("should filter for a favoured cats", async () => {
    render(<Pets />);
    const cards = await screen.findAllByRole("article");

    const firstCardBtn = within(cards[0]).getByRole("button");
    const fourthCardBtn = within(cards[3]).getByRole("button");

    userEvent.click(firstCardBtn);
    userEvent.click(fourthCardBtn);

    userEvent.selectOptions(screen.getByLabelText(/favourite/i), "favoured");

    expect(screen.getAllByRole("article")).toStrictEqual([cards[0], cards[3]]);
  });

  test("should filter for not favoured cats", async () => {
    render(<Pets />);
    const cards = await screen.findAllByRole("article");

    const firstCardBtn = within(cards[0]).getByRole("button");
    const fourthCardBtn = within(cards[3]).getByRole("button");

    userEvent.click(firstCardBtn);
    userEvent.click(fourthCardBtn);

    userEvent.selectOptions(
      screen.getByLabelText(/favourite/i),
      "not favoured"
    );

    expect(screen.getAllByRole("article")).toStrictEqual([
      cards[1],
      cards[2],
      cards[4],
    ]);
  });

  test("should filter for favoured male cats", async () => {
    render(<Pets />);
    const cards = await screen.findAllByRole("article");

    const firstCardBtn = within(cards[0]).getByRole("button");
    const fourthCardBtn = within(cards[3]).getByRole("button");

    userEvent.click(firstCardBtn);
    userEvent.click(fourthCardBtn);

    userEvent.selectOptions(screen.getByLabelText(/favourite/i), "favoured");
    userEvent.selectOptions(screen.getByLabelText(/gender/i), "male");

    expect(screen.getAllByRole("article")).toStrictEqual([cards[3]]);
  });
});
