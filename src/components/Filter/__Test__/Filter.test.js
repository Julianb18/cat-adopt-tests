import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Filter } from "../Filter";

describe("Filter component", () => {
  test("should be able to change value of fav select", () => {
    render(<Filter />);
    const select = screen.getByLabelText(/favourite/i);

    expect(select.value).toBe("any");

    userEvent.selectOptions(select, "favoured");
    expect(select.value).toBe("favoured");

    userEvent.selectOptions(select, "not favoured");
    expect(select.value).toBe("not favoured");
  });

  test("should be able to change value of gender select", () => {
    render(<Filter />);
    const select = screen.getByLabelText(/gender/i);

    expect(select.value).toBe("any");

    userEvent.selectOptions(select, "male");
    expect(select.value).toBe("male");

    userEvent.selectOptions(select, "female");
    expect(select.value).toBe("female");
  });
});

{
  /* <select name="" id="">
  <option value="any">Any</option>
  <option value="favourite">Favourite</option>
  <option value="not favourite">Not favourite</option>
</select>; */
}